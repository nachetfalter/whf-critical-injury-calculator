/*
 * config.js
 *
 * constant details needed by App.js
 *
 * Creation Date: 07/08/2021
 * Update Date: 07/08/2021
 */

module.exports = {
  dictionary: {
    possibleTargets: [
      "Head",
      "Left Arm",
      "Right Arm",
      "Body",
      "Left Leg",
      "Right Leg"
    ],
    injuryThresholds: [
      "1-10",
      "11-20",
      "21-25",
      "26-30",
      "31-35",
      "36-40",
      "41-45",
      "46-50",
      "51-55",
      "56-60",
      "61-65",
      "66-70",
      "71-75",
      "76-80",
      "81-85",
      "86-90",
      "91-93",
      "94-96",
      "97-99",
      "100-100"
    ],
    injuryTable: {
      head: [
        {
          name: "Dramatic Injury",
          wound: "1",
          description:
            "A fine wound across the forehead and cheek. Gain 1 Bleeding Condition. Once the wound is healed, the impressive scar it leaves provides a bonus of +1 SL to appropriate social Tests. You can only gain this benefit once."
        },
        {
          name: "Minor Cut",
          wound: "1",
          description:
            "The strike opens your cheek and blood flies. Gain 1 Bleeding Condition."
        },
        {
          name: "Poked Eye",
          wound: "1",
          description:
            "The blow glances across your eye socket. Gain 1 Blinded condition."
        },
        {
          name: "Ear Bash",
          wound: "1",
          description:
            "After a sickening impact, your ear is left ringing. Gain 1 Deafened Condition."
        },
        {
          name: "Rattling Blow",
          wound: "2",
          description:
            "The blow floods your vision with flashing lights. Gain 1 Stunned Condition."
        },
        {
          name: "Black Eye",
          wound: "2",
          description:
            "A solid blow hits your eye, leaving tears and pain. Gain 2 Blinded Conditions."
        },
        {
          name: "Sliced Ear",
          wound: "2",
          description:
            "Your side of your head takes a hard blow, cutting deep into your ear. Gain 2 Deafened and 1 Bleeding Condition."
        },
        {
          name: "Struck Forehead",
          wound: "2",
          description:
            "A solid blow hits your forehead. Gain 2 Bleeding Conditions and a Blinded Condition that cannot be removed until all Bleeding Conditions are removed."
        },
        {
          name: "Fractured Jaw",
          wound: "3",
          description:
            "With a sickening crunch, pain fills your face as the blow fractures your jaw. Gain 2 Stunned Conditions. Suffer a Broken Bone (Minor) injury."
        },
        {
          name: "Major Eye Wound",
          wound: "3",
          description:
            "The blow cracks across your eye socket. Gain 1 Bleeding Condition. Also gain 1 Blinded Condition that cannot be removed until you receive Medical Attention."
        },
        {
          name: "Major Ear Wound",
          wound: "3",
          description:
            "The blow strikes deep into one ear. Suffer a permanent -20 penalty on all Tests relating to hearing. If you suffer this result again, your hearing is permanently lost as the second ear falls quiet. Only magic can heal this."
        },
        {
          name: "Broken Nose",
          wound: "3",
          description:
            "A solid blow to the centre of your face causing blood to pour. Gain 2 Bleeding Conditions. Make a Challenging (+0) Endurance Test, or also gain a Stunned Condition. After this wound has healed, gain +1/-1 SL on social rolls, depending on context, unless Surgery is used to reset the nose."
        },
        {
          name: "Broken Jaw",
          wound: "4",
          description:
            "The crack is sickening as the blow hits you under the chin, breaking your jaw. Gain 3 Stunned Conditions. Make a Challenging (+0) Endurance Test or gain an Unconscious Condition. Suffer a Broken Bone (Major) injury."
        },
        {
          name: "Concussive Blow",
          wound: "4",
          description:
            "Your brain rattles in your skull as blood spurts from your nose and ears. Take 1 Deafened, 2 Bleeding, and 1d10 Stunned Conditions. Gain a Fatigued Condition that lasts for 1d10 days. If you receive another Critical Wound to your head while suffering this Fatigued Condition, make an Average (+20) Endurance Test or also gain an Unconscious Condition"
        },
        {
          name: "Smashed Mouth",
          wound: "4",
          description:
            "With a sickening crunch, your mouth is suddenly filled with broken teeth and blood. Gain 2 Bleeding Conditions. Lose 1d10 teeth - Amputation (Easy)."
        },
        {
          name: "Mangled Ear",
          wound: "4",
          description:
            "Little is left of your ear as the blow tears it apart. You gain 3 Deafened and 2 Bleeding Conditions. Lose your ear -Amputation (Average)."
        },
        {
          name: "Devastated Eye",
          wound: "5",
          description:
            "A strike to your eye completely bursts it, causing extraordinary pain. Gain 3 Blinded, 2 Bleeding, and 1 Stunned Condition. Lose your eye - Amputation (Difficult)."
        },
        {
          name: "Disfiguring Blow",
          wound: "5",
          description:
            "The blow smashes your entire face, destroying your eye and nose in a cloud of blood. Gain 3 Bleeding, 3 Blinded and 2 Stunned Conditions. Lose your eye and nose - Amputation (Hard)."
        },
        {
          name: "Mangled Jaw",
          wound: "5",
          description:
            "The blow almost removes your jaw as it utterly destroys your tongue, sending teeth flying in a shower of blood. Gain 4 Bleeding and 3 Stunned Conditions. Make a Very Hard (-30) Endurance Test or gain an Unconscious Condition. Suffer a Broken Bone (Major) injury and lose your tongue and 1d10 teeth - Amputation (Hard)."
        },
        {
          name: "Decapitated",
          wound: "Death",
          description:
            "Your head is entirely severed from your neck and soars through the air, landing 1d10 feet away in a random direction (see Scatter). Your body collapses, instantly dead."
        }
      ],
      arm: [
        {
          name: "Jarred Arm",
          wound: "1",
          description:
            "Your arm is jarred in the attack. Drop whatever was held in that hand."
        },
        {
          name: "Minor cut",
          wound: "1",
          description:
            "Gain a Bleeding Condition as your upper arm is cut badly."
        },
        {
          name: "Sprain",
          wound: "1",
          description:
            "You sprain your arm, suffering a Torn Muscle (Minor) injury."
        },
        {
          name: "Badly Jarred Arm",
          wound: "2",
          description:
            "Your arm is badly jarred in the attack. Drop whatever was held in that hand, which is useless for 1d10 - Toughness Bonus Rounds (minimum 1). For this time, treat the hand as lost (see Amputated Parts)."
        },
        {
          name: "Torn Muscles",
          wound: "2",
          description:
            "The blow slams into your forearm. Gain a Bleeding Condition and a Torn Muscle (Minor) injury."
        },
        {
          name: "Bleeding Hand",
          wound: "2",
          description:
            "Your hand is cut badly, making your grip slippery. Take 1 Bleeding Condition. While suffering from that Bleeding Condition, make an Average (+20) Dexterity Test before taking any Action that requires something being held in that hand; if you fail, the item slips from your grip."
        },
        {
          name: "Wrenched Arm",
          wound: "2",
          description:
            "Your arm is almost pulled from its socket. Drop whatever is held in the associated hand; the arm is useless for 1d10 Rounds (see Amputated Parts)."
        },
        {
          name: "Gaping Wound",
          wound: "3",
          description:
            "The blow opens a deep, gaping wound. Gain 2 Bleeding Conditions. Until you receive Surgery to stitch up the cut, any associated Arm Damage you receive will also inflict 1 Bleeding Condition as the wound reopens."
        },
        {
          name: "Clean Break",
          wound: "3",
          description:
            "An audible crack resounds as the blow strikes your arm. Drop whatever was held in the associated hand and gain a Broken Bone (Minor) injury. Pass a Difficult (-10) Endurance Test or gain a Stunned Condition."
        },
        {
          name: "Ruptured Ligament",
          wound: "3",
          description:
            "You immediately drop whatever was held in that hand. Suffer a Torn Muscle (Major) injury."
        },
        {
          name: "Deep Cut",
          wound: "3",
          description:
            "Gain 2 Bleeding Conditions as your arm is mangled. Gain 1 Stunned Condition and suffer a Torn Muscle (Minor) injury. Take a Hard (-20) Endurance Test or gain the Unconscious Condition."
        },
        {
          name: "Damaged Artery",
          wound: "4",
          description:
            "Gain 4 Bleeding Conditions. Until you receive Surgery, every time you take Damage to this Arm Hit Location gain 2 Bleeding Conditions."
        },
        {
          name: "Crushed Elbow",
          wound: "4",
          description:
            "The blow crushes your elbow, splintering bone and cartilage. You immediately drop whatever was held in that hand and gain a Broken Bone (Major) injury."
        },
        {
          name: "Dislocated Shoulder",
          wound: "4",
          description:
            "Your arm is wrenched out of its socket. Pass a Hard (-20) Endurance Test or gain the Stunned and Prone Condition. Drop whatever is held in that hand: the arm is useless and counts as lost (see Amputated Part). Gain 1 Stunned Condition until you receive Medical Attention. After this initial Medical Attention, an Extended Average (+20) Heal Test needing 6 SL is required to reset the arm, at which point you regain its use. Tests made using this arm suffer a -10 penalty for 1d10 days."
        },
        {
          name: "Severed Finger",
          wound: "4",
          description:
            "You gape in horror as a finger flies -Amputation (Average). Gain a Bleeding condition."
        },
        {
          name: "Cleft Hand",
          wound: "5",
          description:
            "Your hand splays open from the blow. Lose 1 finger -Amputation (Difficult). Gain 2 Bleeding and 1 Stunned Condition. For every succeeding Round in which you don't receive Medical Attention, you lose another finger as the wound tears; if you run out of fingers, you lose the hand - Amputation (Difficult)."
        },
        {
          name: "Mauled Bicep",
          wound: "5",
          description:
            "The blow almost separates bicep and tendon from bone, leaving an ugly wound that sprays blood over you and your opponent. You automatically drop anything held in the associated hand and suffers a Torn Muscle (Major) injury and 2 Bleeding and 1 Stunned Condition."
        },
        {
          name: "Mangled Hand",
          wound: "5",
          description:
            "Your hand is left a mauled, bleeding mess. You lose your hand -Amputation (Hard). Gain 2 Bleeding Condition. Take a Hard (-20) Endurance Test or gain the Stunned and Prone Conditions."
        },
        {
          name: "Sliced Tendons",
          wound: "5",
          description:
            "Your tendons are cut by the blow, leaving your arm hanging useless - Amputation (Very Hard). Gain 3 Bleeding, 1 Prone, and 1 Stunned Condition. Pass a Hard (-20) Endurance Test or gain the Unconscious Condition."
        },
        {
          name: "Brutal Dismemberment",
          wound: "Death",
          description:
            "Your arm is severed, spraying arterial blood 1d10 feet in a random direction (see Scatter), before the blow follows through to your chest."
        }
      ],
      body: [
        {
          name: "'Tis But A Scratch!",
          wound: "1",
          description: "Gain 1 Bleeding Condition."
        },
        {
          name: "Gut Blow",
          wound: "1",
          description:
            "Gain 1 Stunned Condition. Pass an Easy (+40) Endurance Test, or vomit, gaining the Prone Condition."
        },
        {
          name: "Low Blow!",
          wound: "1",
          description:
            "Make a Hard (-20) Endurance Test or gain 3 Stunned Condition."
        },
        {
          name: "Twisted Back",
          wound: "1",
          description: "Suffer a Torn Muscle (Minor) injury."
        },
        {
          name: "Winded",
          wound: "2",
          description:
            "Gain a Stunned Condition. Make an Average (+20) Endurance Test, or gain the Prone Condition. Movement is halved for 1d10 rounds as you get your breath back."
        },
        {
          name: "Bruised Ribs",
          wound: "2",
          description:
            "All Agility-based Tests suffer a -10 penalty for 1d10 days."
        },
        {
          name: "Wrenched Collar Bone",
          wound: "2",
          description:
            "Randomly select one arm. Drop whatever is held in that hand; the arm is useless for 1d10 rounds (see Amputated Parts)."
        },
        {
          name: "Ragged Wound",
          wound: "2",
          description: "Take 2 Bleeding Conditions."
        },
        {
          name: "Cracked Ribs",
          wound: "3",
          description:
            "The hit cracks one or more ribs. Gain a Stunned Condition. Gain a Broken Bone (Minor) injury."
        },
        {
          name: "Gaping Wound",
          wound: "3",
          description:
            "Take 3 Bleeding Conditions. Until you receive Surgery, any Wounds you receive to the Body Hit Location will inflict an additional Bleeding Condition as the cut reopens."
        },
        {
          name: "Painful Cut",
          wound: "3",
          description:
            "Gain 2 Bleeding Conditions and a Stunned Condition. Take a Hard (-20) Endurance Test or gain the Unconscious Condition as you black out from the pain. Unless you achieve 4+ SL, you also scream out in agony."
        },
        {
          name: "Arterial Damage",
          wound: "3",
          description:
            "Gain 4 Bleeding Conditions. Until you receive Surgery, every time you receive Damage to the Body Hit Location, gain 2 Bleeding Conditions."
        },
        {
          name: "Pulled Back",
          wound: "4",
          description:
            "Your back turns to white pain as you pull a muscle. Suffer a Torn Muscle (Major) injury."
        },
        {
          name: "Fractured Hip",
          wound: "4",
          description:
            "Gain a Stunned Condition. Take a Challenging (+0) Endurance Test or also gain the Prone Condition. Suffer a Broken Bone (Minor) injury."
        },
        {
          name: "Major Chest Wound",
          wound: "4",
          description:
            "You take a significant wound to your chest, flensing skin from muscle and sinew. Take 4 Bleeding Conditions. Until you receive Surgery, to stitch the wound together, any Wounds you receive to the Body Hit Location will also inflict 2 Bleeding Conditions as the tears reopen."
        },
        {
          name: "Gut Wound",
          wound: "4",
          description:
            "Contract a Festering Wound (see Disease and Infection) and gain 2 Bleeding Conditions."
        },
        {
          name: "Smashed Rib Cage",
          wound: "5",
          description:
            "Gain a Stunned Condition that can only be removed through Medical Attention, and suffer a Broken Bone (Major) injury."
        },
        {
          name: "Broken Collar Bone",
          wound: "5",
          description:
            "Gain the Unconscious Condition until you receive Medical Attention, and suffer a Broken Bone (Major) injury."
        },
        {
          name: "Internal bleeding",
          wound: "5",
          description:
            "Gain a Bleeding Condition that can only be removed through Surgery. Contract Blood Rot (see Disease and Infection)."
        },
        {
          name: "Torn Apart",
          wound: "Death",
          description:
            "You are hacked in two. The top half lands in a random direction, and all characters within 2 yards are showered in blood"
        }
      ],
      leg: [
        {
          name: "Stubbed Toe",
          wound: "1",
          description:
            "In the scuffle, you stub your toe. Pass a Routine (+20) Endurance Test or suffer -10 on Agility Tests until the end of the next turn."
        },
        {
          name: "Twisted Ankle",
          wound: "1",
          description:
            "You go over your ankle, hurting it. Agility Tests suffer a -10 penalty for 1d10 rounds."
        },
        {
          name: "Minor Cut",
          wound: "1",
          description: "Gain 1 Bleeding Condition."
        },
        {
          name: "Lost Footing",
          wound: "1",
          description:
            "In the scuffle you lose your footing. Pass a Challenging (+0) Endurance Test or gain the Prone Condition."
        },
        {
          name: "Thigh Strike",
          wound: "2",
          description:
            "A painful blow slams into your upper thigh. Gain a Bleeding Condition and take an Average (+20) Endurance Test or stumble, gaining the Prone Condition."
        },
        {
          name: "Sprained Ankle",
          wound: "2",
          description:
            "You sprain your ankle, giving you a Torn Muscle (Minor) injury."
        },
        {
          name: "Twisted Knee",
          wound: "2",
          description:
            "You twist your knee too far. Agility Tests suffer a -20 penalty for 1d10 rounds."
        },
        {
          name: "Badly Cut Toe",
          wound: "2",
          description:
            "Gain 1 Bleeding Condition. After the encounter, make a Challenging (+0) Endurance Test. If you fail, lose 1 toe -Amputation (Average)."
        },
        {
          name: "Bad Cut",
          wound: "3",
          description:
            "Gain 2 Bleeding conditions as a deep wound opens up your shin. Pass a Challenging (+0) Endurance Test or gain the Prone Condition."
        },
        {
          name: "Badly Twisted Knee",
          wound: "3",
          description:
            "You badly twist your knee trying to avoid your opponent. Gain a Torn Muscle (Major) injury."
        },
        {
          name: "Hacked Leg",
          wound: "3",
          description:
            "A cut bites down into the hip. Gain 1 Prone and 2 Bleeding Conditions, and suffer a Broken Bone (Minor) injury. Further, take a Hard (-20) Endurance Test or also gain a Stunned condition from the pain."
        },
        {
          name: "Torn Thigh",
          wound: "3",
          description:
            "Gain 3 Bleeding Conditions as the weapon opens up your upper thigh. Pass a Challenging (+0) Endurance Test or gain the Prone Condition. Until you receive Surgery to stitch up the wound, each time you receive Damage to this Leg, also receive 1 Bleeding Condition."
        },
        {
          name: "Ruptured Tendon",
          wound: "4",
          description:
            "Gain a Prone and Stunned Condition as one of your tendons tears badly. Pass a Hard (-20) Endurance Test or gain the Unconscious Condition. Your leg is useless (see Amputated Parts). Suffer a Torn Muscle (Major) injury."
        },
        {
          name: "Carved Shin",
          wound: "4",
          description:
            "The weapon drives clean through your leg by the knee, slicing into bone and through tendons. Gain a Stunned and Prone Condition. Further, suffer a Torn Muscle (Major) and Broken Bone (Minor) injury."
        },
        {
          name: "Broken Knee",
          wound: "4",
          description:
            "The blow hacks into your kneecap, shattering it into several pieces. You gain 1 Bleeding, 1 Prone, and 1 Stunned Condition, and a Broken Bone (Major) Injury as you fall to the ground, clutching your ruined leg."
        },
        {
          name: "Dislocated Knee",
          wound: "4",
          description:
            "Your knee is wrenched out of its socket. Gain the Prone Condition. Pass a Hard (-20) Endurance Test, or gain the Stunned Condition, which is not removed until you receive Medical Attention. After this initial Medical Attention, an Extended Average (+20) Heal Test needing 6 SL is required to reset the knee at which point you regain its use. Movement is halved, and Tests made using this leg suffer a -10 penalty for d10 days."
        },
        {
          name: "Crushed Foot",
          wound: "5",
          description:
            "The blow crushes your foot. Make an Average (+20) Endurance Test; if you fail, gain the Prone condition and lose 1 toe, plus 1 additional toe for each SL below 0 - Amputation (Average). Gain 2 Bleeding Conditions. If you don't receive Surgery within 1d10 days, you will lose the foot entirely."
        },
        {
          name: "Severed Foot",
          wound: "5",
          description:
            "Your foot is severed at the ankle and lands 1d10 feet away in a random direction - Amputation (Hard) (see Scatter). You gain 3 Bleeding, 2 Stunned, and 1 Prone Condition."
        },
        {
          name: "Cut Tendon",
          wound: "5",
          description:
            "A major tendon at the back of your leg is cut, causing you to scream out in pain as your leg collapses. Gain 2 Bleeding, 2 Stunned, and 1 Prone Condition and look on in horror as your leg never works again - Amputation (Very Hard)."
        },
        {
          name: "Shattered Pelvis",
          wound: "Death",
          description:
            "The blow shatters your pelvis, severing one leg then driving through to the next. You die instantly from traumatic shock"
        }
      ]
    },
    additionalInjuryTable: {
      "broken bone": {
        minor: {
          description:
            "You have fractured one of your bones, but it is still aligned, meaning it may heal of its own accord without medical attention. The Hit Location is unusable until the breakage heals. For Arm and Leg hits, you are down to one limb as the other is too painful to use, and may require binding. Use the rules for a Severed Arm or Leg to represent this (see Amputated Parts). For Head hits you will be down to a liquid diet and will suffer a penalty of -30 to all Language Tests. For Body hits, your strength and mobility will be severely limited: suffer a loss of -30 to your Strength and Agility Characteristics, and half your Move",
          heal:
            "A fractured bone will take 30+1d10 days to heal. At the end of this, a successful Average (+20) Endurance Test means the bone has set well, and no long-term effects will be suffered. If the Test is failed, you suffer a permanent loss of -5 to all Agility Tests when using a damaged arm, a permanent loss of -5 to your Agility characteristic for a badly healed Body or Leg hit, or a permanent loss of -5 to spoken Language Tests for a badly healed Head hit. A successful Average (+20) Heal Test within a week of receiving the fracture will negate the need for the Endurance Test, but the affected area must remain bound and held in place for the duration of the healing. If the binding should be undone, another Average (+20) Heal Test enacted within a day will need to be passed to avoid the Endurance Test."
        },
        major: {
          description:
            "One of your bones is badly broken, and is either resting at an odd angle, or has splintered at the point of breakage. It is unlikely to heal properly without medical attention. The Hit Location is effectively unusable until the breakage heals. Use all the same rules as for Broken Bone (Minor).",
          heal:
            "Healing takes 10 days longer. All associated Tests are Challenging (+0). Any penalties for failed Tests increase to -10."
        }
      },
      "torn muscles": {
        minor: {
          description:
            "One of your muscles is sprained or torn, resulting in impaired capabilities and much pain. Suffer a penalty of -10 to all Tests involving the location. If a Leg is hit, also halve your Movement.",
          heal:
            "The muscle will partially heal in 30 - your Toughness Bonus days. Use of the Healing skill will reduce the time by 1 day, plus a further day per SL (you can gain this benefit once)."
        },
        major: {
          description:
            "One of your muscles or some important tendons have been severely damaged, resulting in extreme pain and a significant loss in capability of the afflicted limb. Suffer the same effects as Torn Muscle (Minor), but the penalties are -20 to all Tests.",
          heal:
            "The muscle will partially heal in 30 - your Toughness Bonus days, after which the penalty for using the limb reduces to -10 to all relevant Tests. The muscle will completely heal after another 30 - your Toughness Bonus days. Use of the Healing skill does little but inform you not to use the affected Hit Location"
        }
      },
      amputation: {
        general: {
          description:
            "Whenever you suffer a Critical Wound marked Amputation (difficulty), you must pass an Endurance Test (the difficulty is marked in the brackets) or gain a Prone Condition. On a Failure (-2) or worse, you also gain a Stunned Condition; on an Impressive Failure (-4 or worse), gain an Unconscious Condition.",
          heal:
            "All amputations require Surgery to heal properly, meaning 1 Wound cannot be healed until you visit a surgeon."
        },
        arm: {
          description:
            "Use the rules for lost hand, but you cannot strap a shield to the arm since you don’t have one."
        },
        ear: {
          description:
            "Losing an ear is painful, but you will soon learn to live without it. Should you have the bad luck to lose both your ears, permanently suffer a penalty of -20 to all hearing-based Perception Tests. Further, you suffer a penalty of -5 to all Fellowship Tests per ear lost when others can see your earless state"
        },
        eye: {
          description:
            "For all losing an eye is horrendous, but you soon learn to compensate. Should you have the misfortune to lose both eyes, suffer a penalty of -30 to all Tests influenced by sight, such as Weapon Tests, Dodge Tests, Ride Tests, and similar. Further, you suffer a penalty of -5 to all Fellowship Tests per scarred socket others can see."
        },
        fingers: {
          description:
            "Losing a finger results in lessened grip, causing an increased chance of fumbling Tests using that hand. For the first finger lost, any relevant, failed Test with a 1 on the units die counts as a fumble. For two lost fingers, any relevant, failed Test with a 1 or 2 on the units die counts as a fumble, and so on. Further, you suffer a penalty of -5 to all Tests using the hand in question per finger lost. Once 4 or more fingers are lost on a hand, use the rules for a severed hand"
        },
        foot: {
          description:
            "Reduce your Move by half permanently and suffer a -20 penalty to all Tests that rely on mobility, such as Dodge. Losing both feet makes it hard to walk. Perhaps you could hire a henchman to carry you?"
        },
        hand: {
          description:
            "You take a -20 penalty on all Tests that rely on the use of two hands and you cannot wield two-handed weapons; however, a shield can be strapped to the injured arm. Should the lost hand be your primary hand, you take the customary -20 penalty to Melee Tests made with weapons using your secondary hand. For every 100 XP you spend, you can reduce this penalty by 5 as you relearn how to do everything with the other hand. If you lose both hands, it is probably time to master hook fighting."
        },
        leg: {
          description:
            "Treat this as a lost foot, but you cannot use the Dodge skill at all."
        },
        nose: {
          description:
            "A loss of a nose leaves one looking freakish in the extreme. Suffer a permanent loss of -20 to your Fellowship and suffer a penalty of -30 to all Tests involving the sense of smell."
        },
        teeth: {
          description:
            "Loss of teeth may be unsightly and can make eating difficult. For every two teeth you lose you also suffer a permanent loss of 1 from your Fellowship characteristic. Further, once more than half your teeth (Humans: 16; Elves: 18; Halflings and Dwarfs: 20) are lost, you find consuming solids significantly more difficult than your peers, doubling eating times, and making some foodstuffs nigh-on impossible to eat, which is largely a matter of roleplaying and narrative description of your actions"
        },
        toe: {
          description:
            "Loss of toes has an adverse effect on your balance. For each toe lost, suffer a permanent loss of -1 to your Agility and Weapon Skill Characteristics."
        },
        tougue: {
          description:
            "A loss of a tongue leaves you grunting and humming, or relying on make-shift sign language, for communication. You automatically fail all Language Tests involving speaking."
        }
      }
    },
    possiblePositionAmputations: {
      head: ["general", "tougue", "teeth", "nose", "eye", "ear"],
      arm: ["general", "fingers", "arm", "hand"],
      leg: ["general", "toe", "leg", "foot"]
    }
  }
}
