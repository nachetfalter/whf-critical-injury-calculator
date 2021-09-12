import React, { useState, useEffect } from 'react';
import './App.css';
import { Select, Input, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20, faUserInjured } from '@fortawesome/free-solid-svg-icons'
const { Option } = Select;
const { dictionary } = require('./config');

const App = () => {
  const [target, setTarget]  = useState('Target');
  const [rollResult, setRollResult]  = useState('Random');
  const [damageResistance, setDamageResistance]  = useState(null);
  const [damage, setDamage]  = useState(null);
  const [injuryRoll, setInjuryRoll]  = useState(null);
  const [currentInjury, setCurrentInjury]  = useState(null);
  const [additionalInjury, setAdditionalInjury]  = useState(null);
  const [showInjuryModal, setShowInjuryModal]  = useState(false);

  function onSetTarget (value) {
    setTarget(value);
  }

  function onRollingTarget () {
    const roll = Math.floor(Math.random() * 100) + 1;

    if (roll < 10) {
      setTarget("Head");
    } else if (roll < 25) {
      setTarget("Left Arm");
    } else if (roll < 45) {
      setTarget("Right Arm");
    } else if (roll < 80) {
      setTarget("Body");
    } else if (roll < 90) {
      setTarget("Left Leg");
    } else {
      setTarget("Right Leg");
    }
    setRollResult(`You rolled: ${roll}`);
  }

  function onChangeDamageResistance (value) {
    // Only set the damage if it is greater or equal to 0
    if (!isNaN(value) && parseInt(value) >= 0) {
      setDamageResistance(value);
    } else {
      setDamageResistance(null);
    }
  }

  function onChangeDamage (value) {
    // Only set the damage if it is greater than 0
    if (!isNaN(value) && parseInt(value) > 0) {
      setDamage(value);
    } else {
      setDamage(null);
    }
  }

  function onCalculatingInjury () {
    // Calculate injury roll
    const receivedDamage =
      parseInt(damage) - parseInt(damageResistance) - 1;
    const dFifty = Math.floor(Math.random() * 50) + 1;
    let randomInjuryRoll = dFifty + 5 * (receivedDamage < 0 ? 1 : receivedDamage);
    setInjuryRoll(`1d50(${dFifty}) + 5*(${
      receivedDamage < 0 ? receivedDamage + "≈1" : receivedDamage
    }) ${randomInjuryRoll > 100 ? " ≈ 100" : " = " + randomInjuryRoll}`);
    randomInjuryRoll = randomInjuryRoll > 100 ? 100 : randomInjuryRoll;
    setAdditionalInjury(null);

    // If no target has been set, randomly roll one
    if (target.includes("Target")) {
      onRollingTarget();
    }

    // Normalise injury location
    let injuryLocation;
    if (target.includes("Arm")) {
      injuryLocation = "arm";
    } else if (target.includes("Leg")) {
      injuryLocation = "leg";
    } else {
      injuryLocation = target.toLowerCase();
    }
    console.log(injuryLocation);




    // Retrieve additional injury effects
    for (const threshold of dictionary.injuryThresholds) {
      const lowerLimit = parseInt(threshold.split("-")[0]);
      const upperLimit = parseInt(threshold.split("-")[1]);
      if (randomInjuryRoll >= lowerLimit && randomInjuryRoll <= upperLimit) {
        const index = dictionary.injuryThresholds.indexOf(threshold);
        console.log(dictionary.injuryTable[injuryLocation][index]);
        setCurrentInjury(dictionary.injuryTable[injuryLocation][index]);

        console.log(currentInjury);
        // Retrieve additional injury information
        const injuryDescription = currentInjury.description.toLowerCase();
        if (injuryDescription.includes("broken bone")) {
          if (injuryDescription.includes("major")) {
            setAdditionalInjury(dictionary.additionalInjuryTable["broken bone"]);
          } else if (injuryDescription.includes("minor")) {
            setAdditionalInjury({
              minor: dictionary.additionalInjuryTable["broken bone"]["minor"]
            });
          }
        } else if (injuryDescription.includes("torn muscle")) {
          if (injuryDescription.includes("major")) {
            setAdditionalInjury(dictionary.additionalInjuryTable[
              "torn muscles"
            ]);
          } else if (injuryDescription.includes("minor")) {
            setAdditionalInjury({
              minor: dictionary.additionalInjuryTable["torn muscles"]["minor"]
            });
          }
        } else if (
          injuryDescription.includes("amputation") ||
          injuryDescription.includes("amputated")
        ) {
          setAdditionalInjury({});
          for (const amputation of dictionary.possiblePositionAmputations[
            injuryLocation
          ]) {
            setAdditionalInjury({...additionalInjury, [amputation]: dictionary.additionalInjuryTable[
              "amputation"
            ][amputation]})
          }
        }

        // Display modal
        setShowInjuryModal(true);
        break;
      }
    }
  }

  return (
    <div className="App">
      <header>
        <link href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap" rel="stylesheet" />
      </header>

      <div className="m-auto">
        <div id="app">
          <div className="flex">
            <h1 className="text-white m-auto my-4 text-2xl">
              Critical Assistance Tool
            </h1>
          </div>

          <div className="row">
            <Select className="w-full text-left" onChange={ (event) => onSetTarget(event) } value={ target }>
              {
                dictionary.possibleTargets.map((possibleTarget, targetIndex) => {
                  return <Option key={ targetIndex } value={ possibleTarget }>
                      { possibleTarget }
                    </Option>
                })
              }
            </Select>

            <button className="tooltip ml-1 customised-button my-auto" onClick={ () => onRollingTarget() }>
              <span className="tooltiptext tooltip-right">{ rollResult }</span>
              <FontAwesomeIcon className="fas m-2" icon={ faDiceD20 } />
            </button>
          </div>

          <div className="row">
            <Input placeholder="DR" onChange={ (event) => onChangeDamageResistance(event.target.value) } />
          </div>

          <div className="row">
            <Input placeholder="DMG" onChange={ (event) => onChangeDamage(event.target.value) } />
          </div>
          {
            damageResistance !== null && damage !== null
            ?
              <button className="customised-button" onClick={ () => onCalculatingInjury() }>
                <FontAwesomeIcon className="fas ml-2 my-2" icon={ faUserInjured } />
                <span className="my-auto ml-1 mr-2">Injury</span>
              </button>
            :
              null
          }
        </div>
      </div>
      <Modal visible={ showInjuryModal } body-style="width:100%;max-height:80vh;overflow-y:auto" title="Injury Detail" footer="null">
        <div className="text-black row">
          <strong className="mr-1">Roll:</strong>
          <strong>{ injuryRoll }</strong>
        </div>
        <div className="text-black row">
          <strong className="mr-1">Injury:</strong>
          <strong className="text-red-500">{ currentInjury ? currentInjury.name : null }</strong>
        </div>
        <div className="text-black row">
          <strong className="mr-1">Wound:</strong> { currentInjury ? currentInjury.wound : null }
        </div>
        <div className="text-black row">
          <strong>Description</strong>
        </div>
        <div className="text-black row">{ currentInjury ? currentInjury.description : null }</div>
        {
          additionalInjury ?
            <div>
              <div className="text-black row">
                <strong>Additional Injury</strong>
              </div>
              {
                dictionary.additionalInjury.map((injury, injuryIndex) => {
                  return <div key={injuryIndex} className="text-black p-1 mb-1 rounded border-black-400 border-4">
                    <div>
                      <div><strong>{ injuryIndex.toUpperCase() }</strong></div>
                      <div><strong className="text-sm mb-1">Effect</strong></div>
                      <div className="text-sm mb-1">{ injury.description }</div>
                      injury.heal
                      ?
                        <div className="mb-1"><strong>Healing</strong></div>
                        <div className="text-sm">{ injury.heal }</div>
                      :
                        null
                    </div>
                  </div>
                })
              }
            </div>
          :
            null
        }
      </Modal>
    </div>
  );
}

export default App;
