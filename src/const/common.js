const ACCESS_TOKEN_STORAGE = '@common/ACCESS_TOKEN_STORAGE';
import {Dimensions} from 'react-native';

export {ACCESS_TOKEN_STORAGE};
export {getScreenHeight, getScreenWidth};

const getScreenWidth = () => Dimensions.get('screen').width;

const getScreenHeight = () => Dimensions.get('screen').height;

export const dataType = [
  {
    id: 1,
    name: 'Strength',
  },
  {
    id: 2,
    name: 'Warn up',
  },
  {
    id: 3,
    name: 'SMR',
  },
];

export const dataEquiqment = [
  {id: '1', name: 'Machine'},
  {id: '2', name: 'Cable'},
  {id: '3', name: 'Bodyweight'},
  {id: '4', name: 'Barbel'},
  {id: '5', name: 'Ball'},
  {id: '6', name: 'Kettle Bells'},
  {id: '7', name: 'Dumbells'},
  {id: '8', name: 'Foam roll'},
  {id: '9', name: 'Tiger Tail'},
];

export const trainingPlace = [
  {id: '1', name: 'Home'},
  {id: '2', name: 'Gyms'},
];

export const experienceLevels = [
  {id: '1', name: 'Beginner'},
  {id: '2', name: 'Intermediate'},
  {id: '3', name: 'Advanced'},
];

export const goals = [
  {id: '1', name: 'Weight loss'},
  {id: '2', name: 'Weight gain'},
];

export const exerciseData = [
  {
    id: 1,
    name: 'Abductors',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abductors.jpg',
    imgSection:
      'https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Abs.jpg',
  },
  {
    id: 2,
    name: 'Abs',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abs_0.jpg',
    imgSection:
      'https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Abductors.jpg',
  },
  {
    id: 3,
    name: 'Adductors',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/adductors.jpg',
    imgSection:
      'https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Adductors.jpg',
  },
  {
    id: 4,
    name: 'Biceps',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg',
    imgSection:
      'https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Biceps.jpg',
  },
  {
    id: 5,
    name: 'Calves',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/calves_0.jpg',
  },
  {
    id: 6,
    name: 'Chest',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/chest_0.jpg',
  },
  {
    id: 7,
    name: 'Forearms',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/forearms_0.jpg',
  },
  {
    id: 8,
    name: 'Glutes',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/glutes_0.jpg',
  },
  {
    id: 9,
    name: 'Hamstrings',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/hamstrings_0.jpg',
  },
  {
    id: 10,
    name: 'Hip flexors',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/hipflexors.jpg',
  },
  {
    id: 11,
    name: 'IT band',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/itband.jpg',
  },
  {
    id: 12,
    name: 'Lats',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/lats_0.jpg',
  },
  {
    id: 13,
    name: 'Lower back',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/lowerback.jpg',
  },
  {
    id: 14,
    name: 'Upper back',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/upperback.jpg',
  },
  {
    id: 15,
    name: 'Neck',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/neck.jpg',
  },
  {
    id: 16,
    name: 'Obliques',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/obliques.jpg',
  },
  {
    id: 17,
    name: 'Palmar Fascia',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/palmarfacsia.jpg',
  },
  {
    id: 18,
    name: 'Fascia',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/plantarfascia.jpg',
  },
  {
    id: 19,
    name: 'Quads',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/quads_1.jpg',
  },
  {
    id: 20,
    name: 'Shoulders',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/shoulders_0.jpg',
  },
  {
    id: 21,
    name: 'Traps',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/traps_0.jpg',
  },
  {
    id: 22,
    name: 'Triceps',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/triceps_0.jpg',
  },
];

export const exercisesItemData = [
  {
    id: 1,
    execisename: 'Hip Abduction Machine',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/hip-abduction-machine.jpg',
    videolink:
      'https://storage.googleapis.com/geofencin-363903.appspot.com/Y2Mate.is%20-%20Machine%20Abductor-7pbZA7ncuq8-720p-1654513703464.mp4',
    targetmuscleid: 1,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The hip abduction machine exercise is an exercise used to strengthen the abductors.\nThe abductors play a critical role in core stability and having strong abductors can result in better personal records on the squat and deadlift.\nFrom an aesthetic perspective, performing hip abduction isolation exercises assists in the development of a full pair of glutes and hips.',
    content2:
      'Setup in an upright position with your back against the pad and your spine neutral.\nExhale and push the legs apart as you open the pads.\nOnce your hips are fully externally rotated, slowly return to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Experiment with foot and pelvis position. Depending upon the shape of your hip, you may need a slightly more internal or external starting position to fully maximize the contraction.\nSimilarly, be mindful of your pelvic position - don’t allow the back to arch as this will tip the hips forward and place the adductors under excessive stretch before the contraction which can affect force output.\nIf you can’t seem to figure out how to change the position of your pelvis while seated, experiment with changing the position of the torso (i.e. lean forward or push your back into the pad).',
    view: 102000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 2,
    execisename: 'Cable Hip Adduction',
    img: 'https://cdn.muscleandstrength.com/video/cableabduction.jpg',
    videolink: 'https://cdn.muscleandstrength.com/video/cableabduction.mp4',
    targetmuscleid: 1,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content2:
      'Set up for the cable hip abduction by attaching an ankle strap (if one is not available, a single handle may suffice) to the low pulley of a cable pulley machine and set your desired weight on the stack.\nAttach the ankle strap to your left ankle and stand up straight with your feet close together with your right foot closest to the machine. \nYou can use your right arm to hold onto the machine for stability. You are now in the staring position.\nBegin the movement by lifting your left leg straight out to your side as high as comfortably possible. This will lift the weight from the stack.\nPause for a moment and then slowly lower your leg back to the starting position. \nRepeat for the desired amount of reps. \nTurn around, attach the the strap to your right ankle and then repeat with your right leg.',
    content3:
      "Stand up straight and focus on moving only at the hip. Keep your torso as still as possible.\nYou can eventually begin to increase the range of motion by standing further and further away from the machine. This will require a good deal of balance as you won't be able to hold onto the machine.",
    view: 67000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 3,
    execisename: 'Cable Crunch',
    img: 'https://cdn.muscleandstrength.com/video/cablecrunch.jpg',
    videolink: 'https://cdn.muscleandstrength.com/video/cablecrunch.mp4',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content2:
      'Attach the rope attachment to a high pulley cable and set the appropriate weight on the stack.\nStand directly in front of the cable machine, facing away from it.\nGrasp the rope from behind your head with your palms facing inward and drop to your knees.\nYour buttocks should be resting on top of your feet. Keeping your elbows bent and hands at either head height or shoulder height, crunch down as far as possible.\nPause, then slowly lower yourself back to the starting position.',
    content3:
      "This exercise works best when done slowly with perfect form.\nYour buttocks should stay touching your heels at all times.\nFocus on crunching the abs in, not pivoting at the hips.\nAs you increase weight it may be more comfortable to rest the rope on your shoulders.\nDon't choose a weight so heavy that your lower back handles most of the resistance. ",
    view: 1900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 4,
    execisename: 'Lying Floor Leg Raise',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/lying-leg-raise-1.jpg',
    videolink:
      'https://storage.googleapis.com/geofencin-363903.appspot.com/Supine%20Leg%20Raise.mp4',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The lying floor leg raise is a variation of the abdominal crunch and an exercise used to isolate the muscles of the abdomen.\n\nThe lying floor leg raise is a flexion based exercise which keeps the lower abdominal muscles under constant tension during the entire range of motion.',
    content2:
      'Lay supine in a relaxed position with your legs straight and your hands underneath your low back for support.\nKeep your legs straight and raise them towards your forehead while contracting your abdominals and exhaling.\nOnce your abs are fully contracted and your legs are slightly above parallel, slowly lower your legs back to the starting position.\nComplete for the assigned number of repetitions.',
    content3:
      'Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\nIf your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\nAvoid putting the hands behind the head as this can lead to excess strain upon the neck.',
    view: 1000000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 5,
    execisename: 'Weighted Crunch',
    img: 'https://cdn.muscleandstrength.com/sites/default/files/weighted-crunch.jpg',
    videolink:
      'https://storage.googleapis.com/geofencin-363903.appspot.com/90_90%20Plate%20Raise.mp4',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The weighted crunch is a variation of the crunch and an exercise used to build the abdominal muscles.\n\nAdding weight is a common form of progression used to make bodyweight exercises, such as the crunch, more challenging. Doing so allows for the lifter to progress, adapt, and build more muscle.',
    content2:
      'Lay supine in a relaxed position with your knees bent.\nHold a weight plate directly over your chest and press it to extension.\nRaise your knees to 90 degrees, at which point they will be perpendicular to the floor.\nExhale as you reach towards your toes with the weight plate.\nOnce your abs are fully contracted and your upper back is off the floor, slowly lower yourself back to the starting position.\nComplete for the assigned number of repetitions.',
    content3:
      'Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second to improve mind muscle connection.\nIf your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\nAvoid putting the hands behind the head as this can lead to excess strain upon the neck.',
    view: 640000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 6,
    execisename: 'Plank',
    img: 'https://cdn.muscleandstrength.com/video/Plank.jpg',
    videolink: 'https://cdn.muscleandstrength.com/video/Plank.mp4',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      "The plank (AKA hover) is an excellent exercise for building overall core strength. The video above demonstrates the most common plank variation. If you're new to training and do not have the core strength to do a full plank you can start with your knees on the floor and work up to knees off the floor as you get stronger.\n\nYou can make the plank harder by raising one foot of the floor. If that's still easy for you, raise one foot off the floor and the opposing hand at the same time. If you're in the gym you can also try weighted planks by adding weight plates to your back for additional resistence. Just make sure you do not let your midsection sag throughout the exercise.",
    content2:
      'The Plank is a stationary exercise that helps strengthen the entire core of the body. Set up for the plank by getting a mat and laying down on your stomach.\nTo start the exercise prop your torso up on your elbows and your feet up on your toes.\nKeeping yourself completely straight, hold this position for as long as possible.\nTypically, the plank is done for 3 x 1 minute sets. However, as you get stronger your should be able to do 1 - 3 minutes.',
    content3:
      'Do not let your mid section sag in the middle. You need to keep yourself straight at all times.\nDo this exercise in front of a mirror to make sure you are not letting your technique slip.\nRaise an arm or a leg to increase intensity.',
    view: 1300000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 7,
    execisename: 'Hanging Leg Raise',
    img: 'https://cdn.muscleandstrength.com/video/hanginglegraise.jpg',
    videolink: 'https://cdn.muscleandstrength.com/video/hanginglegraise.mp4',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 3,
    content2:
      "The hanging leg raise is an awesome exercise for building the lower abs. All you need for this exercise is somewhere to hang from. It could be a chinup bar or it could be a tree.\nOnce you're hanging, tense up the mid section. While keeping your legs straight, raise your them up slowly. You should raise your legs are high as possible.\nPause for a second, and slowly lower your legs back to the starting position.\nRepeat for desired reps.",
    content3:
      "Speed is so important with the hanging leg raise. If you swing your legs, you're using momentum and your abs will not benefit much from the exercise.\nDo not allow your body to swing. Keep your torso as still and controlled as possible. \nAdvanced lifters can add weight by holding a dumbbell between the feet. ",
    view: 1200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 8,
    execisename: 'Dumbbell Side Bends',
    videolink:
      'https://www.muscleandstrength.com/exercises/dumbbell-side-bends.html',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content2:
      'This exercise works the obliques. Grasp a set of dumbbells. Stand straight up with one dumbbell in each hand, palms facing in.\nKeep your feet firmly on the floor with a shoulder width stance.\nKeeping your back straight and your eyes facing forwards, bend down to the right as far as you can, then back up again.\nWithout pausing at the top, bend down to the left.\nRepeat for desired reps.',
    content3:
      'Always keep your back straight, eyes facing forwards, and bend at the torso only.\nConcentrate on the stretch and contraction of the oblique muscles (down the side of your body).\nKeep the dumbbells close to your body.\nThis exercise can also be performed while seated on the end of a bench. ',
    view: 1200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 9,
    execisename: 'Side Plank',
    videolink: 'https://www.muscleandstrength.com/exercises/side-hover.html',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The lying floor leg raise is a variation of the abdominal crunch and an exercise used to isolate the muscles of the abdomen.\n\nThe lying floor leg raise is a flexion based exercise which keeps the lower abdominal muscles under constant tension during the entire range of motion.',
    content2:
      'Lay supine in a relaxed position with your legs straight and your hands underneath your low back for support.\nKeep your legs straight and raise them towards your forehead while contracting your abdominals and exhaling.\nOnce your abs are fully contracted and your legs are slightly above parallel, slowly lower your legs back to the starting position.\nComplete for the assigned number of repetitions.',
    content3:
      'Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\nIf your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\nAvoid putting the hands behind the head as this can lead to excess strain upon the neck.',
    view: 1000000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 10,
    execisename: 'Decline Sit Up',
    videolink: 'https://www.muscleandstrength.com/exercises/decline-situp.html',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content2:
      'Set the decline bench to an angle of between 30 and 45 degrees (the more than angle, the harder the situps will be).\nSit on the bench with your legs resting through the pads.\nCross your arms across your chest and lean back until your back almost touches the bench.\nRaise yourself back up until your upper body is vertical, then lower again.',
    content3:
      "Don't go tot far down or up. Your back should never touch the bench and you only need to pull up until your upper body is vertical.\nYou can add a twist to work your obliques harder if you like.\nHold a weight plate or dumbbell in your arms for added resistance and intensity. \n",
    view: 788300,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 11,
    execisename: 'Ab Crunch',
    videolink:
      'https://www.youtube.com/watch?v=Plh1CyiPE_Y&embeds_euri=https%3A%2F%2Fwww.muscleandstrength.com%2F&feature=emb_imp_woyt',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The abdominal crunch, or ab crunch, is a flexion based abdominal exercise. It is a very common movement that even the newest of beginner lifters have probably tried before.\n\nMost ab workouts include the ab crunch as it is thought to be one of the best core building exercises. However, instead of performing marathon sets of ab crunches, it is best to pair it with other ab movements such as the plank and hanging leg raise to get a complete ab workout.\n\nThe ab crunch replaced the sit up as the corner stone ab exercise. This is because people believed the sit up involved too much flexion which lends itself to lower back pain. Thus, it was replaced by the ab crunch, which accomplished the same movement pattern without overextending the spine.\n\nSome may still experience low back pain performing the ab crunch. If this is the case, it is best to stick with ab exercises that focus more on stability and less on flexion such as the plank.',
    content2:
      'Lay supine in a relaxed position with your knees up and hands across your chest.\nExhale and squeeze your abs as you curl your upper body off the floor.\nOnce your abs are fully contracted and your upper back is off the floor, slowly lower yourself back to the starting position.\nComplete for the assigned number of repetitions.',
    content3:
      'Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\nIf your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\nAvoid putting the hands behind the head as this can lead to excess strain upon the neck.',
    view: 225000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 12,
    execisename: 'Abdominal Barbell Rollouts',
    videolink:
      'https://www.muscleandstrength.com/exercises/abdominal-barbell-rollouts.html',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content2:
      'Kneel on the floor/mat and grasp the barbell with a wider than shoulder width grip. You should have 5-10 lb plates loaded on each side of the barbell. \nKeeping your back and arms straight, slowly roll the barbell out in front of you until your arms are fully extended.\nTense the abs and slowly roll the barbell back towards your knees.',
    content3:
      'Keep your arms and back straight at all times.\nDo the exercise slowly, and concentrate on using your abdominal muscles to pull the barbell back towards you.\nFor extra intensity barbell rollouts can be done standing.',
    view: 445000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 13,
    execisename: 'Sit up',
    videolink: 'https://www.youtube.com/watch?v=MQDopvLZOS8',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The sit up is a classic abdominal exercise.\n\nIt’s rarely performed anymore, however, it’s still a very effective flexion based exercise for those looking to utilize it to target their core.\n\nThere are some risks involved in performing the sit up as opposed to crunches (or stability ball crunches). The primary one being the common complaint of lower back pain.\n\nOne can perform sit ups as part of their ab workout or full body workout.\n\n',
    content2:
      'Lay supine in a relaxed position with your knees up and hands across your chest.\nExhale and squeeze your abs as you curl your upper body off the floor.\nOnce your torso is perpendicular to the floor, slowly lower yourself back to the starting position.\nComplete for the assigned number of repetitions.',
    content3:
      'Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\nIf your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\nAvoid putting the hands behind the head as this can lead to excess strain upon the neck.',
    view: 1100000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 14,
    execisename: 'Exercise Ball Crunch',
    videolink:
      'https://www.muscleandstrength.com/exercises/swiss-ball-crunch.html',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 5,
    experiencelevelid: 2,
    content2:
      'The exercise ball crunch is a great all round ab exercise. Lower back support makes it ideal for those with lower back problems/injuries. Sit on the exercise ball with your feet flat on the floor wider than shoulder with apart.\nStep forward with your feet allowing the exercise ball to roll back to your lower back.\nTouch the side of your head with the tips of your fingers. This is the start position.\nCrunching your abs, pull your torso up so your elbows are aiming for your knees.\nSqueeze the abs tight and pause. \nThen lower back to the start position.\nRepeat for desired reps.',
    content3:
      'The longer you hold the crunch the harder your ab muscles have to work.\nIncrease the effectiveness of this exercise by holding the crunch for a slow count of 2',
    view: 491000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 15,
    execisename: 'Straight Leg Toe Touch',
    videolink: 'https://www.youtube.com/watch?v=yjfLpiFyGxs&t=1s',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The straight leg toe touch is a variation of the abdominal crunch and an exercise used to isolate the muscles of the abdomen.\n\nThe straight leg toe touch keeps constant tension on the lower abs as you go through flexion with the top portion of your abs.',
    content2:
      'Lay supine in a relaxed position with your arms and legs straight.\nRaise your legs straight until they are perpendicular with the floor.\nExhale as you reach straight up towards your toes.\nOnce your abs are fully contracted and your upper back is off the floor, slowly lower yourself back to the starting position.\nComplete for the assigned number of repetitions.',
    content3:
      'Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\nIf your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\nAvoid putting the hands behind the head as this can lead to excess strain upon the neck.',
    view: 285000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 16,
    execisename: 'Seated Barbell Twist',
    videolink:
      'https://www.muscleandstrength.com/exercises/seated-barbell-twist.html',
    targetmuscleid: 2,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content2:
      'The seated barbell twist exercise focuses on your obliques. Grab a light barbell and rest it on the muscle on the back of your neck. Do not rest the weight on your neck!\nSit down on a flat bench with your feet at a wider than shoulder width stance, firmly on the floor.\nKeep your back firm and straight. Slowly twist your torso to the right and then to the left.\nTwist as far as possible. Do not move your head with the twist, but keep facing forward.',
    content3:
      "Keep your head facing forward. Don't look from side to side. \nKeep your abs tight throughout the whole set.\nMake sure you have enough room if you're using an Olympic bar!",
    view: 46000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 17,
    execisename: 'Hip Adduction Machine',
    videolink:
      'https://www.youtube.com/watch?v=Oj7IN952fSg&embeds_euri=https%3A%2F%2Fwww.muscleandstrength.com%2F&feature=emb_imp_woyt',
    targetmuscleid: 3,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The hip adduction machine exercise is an exercise used to strengthen the muscles of the adductors.\n\nHaving strong adductor plays a critical role in using maximal weights on lower body exercises such as squats and lunges.\n\nFrom an aesthetic standpoint, using the hip adduction machine can help in building shapely inner thighs.',
    content2:
      'Setup in an upright position with your back against the pad and your spine neutral.\nExhale and pull the legs together as you squeeze the pads inward.\nOnce the pads touch, slowly return to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Experiment with foot and pelvis position. Depending upon the shape of your hip, you may need a slightly more internal or external starting position to fully maximize the contraction.\nSimilarly, be mindful of your pelvic position - don’t allow the back to arch as this will tip the hips forward and place the adductors under excessive stretch before the contraction which can affect force output.\nIf you can’t seem to figure out how to change the position of your pelvis while seated, experiment with changing the position of the torso (i.e. lean forward or push your back into the pad).',
    view: 161000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 18,
    execisename: 'Deep Squat Prying',
    videolink: 'https://www.youtube.com/watch?v=GWhI41W8xnk',
    targetmuscleid: 3,
    execisetypeid: 2,
    equipmentid: 6,
    experiencelevelid: 1,
    content1:
      'The deep squat prying drill is both an activation exercise and a drill that promotes increased mobility.\n\nThe deep squat portion of the drill is beneficial in activating the muscles of the lower body including the adductors, quads, glutes, and hamstrings.\n\nThe prying part of the drill helps open up the hips to promote more fluid range of motions during your working sets later in the workout.\n\nOne would typically perform the deep squat prying drill at the beginning of their workouts as a dynamic stretch in their specific warm up routine',
    content2:
      'In a standing position with a shoulder width stance, hold a kettlebell at chest height using both hands.\nSquat down by breaking at the hips and knees simultaneously. Sit as deep as comfortably possible.\nRock from side to side while flexing the ankles and pushing the knees out with the elbows to open up the hips.\nRepeat for the desired number of repetitions or time.',
    content3:
      'Focus on keeping your spine tall in the bottom position and don’t allow the weight to pull your forward.\nIdeally you should be able to sit comfortably in the bottom position and open up the hips and ankles as you rock side to side.\nTo get into a deep squat, you should try to focus on sitting down rather than back to keep your torso upright.',
    view: 6200,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 19,
    execisename: 'Alternating Lateral Lunge',
    videolink: 'https://www.youtube.com/watch?v=cGQ3H4sZbSM',
    targetmuscleid: 3,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The alternating lateral lunge with overhead reach is a warm-up exercise used to dynamically stretch the lower body, shoulders, and upper back. The stretch primarily increases mobility in the groin, but will also be felt in the shoulders.\n\nWarming up adequately is an important part of any workout routine, and maintaining mobility can increase the overall effectiveness of certain exercises.',
    content2:
      'Stand in an upright position with your feet together and arms at your sides.\nStep laterally and sit back into your hip while you extend your opposite leg.\nOnce at the bottom of the lateral lunge, keep your arms straight and raise them into shoulder flexion.\nAfter you reach overhead, lower the arms and push back to your starting position.\nRepeat for the desired number of repetitions on both sides.',
    content3:
      'As your raise the arms overhead, make sure the movements comes entirely from the shoulders and not the spine.\nExhale as you reach and focus on activating the musculature of your upper back and posterior shoulder.\nDuring the lateral lunge, if you’re able to descend deep into the movement, experiment with allowing the sole of the shoe to come off the floor and point your toes towards the ceiling. Depending upon each individual’s bony hip anatomy, this may feel better.',
    view: 7500,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 20,
    execisename: 'Rocking Frog Stretch',
    videolink: 'https://www.youtube.com/watch?v=ABcuTyDyRhU',
    targetmuscleid: 3,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The rocking frog stretching drill is a form of dynamic stretching that warms up the muscles of the groin, upper back and shoulders.\n\nDynamic stretching is critical prior to performing your workouts as it allows you to activate your central nervous system and engage the muscle groups you’ll use later in your workout. Incorporating them into your warm up routine will help you get better results and avoid injury.',
    content2:
      'In a quadruped position, ensure the hands are underneath the shoulders, the knees are underneath the hips, and the toes are tucked.\nSpread the knees wide until you feel a stretch within your groin. From here, push your hands into the ground to drive your hips back and keep your chest upright.\nPush back until your hips run out of range of motion and then return to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Focus on keeping all of the movement relegated to the hip, don’t allow the spine to move to compensate a lack of hip mobility.\nPush into the floor with your hands and focus on keeping the head neutral.\nIf you feel a pinch in the front portion of your hips while you rock back, experiment with different knee widths. Depending upon your individual anatomy, you may need a slightly wider or narrower stance.',
    view: 7500,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 21,
    execisename: 'Cable Hip Adduction',
    videolink:
      'https://www.muscleandstrength.com/exercises/cable-hip-adduction.html',
    targetmuscleid: 3,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content2:
      'Set up for the cable hip adduction by attaching an ankle strap (if one is not available, a single handle may suffice) to the low pulley of a cable pulley machine and set your desired weight on the stack.\nAttach the ankle strap to your left ankle and stand up straight with your feet close together with your left foot closest to the machine.  \nYou can use your left arm to hold onto the machine for stability. You are now in the staring position.\nBegin the movement by lifting your left foot off the floor to take the weight off the rack.\nKeep your leg as straight as possible and begin slowly moving it across your body until your ankle passes your standing leg.\nPause for a moment and then slowly reverse the movement and bring your leg back to the starting position.  \nRepeat for the desired amount of reps.  \nTurn around, attach the the strap to your right ankle and then repeat with your right leg.',
    content3:
      "Stand up straight and focus on moving only at the hip. Keep your torso as still as possible.\nYou can eventually begin to increase the range of motion by standing further and further away from the machine. This will require a good deal of balance as you won't be able to hold onto the machine.",
    view: 14000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 22,
    execisename: 'Lateral Kneeling Adductor Mobilization',
    videolink: 'https://www.youtube.com/watch?v=NsZRuAHF7sI',
    targetmuscleid: 3,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The lateral kneeling adductor mobilization drill is a form of dynamic stretching and an exercise used to alleviate tension in the adductors.\n\nEnsuring you’re properly warmed up is important for maximizing your time in the gym and avoiding injury.',
    content2:
      'In an quadruped position, ensure the toes are tucked and the hands are directly underneath the shoulders.\nStraighten one leg to the side and keep the foot flat on the floor.\nExhale and push your hands into the floor to direct your hips backwards to increase the stretch on your groin.\nOnce you run out of range of motion in your adductor, rock back to the starting position and repeat for the assigned number of repetitions on both sides.',
    content3:
      'if you feel a pinch on the outside of the hip joint instead of a stretch on the inside portion (i.e. the adductor) then you may have adopted a stance is slightly too wide and as such you’re getting a bit of bone on bone contact. Bring your stance in a touch and push back a bit further or switch to more advanced progression such as a cossack squat.\nFocus on keeping your spine neutral by thinking about “making your spine long” as you rock back.\nIf you feel your pelvis rolling underneath or spine rounding, then you’ve essentially run out of range of motion at the hip and you’re not compensating with the spine.\nMove slowly and methodically, to be able to use new ranges of motion, you must be able to control them.',
    view: 3400,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 23,
    execisename: 'Standing Dumbbell Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/standing-dumbbell-curl.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'Assume the starting position for the standing dumbbell curl by grasping a pair of dumbbells and standing straight up, feet together and dumbbells by your side. The dumbbells should not be touching your body.\nYour palms should facing upwards.\nTake up the slack by bending the elbows slightly. Tension should be on the biceps.\nSlowly curl the dumbbells up as far as possible.\nSqueeze the biceps hard, and then slowly lower the dumbbells back down to the starting position.\nRepeat for desired reps.',
    content3:
      'The tension should be on the biceps at all times. Do not let them "hang" at the bottom of the exercise.\nKeep the rep timing slow and control the weight throughout the set.\nDo not let the dumbbells touch your body.\nAnd finally, do not swing the body back as you curl up the weight. The body should stay fixed throughout the movement. Focus on only moving your forearms.',
    view: 3000000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 24,
    execisename: 'Standing Barbell Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/standing-barbell-curl.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content2:
      'The standing barbell curl is the cornerstone of many bicep building routines. Grasp a barbell or Olympic bar at around shoulder width apart using an underhand grip (palms facing up).\nStand straight up, feet together (you may be more comfortable putting one foot back for stability), back straight, and with your arms fully extended.\nThe bar should not be touching your body.\nKeeping your eyes facing forwards, elbows tucked in at your sides, and your body completely still, slowly curl the bar up.\nSqueeze your biceps hard at the top of the movement, and then slowly lower it back to the starting position.\nRepeat for desired reps.',
    content3:
      'The single biggest mistake lifters make on this exercise is swinging the body back to assist in moving the weight up. This is cheating! Your body should remain fixed and only your biceps should be used to move the weight.\nAnother mistake is not keeping the elbows fixed and in at the sides. You should not let your elbows come forward when moving the weight up.\nAnd finally, you need to control the weight throughout the set. This means not letting it drop quickly!',
    view: 3800000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 25,
    execisename: 'Incline Dumbbell Curl',
    videolink: 'https://www.youtube.com/watch?v=UeleXjsE-98',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The incline dumbbell curl is a variation of the dumbbell curl and an exercise used to build bigger biceps.\n\nThe biceps is a tricky (and fun) muscle to target and putting yourself in various degrees of incline can help manipulate the range of motion for either a tighter contraction or deeper stretch.\n\nThe incline dumbbell curl elongates the negative portion of the dumbbell curl, creating a deeper stretch on the biceps muscle tissue.\n\nDumbbell curl variations are primarily popular among lifters looking to improve their aesthetics as direct arm work will have limited carry over into maximum strength.',
    content2:
      'Position an incline bench at roughly 55-65 degrees, select the desired weight from the rack, and sit upright with your back flat against the pad.\nUsing a supinated (palms up) grip, take a deep breath and curl both dumbbells towards your shoulders.\nOnce the biceps are fully shortened, slowly lower the weights back to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Don’t allow the elbows to shift behind the body. Similarly, make sure the shoulder doesn’t shift forward in the socket as you lower the weight.\nMaintain a slight bend in the elbow at the bottom of the movement in order to keep tension through the biceps.\nUsing a slow eccentric (lowering portion) of the exercise can help to improve tension and mind muscle connection.',
    view: 2200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 26,
    execisename: 'Standing Hammer Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/standing-hammer-curl.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'The hammer curl is a great exercise for the biceps and forearms. Set up by grasping a set of dumbbells and standing straight up with the dumbbells by your sides.\nYou should be using a neutral grip, meaning your palms are facing your body.\nBend your arms slightly to take tension into the biceps.\nKeeping your body fixed and elbows in at your sides, slowly curl the dumbbells up as far as possible.\nSqueeze the biceps at the top of the movement, and then slowly lower the weight back to the starting position.\nRepeat for desired reps.',
    content3:
      "Do not lean back as you move the weight - this is cheating!\nKeep your elbows locked in by your sides throughout the set. Don't allow them to come forward as you curl the weight up. Focus on only allowing your forearms to move.\nSqueeze and hold at the top of the movement for maximum results.\nKeep the rep timing slow and control the weight for the whole set.\n",
    view: 2100000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 27,
    execisename: 'EZ Bar Preacher Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/ez-bar-preacher-curl.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content2:
      "The EZ bar preacher curl is a great exercise to isolate the biceps, while minimizing the strain on your wrists. Adjust the seat on the preacher bench so that your upper arms sit comfortably on the padding when seated.\nLoad the desired weight on the barbell.\nSit on the preacher bench and grip the EZ bar with your hands shoulder width apart using an underhand (palms facing up) grip. (note: You can use a wide or narrow grip on this exercise)\nKeeping your back straight and eyes facing forward, take the weight off the rack so that you're supporting it with your arms slightly bent. This is the starting position.\nSlowly bring the weight up until your forearms are at a right angle to the floor.\nSqueeze the bicep at the top of the movement, and then slowly lower it back to the starting position.\nRepeat for desired reps.",
    content3:
      'Keep the motion slow and controlled throughout the set.\nDon\'t "rest" at the top of the movement.\nSqueeze the biceps as hard as possible as your get the weight to the top.\nUse a wide grip to work the inner biceps and a close grip to work the outer biceps.',
    view: 1700000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 28,
    execisename: 'Cable Curl',
    videolink: 'https://www.muscleandstrength.com/exercises/cable-curl.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content2:
      'Set up for the cable curl by attaching a straight bar to the low pulley cable and selecting the weight you want to use on the stack.\nStand facing the cable machine with your legs shoulder width apart.\nGrasp the bar with an underhand grip (palms facing up), and your hands about shoulder width apart.\nKeeping your elbows tucked in by your sides, slowly curl the bar up as far as possible.\nSqueeze the biceps at the top of the movement, and then slowly lower it back to starting position.\nDo not pause, but go straight into the next rep!',
    content3:
      'Keep your elbows tucked in by your sides and don\'t allow them to come forward as you curl the weight up.\nDon\'t "rest" at the bottom of the movement. When you complete a rep move straight into the next rep!\nKeep the rep timing slow and control the weight as you lower it.',
    view: 1200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 29,
    execisename: 'Concentration Curl',
    videolink: 'https://www.youtube.com/watch?v=LHDwya1KY8M',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The concentration curl is a bodybuilding favorite for building biceps.\n\nSome promote the concentration curl claiming it to be an exercise guaranteed to produce a bicep pump and build the mind muscle connection. \n\nWith that said, the slow tempo typically used during the concentration curl is great for building the biceps and since it is an unilateral exercise, it helps work each bicep equally.',
    content2:
      'Select the desired weight from the rack, and sit in an upright position on a flat bench.\nHinge forward and position your elbow near the base of your knee. Place your free hand on the other knee to stabilize yourself.\nUsing a supinated (palms facing up) grip, take a deep breath and curl the dumbbell towards your shoulder.\nOnce the bicep is fully shortened, slowly lower the weight back to the starting position.\nRepeat for the desired number of repetitions on both sides.',
    content3:
      'Maintain a slight bend in the elbow at the bottom of the movement in order to keep tension through the biceps.\nUsing a slow eccentric (lowering portion) of the exercise can help to improve tension and mind muscle connection.',
    view: 2100000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 30,
    execisename: 'Pinwheel Curls',
    videolink:
      'https://www.muscleandstrength.com/exercises/hammer-curl-across-the-body.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'Set up for the across body hammer curl by grasping a pair of dumbbells and standing straight up holding them at your sides.\nYou should be using a neutral grip (palms facing the body) and the dumbbells should not be resting on your body.\nTake up the tension by slightly bending your arms. This is the starting position for the exercise.\nStarting with your weakest arm (usually the left), slowly curl the dumbbell up across the front of your body as shown in the video demonstration.\nSqueeze the bicep at the top of the movement, and then slowly lower the weight back to the starting position.\nRepeat this movement for your other arm.\nThis is one rep, now repeat to complete your set!',
    content3:
      'The dumbbells should not touch the body at any point during the exercise.\nKeep the rep timing slow and controlled.\nKeep the tension on both of your biceps throughout the whole set.',
    view: 1300000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 31,
    execisename: 'Machine Bicep Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/bicep-machine-curl.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content2:
      "Set up for the machine bicep curl by setting the seat height and selecting the weight you want to use on the stack.\nWhen you sit on the machine your upper arms should rest comfortably on the padding. If they don't, adjust the seat.\nGrasp the bar with an underhand grip at around shoulder width apart.\nBend the elbows slightly to take the weight up and place tension on the biceps.\nSlowly curl the weight up as far as possible, squeezing the biceps at the top of the movement.\nPause, and then slowly lower the weight.\nRepeat for desired reps.",
    content3:
      'Make sure you use a full range of motion by allowing the weight to go as far as possible without hitting the stack.\nKeep the rep timing slow, and control the weight.\nIf you have a training partner, the bicep machine is good for heavy negative curls.',
    view: 275000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 32,
    execisename: 'Standing High Pulley Cable Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/standing-high-pulley-cable-curl.html',
    targetmuscleid: 4,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 2,
    content2:
      "For the standing high pulley cable curl you'll need a cable machine with two high pulley cable attachments. Set up by attaching a single grip handle to each of the high pulley cables and selecting the weight you want to use on the stack.\nGrip each of the cables with an underhand grip (palms facing up) and stand in the center with your arms outstretched. This is the starting position.\nKeeping your upper arms and body fixed, curl the handles in towards your body as far as possible.\nPause, and then slowly lower the weight back to the starting position.\nRepeat for desired reps.",
    content3:
      "It's very important that you keep your body and elbows fixed in place throughout the set. Do not move your elbows! Focus on only allowing your forearms to move.\nThis is an isolation exercises, so your focus should be on muscle contraction and stretch - not on the weight.  ",
    view: 200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 33,
    execisename: 'Seated Calf Raise',
    videolink: 'https://www.youtube.com/watch?v=Yh5TXz99xwY',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The seated calf raise is a variation of the machine calf raise and an exercise used to isolate the muscles of the calves.\n\nThe calves can be a stubborn muscle group for a lot of people, so it’s important to experiment with several different angles when performing calf raises. You may also want to consider training the calves with a high training frequency.\n\nThe seated calf raise can be incorporated into your leg workouts and full body workouts.\n\n',
    content2:
      'Take a seat on the machine and place the balls of your feet on the platform with your toes pointed forward - your heels will naturally hang off. Position the base of quads under the knee pad and allow your hands to rest on top.\nExtend your ankles and release the safety bar.\nLower the heels by dorsiflexing the ankles until the calves are fully stretched.\nExtend the ankles and exhale as you flex the calves.\nRepeat for the assigned number of repetitions.',
    content3:
      'Keep the repetitions slow and controlled. Limit momentum and pause at the top to emphasize the contraction.\nLimit depth of the heels if you feel any sort of stretch through the bottom of the foot during the exercise.\nTry to move through the ball of the foot rather than the base of the toes.',
    view: 230000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 34,
    execisename: '45 Degree Leg Press Calf Raise',
    videolink: 'https://www.youtube.com/watch?v=RcKQbiL-ZOc',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The leg press calf raise is a variation of the machine calf raise and an exercise used to build the muscles of the calves.\n\nThe calves can be a very stubborn muscle group, so it’s important to target them with plenty of different angles and a with a high training frequency.\n\nThis exercise can be incorporated into your leg days or full body days.',
    content2:
      'Load the machine with the desired weight and take a seat.\nSit down and position your feet on the sled with a shoulder width stance.\nTake a deep breath, extend your legs, but keep the safeties locked (if possible).\nPosition your feet at the base of the platform and allow the heels to hang off.\nLower the heels by dorsiflexing the ankles until the calves are fully stretched.\nDrive the weight back to the starting position by extending the ankles and flexing the calves.\nRepeat for the desired number of repetitions.',
    content3:
      'SAFETY NOTE: Be extremely careful when re-positioning the feet at the base of the platform. If the safeties are not in place and you lose control of the platform, this could result in very serious injury.\nKeep the repetitions slow and controlled. Limit momentum and pause at the top to emphasize the contraction.\nIf you experience any sort of pain or pressure in the back of the knee joint, keep a slight bend in the knee and avoid complete lockout.\nIf the knee isn’t entirely locked out then ensure the position doesn’t change during the duration of the repetition.\nLimit depth of the heels if you feel any sort of stretch through the bottom of the foot during the exercise.\nTry to move through the ball of the foot rather than the base of the toes.',
    view: 900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 35,
    execisename: 'Seated Dumbbell Calf Raise',
    videolink:
      'https://www.muscleandstrength.com/exercises/seated-dumbbell-calf-raise.html',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      "The seated dumbbell calf raise is a good exercise for those who don't have access to a seated calf raise machine.\n\nSet up by placing a step or block at the end of a flat bench.\nNext, grasp a pair of dumbbells and sit on the end of the bench.\nPut the balls of your feet on the edge of the step/block and rest the ends of the dumbbells on your thighs close to your knees.\nLet your heels drop as far as possible without hitting the floor. This is the starting position.\nSlowly raise your heels off the floor as far as possible.\nSqueeze the calves and pause, and then slowly lower your heels back to the starting position.\nRepeat for desired reps.",
    content3:
      "Don't let your heels touch the floor at any time throughout the exercise.\nPause and squeeze the calves for a count of 1-2 at the top of the movement to add intensity.",
    view: 662000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 36,
    execisename: 'Standing Barbell Calf Raise',
    videolink:
      'https://www.muscleandstrength.com/exercises/standing-calf-raise.html',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content2:
      'Set up for the standing barbell calf raise by getting a block or step and placing it in front of you.\nGrasp a barbell and place it across the back of your shoulders. Make sure the bar sits across the muscles in your upper back, not your neck.\nStand up on the block with the balls of your feet on the edge.\nKeeping your balance, raise your heels off the floor.\nSqueeze the calves, and then slowly lower your heals back down as far as possible without letting them touch the floor.\nRepeat for desired reps.',
    content3:
      'Keep the balls of your feet on the edge of the step. Don\'t let your feet come forward as this makes the exercise less challenging.\nKeep the rep timing slow and controlled - don\'t "bounce".\nTo help keep your balance, keep your eyes facing forward at all times.',
    view: 900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 37,
    execisename: 'Standing Machine Calf Raise',
    videolink: 'https://www.youtube.com/watch?v=RBslMmWqzzE',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The standing machine calf raise is an excellent exercise to use if you are interested in isolating the calves.\n\nIn particular, the standing machine calf raise targets the gastrocnemius muscle. The gastrocnemius is better known as the “show” muscle of the calf.',
    content2:
      'Adjust the shoulder pad corresponding to your height.\nStep underneath the pad and place the balls of your feet on the platform with your toes pointed straight ahead - your heels will naturally hang off.\nExtend the hips and knees in order to raise the shoulder pad.\nLower the heels by dorsiflexing the ankles until the calves are fully stretched.\nExtend the ankles and exhale as you flex the calves.\nRepeat for the assigned number of repetitions.',
    content3:
      'Keep the repetitions slow and controlled. Limit momentum and pause at the top to emphasize the contraction.\nIf you experience any sort of pain or pressure in the back of the knee joint, keep a slight bend in the knee and avoid complete lockout.\nIf the knee isn’t entirely locked out then ensure the position doesn’t change during the duration of the repetition.\nLimit depth of the heels if you feel any sort of stretch through the bottom of the foot during the exercise.\nTry to move through the ball of the foot rather than the base of the toes.',
    view: 316000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 38,
    execisename: 'Standing One-Leg Calf Raise',
    videolink:
      'https://www.muscleandstrength.com/exercises/standing-one-leg-calf-raise-with-dumbbell.html',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'The one-leg calf raise holding a dumbbell is a great exercise for working the calves at home without machines.\n\nSet up by grasping a dumbbell in your right hand and standing on the edge of a calf raise block or step with the balls of your feet on the edge.\nTake your right leg and hook it behind your left.\nLet your left heel drop as far as possible. This is the starting position.\nKeeping your body straight and eyes facing forwards, raise your left heel up as far as possible.\nPause and squeeze the calf muscle, and then slowly lower your heel back down as far as possible.\nRepeat for desired reps, and then repeat on the right leg.',
    content3:
      'Always work your weakest side first. For most people, this is the left.\nUse the maximum range of motion by pushing up as high as you can and letting your heel drop as far as possible.\nKeep the rep timing slow and control the weight on the way down.',
    view: 828000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 39,
    execisename: 'Smith Machine Calf Raise',
    videolink:
      'https://www.muscleandstrength.com/exercises/smith-machine-calf-raise.html',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content2:
      'The smith machine is a good alternative if your gym does not have a standing calf raise machine.\n\nSet the bar on the smith machine to around shoulder height and rack up the weight you want to use.\nGrab a step, calf block, or weight plate and put it below the bar.\nStep up on the block and position the balls of your feet on the edge.\nGrasp the smith bar with a wide grip and position it across the top of your back muscles (not across the back of your neck).\nPush up to take the weight off the rack and slowly let your heels drop down as far as possible. This is the starting position.\nSlowly raise your heels as far as you can off the floor.\nSqueeze the calf muscles, and then slowly lower your heels back to the starting position.\nRepeat for desired reps.',
    content3:
      "Don't let your heels touch the floor throughout the set.\nThe balls of your feet should be right on the edge of the block. Do not allow them to come forward as it makes the exercise less challenging.\nUse the maximum range of motion by allowing your heels to drop as far as possible and then raising them as high as possible.\nFocus on not allowing your knees to bend.",
    view: 284000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 40,
    execisename: 'Toes In Seated Calf Raise',
    videolink: 'https://www.youtube.com/watch?v=GNNggarciHY',
    targetmuscleid: 5,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The toes in seated calf raise is a variation of the seated calf raise and an exercise used to isolate the muscles of the calves.\n\nThe calves can be a stubborn muscle group for a lot of people, so it’s important to experiment with several different angles when performing calf raises. You may also want to consider training the calves with a high training frequency.\n\nThe toes in seated calf raise can be incorporated into your leg workouts and full body workouts.\n',
    content2:
      'Take a seat on the machine and place the balls of your feet on the platform with your toes pointed in - your heels will naturally hang off. Position the base of quads under the knee pad and allow your hands to rest on top.\nExtend your ankles and release the safety bar.\nLower the heels by dorsiflexing the ankles until the calves are fully stretched.\nExtend the ankles and exhale as you flex the calves.\nRepeat for the assigned number of repetitions.',
    content3:
      'Keep the repetitions slow and controlled. Limit momentum and pause at the top to emphasize the contraction.\nLimit depth of the heels if you feel any sort of stretch through the bottom of the foot during the exercise.\nTry to move through the ball of the foot rather than the base of the toes.',
    view: 11800,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 41,
    execisename: 'Dumbbell Pullover',
    videolink:
      'https://www.muscleandstrength.com/exercises/dumbbell-pullover.html',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'Grasp a dumbbell with both hands and position yourself on a flat bench with your shoulder blades resting on the bench.\nYou should be at a 90 degree angle to the bench. Your back shoulder be straight, knees bent at 90 degrees, and feet firmly plated on the floor.\nHolding the dumbbell in both hands, straighten your arms so that dumbbell is directly overhead. This is the starting position.\nBending at the shoulders only and keeping your arms straight, slowly lower the weight down behind your head until the dumbbell reaches the height of the bench.\nSlowly raise the dumbbell back to the starting position.\nRepeat for desired reps.\n',
    content3:
      'Do not bend at the elbows.\nDo not let the dumbbell go too far forward. The starting position is directly above your head and the dumbbell should not go any further than that.',
    view: 3900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 42,
    execisename: 'Dumbbell Bench Press',
    videolink: 'https://www.youtube.com/watch?v=dGqI0Z5ul4k',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The dumbbell bench press is a variation of the barbell bench press and an exercise used to build the muscles of the chest.\n\nOften times, the dumbbell bench press is recommended after reaching a certain point of strength on the barbell bench press to avoid pec and shoulder injuries.\n\nAdditionally, the dumbbell bench press provides an ego check in the amount of weight used due to the need to maintain shoulder stability throughout the exercise.\n\nThe exercise itself can be featured as a main lift in your workouts or an accessory lift to the bench press depending on your goals.',
    content2:
      'Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.\nTo get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.\nSlowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).\nContract the chest and push the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Maintain more tension through the pecs by not locking out the elbows entirely.\nKeep the weights slightly tilted at a 45 degree angle in order to keep the elbows in a neutral position.\nDon’t allow the dumbbells to collide at the top of each rep - bouncing them together may cause you to lose stability within the shoulder and injure yourself.\nSqueeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.\nKeep your shoulder blades pinched together to ensure the shoulders remain in a safe position.\nImagine you’re trying to push yourself away from the weights rather than pushing the weights away from yourself.\nIf you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\nEnsure you maintain some tension in your abs and don’t allow your lower back to arch excessively.\nKeep your feet flat on the floor and don’t allow the lower body to move during the set.',
    view: 4500000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 43,
    execisename: 'Incline Dumbbell Bench Press',
    videolink:
      'https://www.youtube.com/watch?v=8nNi8jbbUPE&embeds_euri=https%3A%2F%2Fwww.muscleandstrength.com%2F&feature=emb_imp_woyt',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The incline dumbbell bench press is a variation of the incline bench press and an exercise used to build the muscles of the chest. The shoulders and triceps will be indirectly involved as well.\n\nUtilizing an incline will allow you to better target the upper portion of the chest, a lagging part for a lot of lifters.\n\nThe use of dumbbells will also promote balanced and equal strength among both sides of the chest. They can also help prevent shoulder and pec injuries when performing presses.\n\nYou can include incline dumbbell bench press in your chest workouts, upper body workouts, push workouts, and full body workouts.',
    content2:
      'Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the edge of an incline bench.\nTo get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.\nSlowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).\nContract the chest and push the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions.\n**Dropping the dumbbells to the side is discouraged unless you are experienced with the technique or using excessively heavy weights.\n\n**Ideally you should twist the dumbbells back to neutral (palms facing each other), bring your knees up so the ends of the dumbbells are touching your thighs, then use the weight of the dumbbells to rock back to an upright, seated position.',
    content3:
      'Maintain more tension through the pecs by not locking out the elbows entirely.\nKeep the weights slightly tilted at a 45 degree angle in order to keep the elbows in a neutral position.\nDon’t allow the dumbbells to collide at the top of each rep - bouncing them together may cause you to lose stability within the shoulder and injure yourself.\nSqueeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.\nKeep your shoulder blades pinched together to ensure the shoulders remain in a safe position.\nImagine you’re trying to push yourself away from the weights rather than pushing the weights away from yourself.\nIf you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\nEnsure you maintain some tension in your abs and don’t allow your lower back to excessive arch.\nKeep your feet flat on the floor and don’t allow the lower body to move during the set.',
    view: 3900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 44,
    execisename: 'Dumbbell Flys',
    videolink:
      'https://www.youtube.com/watch?v=-lcbvOddoi8&embeds_euri=https%3A%2F%2Fwww.muscleandstrength.com%2F&feature=emb_imp_woyt',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The dumbbell fly utilizes a chest fly movement pattern to isolate the muscles fo the chest to better help the muscles grow and become stronger.\n\nThe dumbbell fly is often thought of as a classic bodybuilding movement as the goal of the exercise is to isolate the chest for aesthetic purposes. The movement itself can be used to help build a stronger bench press but isn’t typically thought of from an increased performance stand-point.\n\nThus, this movement is best reserved for traditional chest workouts in bodybuilding style splits.',
    content2:
      'Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.\nTo get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top.\nSlightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow.\nOnce the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position.\nWithout allowing the dumbbells to touch, start the next repetition, and continue until the set is completed.',
    content3:
      'Imagine you’re trying to hug a tree while completing the exercise.\nDon’t squeeze the dumbbell handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\nAvoid touching or banging the dumbbells together at the top of each repetition in order to keep constant tension on the intended muscle groups.\nAlways keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\nIf you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\nKeep your feet flat on the floor, focus solely on keeping your elbows bent and activating your pecs.\nEnsure you maintain some tension in your abs and don’t allow your lower back to excessive arch.',
    view: 3800000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 45,
    execisename: 'Incline Bench Press',
    videolink: 'https://www.youtube.com/watch?v=uIzbJX5EVIY',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content1:
      'The incline bench press is a variation of the bench press and an exercise used to build the muscles of the chest. The shoulders and triceps will be indirectly involved as well.\n\nUtilizing an incline will allow you to better target the upper portion of the chest, a lagging part for a lot of lifters.\n\nYou can include incline bench press in your chest workouts, upper body workouts, push workouts, and full body workouts.',
    content2:
      'Lie flat on an incline bench and set your hands just outside of shoulder width.\nSet your shoulder blades by pinching them together and driving them into the bench.\nTake a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.\nLet the weight settle and ensure your upper back remains tight after lift off.\nInhale and allow the bar to descend slowly by unlocking the elbows.\nLower the bar in a straight line to the base of the sternum (breastbone) and touch the chest.\nPush the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.\nRepeat for the desired number of repetitions.',
    content3:
      'Technique first, weight second - no one cares how much you bench if you get injured.\nKeep the bar in line with your wrist and elbows and ensure it travels in a straight line. In order to keep the wrist straight, try to position the bar as low in the palm as possible while still being able to wrap the thumb.\nIf you want to keep more tension through the triceps and chest, stop each repetition just short of lockout at the top.\nDon’t worry about tucking the elbows excessively, much of this advice is from geared lifters using suits. A slight tuck on the way down may be advisable for some lifters but other lifters can use an excellent cue from Greg Nuckols that will accomplish the same thing: “Flare and push”.\nArching may be advisable depending upon your goals but ensure that most of the arch comes from the mid to upper back and not your lower back. If your lower back is cramping as you set up for the lift, you’re out of position and putting yourself at risk for potential injury.\nThe bar should touch your chest with every single repetition. If you want to overload specific ranges of motion, look into board presses or accommodating resistance with chains or bands.\nAs the bar descends, aim for your sternum (breastbone) or slightly below depending upon the length of your upper arm in order to promote a linear bar path.\nIntermediate and advanced lifters may use a thumbless or “suicide” grip but for the majority of lifters, it would be wiser to learn how to bench with the thumb wrapped around the bar at first.\nFight the urge to allow the wrists to roll back into extension, think about rolling your knuckles toward the ceiling.\nExperiment with grip width - if your have longer arms you may need to use a slightly wider grip. However, if you’re feeling pressure in the front of the shoulder during the exercise, you may need to widen your grip, improve scapular retraction, or slightly lessen the range of motion via exercises such as floor or board presses.\nSqueeze the bar as tightly as possible to help enhance shoulder stability.\nEnsure the shoulder blades remain retracted and don’t allow them to change position as you press.\nThe bar should descend under control and touch the lifter’s chest - no bouncing or excess momentum.\nThink about trying to push yourself away from the bar instead of pushing the bar off of you.\nTightness through the upper back should be one of your main priorities throughout the course of the lift.\nIdeally, use a spotter to help assist with the lift off in order to maintain tension through the upper back.\nKeep the feet quiet throughout the lift and utilize leg drive by pushing your feet into the floor and squeezing your glutes to stabilize the pelvis.\nFocus on pulling the bar apart or trying to “bend the bar” in order to activate some of the intrinsic stabilizers in the shoulder.\nThe glutes and shoulder blades should maintain contact with the bench throughout the entirety of the movement.',
    view: 2600000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 46,
    execisename: 'Barbell Bench Press',
    videolink: 'https://www.youtube.com/watch?v=tuwHzzPdaGc',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content1:
      'The barbell bench press is a classic exercise popular among all weight lifting circles. From bodybuilders to powerlifters, the bench press is a staple chest exercise in nearly every workout program.\n\nFor powerlifters, it is known as one of the “big three” lifts which includes the squat, deadlift, and bench press. For athletes, 1 rep max on bench press is a good indicator for on field/court performance. And for bodybuilders, the bench press is a compound exercise that targets many of the muscles in your upper body.\n\nBy performing the bench press, you primarily work your pectoralis major (your chest). Other muscles which assist in moving the barbell during a bench press are other muscles of the chest, triceps, and shoulders.\n\nNot everyone is built to perform the traditional barbell bench press, so several variations have been created to ensure people can train this crucial movement pattern in a safe and comfortable way.',
    content2:
      'Lie flat on a bench and set your hands just outside of shoulder width.\nSet your shoulder blades by pinching them together and driving them into the bench.\nTake a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.\nLet the weight settle and ensure your upper back remains tight after lift off.\nInhale and allow the bar to descend slowly by unlocking the elbows.\nLower the bar in a straight line to the base of the sternum (breastbone) and touch the chest.\nPush the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.\nRepeat for the desired number of repetitions.',
    content3:
      'Technique first, weight second - no one cares how much you bench if you get injured.\nKeep the bar in line with your wrist and elbows and ensure it travels in a straight line. In order to keep the wrist straight, try to position the bar as low in the palm as possible while still being able to wrap the thumb.\nIf you want to keep more tension through the triceps and chest, stop each repetition just short of lockout at the top.\nDon’t worry about tucking the elbows excessively, much of this advice is from geared lifters using suits. A slight tuck on the way down may be advisable for some lifters but other lifters can use an excellent cue from Greg Nuckols that will accomplish the same thing: “Flare and push”.\nArching may be advisable depending upon your goals but ensure that most of the arch comes from the mid to upper back and not your lower back. If your lower back is cramping as you set up for the lift, you’re out of position and putting yourself at risk for potential injury.\nThe bar should touch your chest with every single repetition. If you want to overload specific ranges of motion, look into board presses or accommodating resistance with chains or bands.\nAs the bar descends, aim for your sternum (breastbone) or slightly below depending upon the length of your upper arm in order to promote a linear bar path.\nIntermediate and advanced lifters may use a thumbless or “suicide” grip but for the majority of lifters, it would be wiser to learn how to bench with the thumb wrapped around the bar at first.\nFight to the urge to allow the wrists to roll back into extension, think about rolling your knuckles toward the ceiling.\nExperiment with grip width - if your have longer arms you may need to use a slightly wider grip. However, if you’re feeling pressure in the front of the shoulder during the exercise, you may need to widen your grip, improve scapular retraction, or slightly lessen the range of motion via exercises such as floor or board presses.\nSqueeze the bar as tightly as possible to help enhance shoulder stability.\nSome lifters prefer to tuck their toes while other prefer to keep the feet flat in order to optimize leg drive - experiment with both and see which one feels and allows for greater power production.\nEnsure the shoulder blades remain retracted and don’t allow them to change position as you press.\nThe bar should descend under control and touch the lifter’s chest - no bouncing or excess momentum.\nThink about trying to push yourself away from the bar instead of pushing the bar off of you.\nTightness through the upper back should be one of your main priorities throughout the course of the lift.\nIdeally, use a spotter to help assist with the lift off in order to maintain tension through the upper back.\nKeep the feet quiet throughout the lift and utilize leg drive by pushing your feet into the floor and squeezing your glutes to stabilize the pelvis.\nFocus on pulling the bar apart or trying to “bend the bar” in order to activate some of the intrinsic stabilizers in the shoulder.\nThe glutes and shoulder blades should maintain contact with the bench throughout the entirety of the movement.',
    view: 3900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 47,
    execisename: 'Pec Dec',
    videolink: 'https://www.muscleandstrength.com/exercises/pec-dec.html',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content2:
      "The pec dec is a great machine for isolating the chest. Before you start, adjust the seat height so that the bottom of the arm pads are about level with your chest when you're sitting on the machine.\nSelect the weight you want to use on the stack.\nSit on the machine, grasp the handles and/or place your forearms on the padding. Take the weight off the stack slightly. This is the starting position for the exercise.\nKeeping your body fixed, slowly bring the forearm pads or handles together. Don't let them touch.\nSqueeze the chest muscles for a count of 1-3, then slowly lower back to the starting position.\nRepeat for desired reps.",
    content3:
      "The pec dec is an awesome machine for targeting the pectorals, but you need to use strict technique and focus on stretch and contraction to get the most out of it. Don't let the stack drop during the set. \nDon't touch the pads or handles in the center, and keep your body fixed.\nDon't bring your torso forward as you squeeze the weight up.\nPause at the top of the exercise (pads in) for a count of 1-3, squeezing the chest for maximum intensity.\nYour upper arms or elbows should be positioned parallel to the floor.",
    view: 2200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 48,
    execisename: 'Standing Cable Fly',
    videolink: 'https://www.youtube.com/watch?v=OPYrUGZL8nU',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The standing cable fly is a variation of the chest fly and an exercise used to strengthen the pushing muscles of the body including the chest, triceps, and shoulders.\n\nThe standing cable fly can be tough to overload as it requires a great deal of core stability, so it is probably best used as an accessory movement for those looking to increase their chest muscle mass.\n\nThis movement can be included into your chest workouts, push workouts, upper body workouts, or full body workouts.',
    content2:
      'Set both pulleys directly at (or slightly above) shoulder height and select the desired weight.\nGrasp both handles with a neutral grip and take a step forward to split the stance.\nPress the handles to lockout while flexing the pecs and extending the elbows.\nKeep a slight bend in the elbows, move entirely at the shoulder joint, and slowly allow the arms to open while the pecs stretch.\nReturn to the starting position by flexing your pecs and bringing the handles together at chest height.\nSlowly lower back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'Imagine you’re trying to hug a tree while completing the exercise.\nDon’t squeeze the handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\nAvoid touching or banging the handles together at peak contraction to keep constant tension on the intended muscle groups.\nAlways keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\nEnsure you maintain some tension in your abs and don’t allow your lower back to arch excessively.',
    view: 1070000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 49,
    execisename: 'Incline Dumbbell Flys',
    videolink: 'https://www.youtube.com/watch?v=beazxb8q-SA',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The incline dumbbell fly is a variation of the dumbbell fly and an exercise used to isolate the muscles of the chest.\n\nIsolation exercises, such as the incline dumbbell fly, are primarily used by lifters with aesthetic based goals. They can be used by lifters with strength based goals, however, the exercise itself will have limited carry over into increasing maximum strength.\n\nThe incline angle used during the incline dumbbell fly provides a unique challenge to the exercise and also emphasizes the upper chest.\n\nThis exercise is best used on upper hypertrophy days and/or chest workouts in more traditional bodybuilding splits.',
    content2:
      'Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on an incline bench.\nTo get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top.\nSlightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow.\nOnce the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position.\nWithout allowing the dumbbells to touch, start the next repetition, and continue until the set is completed.',
    content3:
      'Use a slight incline such as 30 degrees. Extremes are never the best option.\nImagine you’re trying to hug a tree while you complete the exercise.\nDon’t squeeze the dumbbell handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\nAvoid touching or banging the dumbbells together at the top of each repetition in order to keep constant tension on the intended muscle groups.\nAlways keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\nIf you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\nKeep your feet flat on the floor, focus solely on keeping your elbows bent and activating your pecs.\nEnsure you maintain some tension in your abs and don’t allow your lower back to excessive arch.',
    view: 870000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 50,
    execisename: 'Decline Bench Press',
    videolink: 'https://www.youtube.com/watch?v=oIgci8aNsG0',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content1:
      'The decline bench press is a variation of the bench press and an exercise used to target the muscles of the chest. It will also indirectly target the muscles of the shoulders and triceps.\n\nThe decline bench press is commonly used to target the lower portion of the pecs. However, some argue that it is the most effective bench press variation for targeting the entire chest.\n\nBench press variations can be included in your chest workouts, push workouts, upper body workouts, and full body workouts.',
    content2:
      'Lie flat on an decline bench, set your hands just outside of shoulder width, and hook your feet underneath the pad.\nSet your shoulder blades by pinching them together and driving them into the bench.\nTake a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.\nLet the weight settle and ensure your upper back remains tight after lift off.\nInhale and allow the bar to descend slowly by unlocking the elbows.\nLower the bar in a straight line to just below your sternum (breastbone) and touch the chest.\nPush the bar back up in a straight line by pressing yourself into the bench and extending the elbows.\nRepeat for the desired number of repetitions.',
    content3:
      'Technique first, weight second - no one cares how much you bench if you get injured.\nKeep the bar in line with your wrist and elbows and ensure it travels in a straight line. In order to keep the wrist straight, try to position the bar as low in the palm as possible while still being able to wrap the thumb.\nIf you want to keep more tension through the triceps and chest, stop each repetition just short of lockout at the top.\nDon’t worry about tucking the elbows excessively, much of this advice is from geared lifters using suits. A slight tuck on the way down may be advisable for some lifters but other lifters can use an excellent cue from Greg Nuckols that will accomplish the same thing: “Flare and push”.\nArching may be advisable depending upon your goals but ensure that most of the arch comes from the mid to upper back and not your lower back. If your lower back is cramping as you set up for the lift, you’re out of position and putting yourself at risk for potential injury.\nThe bar should touch your chest with every single repetition. If you want to overload specific ranges of motion, look into board presses or accommodating resistance with chains or bands.\nAs the bar descends, aim for your sternum (breastbone) or slightly below depending upon the length of your upper arm in order to promote a linear bar path.\nIntermediate and advanced lifters may use a thumbless or “suicide” grip but for the majority of lifters, it would be wiser to learn how to bench with the thumb wrapped around the bar at first.\nFight the urge to allow the wrists to roll back into extension, think about rolling your knuckles toward the ceiling.\nExperiment with grip width - if your have longer arms you may need to use a slightly wider grip. However, if you’re feeling pressure in the front of the shoulder during the exercise, you may need to widen your grip, improve scapular retraction, or slightly lessen the range of motion via exercises such as floor or board presses.\nSqueeze the bar as tightly as possible to help enhance shoulder stability.\nEnsure the shoulder blades remain retracted and don’t allow them to change position as you press.\nThe bar should descend under control and touch the lifter’s chest - no bouncing or excess momentum.\nThink about trying to push yourself away from the bar instead of pushing the bar off of you.\nTightness through the upper back should be one of your main priorities throughout the course of the lift.\nIdeally, use a spotter to help assist with the lift off in order to maintain tension through the upper back.\nFocus on pulling the bar apart or trying to “bend the bar” in order to activate some of the intrinsic stabilizers in the shoulder.\nThe glutes and shoulder blades should maintain contact with the bench throughout the entirety of the movement.',
    view: 600000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 51,
    execisename: 'Push Up',
    videolink: 'https://www.youtube.com/watch?v=KEFQyLkDYtI',
    targetmuscleid: 6,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The push up is an exercise used to build the muscles of the chest. The shoulders and triceps will be indirectly involved as well.\n\nThe push up is an old school movement that nearly everyone has performed at one point or another in their lifetime. The exercise is extremely beneficial in not only building the chest but also promoting healthy shoulder stability.\n\nYou can include push up in your chest workouts, upper body workouts, push workouts, and full body workouts.',
    content2:
      'Assume a quadruped position on the floor with your hands under your shoulders, toes tucked, and knees under hips.\nExtend one leg at a time and assume a pushup position with the legs straight, elbows extended, and head in a neutral position looking at the floor.\nSlowly descend to the floor by retracting the shoulder blades and unlocking the elbows.\nDescend until the upper arms are parallel or your chest touches the floor.\nPush back to the starting point by extending the elbows and driving your palms into the floor.\nRepeat for the desired number of repetitions.',
    content3:
      'Your arms should resemble an arrow in the bottom position, not a “T”.\nYour spine should remain rigid throughout the entire exercise, think of the pushup as a moving plank.\nSqueeze your glutes and brace your abs before descending in order to keep the ribcage neutral.\nKeep the chin down and don’t look forward.\nImagine you’re trying to push your thumbs together while completing the movement, this will improve activation of the pecs.\nDon’t allow the head to jut forward, the chest should touch at the same time as your nose.\nThink about trying to push yourself as far away from the floor as possible.\nEnsure you push all the way through the floor at the top of the repetition and allow your shoulder blades to move around your ribcage.\nMost folks cut the repetition short and don’t garner the full benefits as such.',
    view: 800000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 52,
    execisename: 'Seated Barbell Wrist Curl',
    videolink: 'https://www.youtube.com/watch?v=cOBaYeX3bYo',
    targetmuscleid: 7,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content1:
      'The seated barbell wrist curl is a wrist curl variation and an exercise used to target the muscles of the forearms.\n\nHaving strong forearms, and training the forearms in multiple ways, will allow you to lift heavier weight in many exercises simply by strengthening your grip.\n\nForearms can be a resistant muscle to grow and may require a higher training frequency to experience a noticeable difference in forearm strength and size.',
    content2:
      'Select the desired weight, load it onto the bar, and assume a seated position with the forearms resting comfortably on your thighs.\nUtilize a supinated (palms up) grip and curl the bar towards your body using just the wrists.\nOnce the forearm flexors are fully shortened, slowly lower the weight back to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Using a slow eccentric (lowering portion) of the exercise can help to improve tension and mind muscle connection.\nTry not to open the fingers at the bottom of the movement, just move through the wrist.',
    view: 1100000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 53,
    execisename: 'Standing Wrist Curl Behind',
    videolink:
      'https://www.muscleandstrength.com/exercises/standing-wrist-curl.html',
    targetmuscleid: 7,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content2:
      'Begin the exercise by selecting a barbell weight and holding it behind your back using an underhand grip (palms facing out). Your hands should be placed around shoulder width apart.\nStand straight up with your feet shoulder width apart and look straight forward. Bending only at the wrists, let the barbell drop as far as possible. This is the starting position for the exercise.\nSlowly raise the barbell up as far as possible squeezing the forearm muscles at the top of the movement. Only your wrists should be moving.\nPause, and then slowly lower the barbell back to the starting position.\nRepeat for desired reps.',
    content3:
      "A light weight should be used with proper technique. It doesn't take heavy weight to make this exercise effective.\nKeep the rep timing slow, and pause/squeeze the forearms for a count of two at the top of the movement for added intensity.\nUse a full range of motion by allowing the weight to drop as far as possible at the bottom of the movement.\nIt would be wise to have a training partner either hand you the bar or use a rack to pick it up.\nWhen finished, lower the bar to a rack or bend at the knees and lower it to the floor.",
    view: 700000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 54,
    execisename: 'Reverse Grip Barbell Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/reverse-barbell-curl.html',
    targetmuscleid: 7,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content2:
      'Grasp a barbell or Olympic bar at around shoulder width apart using a reverse grip (palms facing down).\nStand straight up, feet together (you may be more comfortable putting one foot back for stability), back straight, and with your arms fully extended. The bar should not be touching your body.\nKeeping your eyes facing forwards, elbows tucked in at your sides, and your body completely still, slowly curl the bar up.\nSqueeze your forearms hard at the top of the movement, and then slowly lower it back to the starting position.\nRepeat for desired reps.',
    content3:
      'Your body should remain fixed and only your biceps and forearms should be used to move the weight.\nAnother mistake is not keeping the elbows fixed and in at the sides. You should not let your elbows come forward when moving the weight up.\nAnd finally, you need to control the weight throughout the set. This means not letting it drop quickly!',
    view: 493000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 55,
    execisename: 'One Arm Seated Dumbbell Wrist Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/one-arm-seated-dumbbell-wrist-curl.html',
    targetmuscleid: 7,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'Grasp a dumbbell using a underhand grip (palms facing up) and sit down on the end of a flat bench.\nRest the back of your forearm on top of your inner thigh so that the wrist holding the dumbbell is just off the end of it.\nBending only at the wrist, let the dumbbell drop as far as possible. You can rest your non-working arm in your lap for stability. This is the starting position for the exercise.\nSlowly raise the dumbbell up as far as possible squeezing the forearm muscles at the top of the movement.\nPause, and then slowly lower the dumbbell back to the starting position.\nRepeat for desired reps.',
    content3:
      "A light weight should be used with proper technique. It doesn't take heavy weight to make this exercise effective.\nKeep the rep timing slow, and pause/squeeze the forearms for a count of two at the top of the movement for added intensity.\nUse a full range of motion by allowing the weight to drop as far as possible at the bottom of the movement.",
    view: 113000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 56,
    execisename: 'Reverse Grip Preacher Curl',
    videolink:
      'https://www.muscleandstrength.com/exercises/reverse-preacher-curl.html',
    targetmuscleid: 7,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content2:
      'Set up for the reverse grip preacher curl by adjusting the seat height of the preacher bench so that the back of your upper arms rest flat on the pads.\nLoad up a barbell with the weight desired and sit on the bench.\nGrasp the bar with an overhand grip (palms facing down).  \nKeeping your arms fixed, and only bending at the elbows, curl the weight until your forearms are at 90 degrees to the floor.\nDo not pause, and slowly lower the weight back to the starting position.\nRepeat for desired reps.',
    content3:
      "Use a full range of motion on this exercise but do not curl the weight up too far. Once your forearms are at an angle of more than 90 degrees to the floor, you're essentially resting.\nAs always, use slow and controlled rep timing.",
    view: 45000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 57,
    execisename: 'Hyperextension',
    videolink: 'https://www.youtube.com/watch?v=BZMnTSobIAQ',
    targetmuscleid: 8,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The hyperextension is a variation of the hip hinge movement pattern and an exercise used to target the glutes.\n\nSome may choose to utilize this exercise to target their lower back. However, for optimal health and maximum benefits, it is best to think of this exercise as a glute exercise.\n\nHyperextensions can be included in your leg workouts and full body workouts.',
    content2:
      'Setup in a hyperextension machine with your feet anchored and torso roughly perpendicular to your legs at a 45 degree angle.\nBegin in a hinged position with your arms crossed and initiate the movement by flexing your glutes.\nExtend the hips and finish with your body in a straight line.\nRepeat for the desired number of repetitions.',
    content3:
      'Keep in mind that there are two ways to do hyperextensions. For the vast majority of folks (outside of a sport specific application - ex. Gymnastics or Olympic weight lifting), they stick with the first rather than the second option.\nGlutecentric: Slightly flex your upper back and extend your hips until your body is in a straight line and focus entirely on gluteal activation.\nErector-centric: Arch globally through the spine and focus entirely on erector activation.\nIf you can’t seem to feel your glutes activating, palpate the musculature with your hands and focus on pausing the movement at the peak of contraction.\nIf you find one glute has less contractility than another, perform twice as much volume on that side relative to the other with unilateral variations until you have established an efficient mind/muscle connection',
    view: 2400000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 58,
    execisename: 'Barbell Hip Thrust',
    videolink: 'https://www.youtube.com/watch?v=lAnqN0J_p5A',
    targetmuscleid: 8,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content1:
      'The barbell hip thrust is an exercise that is used to build the glute muscles. It will also indirectly target the other muscles of the legs such as the hamstrings, quads, and calves.\n\nBarbell hip thrusts are thought to be the optimal exercise for glute specific training. So, if you have goals to build a bigger butt, barbell hip thrusts should be included in your workouts.\n\nBuilding strong glutes will also have a positive carryover into your other exercises including squat variations and deadlift variations.\n\nBarbell hip thrusts can be included in your leg workouts and full body workouts.',
    content2:
      'Start in a supine position with your back on a bench and roll a barbell up to the crease of your hips.\nDrive both feet into the floor and squeeze your glutes while bridging your hips up.\nLower your hips back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'If just using your bodyweight, you can cross your arms in front of your chest or simply have them straight out to the sides. Utilize whichever method is more comfortable.\nEnsure that the lower back doesn’t arch as you extend the hip, you should focus on squeezing the glutes and slightly posteriorly tilting the pelvis.\nIdeally you should prioritize a straight line from your knees through your shoulders at the peak of contraction.\nDon’t allow the hips to drop or rotate as you bridge the hips up.\nFocus on exhaling as you bridge the hips up. You shouldn’t feel the movement through your lower back at all.\nIf you can’t seem to feel your glutes activating, palpate the musculature with your hands and focus on pausing the movement at the peak of contraction.',
    view: 820000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 59,
    execisename: 'Good Mornings',
    videolink: 'https://www.youtube.com/watch?v=8sGgyquE1Bs',
    targetmuscleid: 8,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content1:
      'The good morning is a variation of the hip hinge and an exercise used to target the glutes.\n\nSome may choose to utilize this exercise to target their lower back. However, for optimal health and maximum benefits, it is best to think of this exercise as a glute exercise.\n\nGood mornings can be included in your leg workouts and full body workouts.',
    content2:
      'Set a bar just below shoulder height in a rack and adjust the safeties to just above hip height.\nSet your hands equidistant apart, step underneath, and position the bar on your traps (or slightly below if you prefer a low bar version).\nBegin the movement by unlocking your knees and hinging back into the hips while keeping your spine neutral.\nDrive through the whole foot as you extend the hip back to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Range of motion in the lift will largely be determined by an individual’s mobility as well as their ability to maintain a neutral spine.\nExperiment with a “false” (i.e. thumbless) grip as this helps to eliminate elbow and wrist issues in some folks.\nNeck position is highly individual - Some prefer a neutral neck position (i.e. keeping the chin tucked throughout the lift) while others do well with looking slightly up. Here’s some factors to consider:\nIf you’re someone who is more globally extended (i.e. athletic background), then you will likely be able to keep a neutral position more effectively by packing the chin.\nOn the opposite end of the spectrum, if you tend to be more flexion dominant (especially in your thoracic spine - upper back) then it would behoove you to look up slightly as this will drive more extension.\nExperiment with each and see which one works best for your individual anatomy and biomechanics.\nYour weight will naturally shift to your heels as you hinge; however, it’s important that you keep the weight distributed over your whole foot and don’t allow the toes to rise. To combat this, you should focus on maintaining 3 points of contact: big toe, little toe, and heel.',
    view: 922000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 60,
    execisename: 'Glute Kick Back',
    videolink: 'https://www.youtube.com/watch?v=aX0U98L4Ywk',
    targetmuscleid: 8,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The quadruped hip extension, commonly referred to as the glute kick back, is an exercise used to isolate the glute muscles. It is also an excellent option to use as an activation drill to warm up the glutes.\n\nThey are also referred to as the donkey kick, because when you perform them you look like a donkey kicking with their hind leg.',
    content2:
      'Setup in a quadruped position with your hands underneath your shoulders, knees underneath your hips, and toes tucked.\nWhile keeping a neutral spine and a 90 degree angle at the knee, extend the hip and drive the heel towards the ceiling.\nSlowly return to the starting position and repeat for the desired number of repetitions on both sides.',
    content3:
      'The lumbar spine shouldn’t move at all, ensure that all of the movements comes entirely from the hip.\nSqueeze the glute and exhale as the hip extends to keep the abs active.\nKeep the head down and don’t worry about looking up as you complete repetitions, this can tend to drive you further into extension.\nKeep the elbows locked out and think about leading the movement by driving the heel vertically.',
    view: 450000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 61,
    execisename: 'Wide Smith Machine Squat',
    videolink:
      'https://www.muscleandstrength.com/exercises/wide-smith-machine-squat.html',
    targetmuscleid: 8,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 2,
    content2:
      'Set up for the wide smith machine squat by setting the bar to around shoulder height and loading the weight you want to use on the smith machine.\nStand under the bar with your legs in a wide stance and your toes pointed slightly outward.\nGrasp the bar with a wide grip and position the center of the bar on top of the muscles on your back. The bar should not sit on your neck. \nKeeping your back straight and your eyes facing forwards, take the weight off the rack. Take a slight step forward.\nWith your back straight and your eyes facing forward, slowly squat down until your thighs are parallel to the floor.\nPush up through your heels and raise the bar back to the starting position.\nRepeat for desired reps.',
    content3:
      "It's important that you keep a straight back when you squat! You can ensure your back is straight by keeping your eyes facing forward, chest out, and shoulder blades back. Keep your core muscles tensed throughout the movement to help hold your back in place.\nDon't push from the balls of your feet. This puts unnecessary strain on joints and tendons. Always push up through your heels. Curling up your toes can help you get the technique right.\nUsing squats to their full potential requires squatting down until your thighs are at least parallel to the floor.\nDon't look down. As soon as you look down your back rounds, simple as that.",
    view: 257000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 62,
    execisename: 'Bodyweight Glute Bridge',
    videolink: 'https://www.youtube.com/watch?v=mm4wbmtDrUc',
    targetmuscleid: 8,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The glute bridge is a variation of the hip thrust and an exercise that is used to build the glute muscles. It will also indirectly target the other muscles of the legs such as the hamstrings, quads, and calves.\n\nhip thrust variations are thought to be the optimal exercise for glute specific training. So, if you have goals to build a bigger butt, hip thrusts should be included in your workouts.\n\nBuilding strong glutes will also have a positive carryover into your other exercises including squat variations and deadlift variations.\n\nGlute bridges can be included in your leg workouts and full body workouts.',
    content2:
      'Start in a supine position on the floor with your arms at a 45 degree angle relative to your torso.\nBridge your hips up by squeezing your glutes and driving your heels into the floor.\nLower your hips back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'Ensure that the lower back doesn’t arch as you extend the hip, you should focus on squeezing the glutes and slightly posteriorly tilting the pelvis.\nIdeally you should prioritize a straight line from your knees through your shoulders at the peak of contraction.\nFocus on exhaling as you bridge the hips up. You shouldn’t feel the movement through your lower back at all.\nIf you can’t seem to feel your glutes activating, palpate the musculature with your hands and focus on pausing the movement at the peak of contraction.\nIf you find one glute has less contractility than another, perform the movement unilaterally and then incorporate the bilateral version after you have accumulated sufficient volume on the side with poor contractility.',
    view: 200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 63,
    execisename: 'Dumbbell Stiff Leg Deadlift',
    videolink:
      'https://www.muscleandstrength.com/exercises/dumbbell-stiff-leg-deadlift.html',
    targetmuscleid: 9,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      "Set up for the dumbbell stiff leg deadlift by choosing a pair of dumbbells and holding them down at your sides.\nStand up straight with a slight bend in your knees and your feet around shoulder width apart. This is your starting position.\nKeep your back as straight as possible and bend over at the waist lowering the dumbbells over the tops of you feet. Your knees should be kept stationary during the movement.\nFocus on the stretch in your hamstrings, and continue to lower the dumbbells down as far as your hamstrings will let you comfortably.\nNow engage the hamstrings and begin to raise the dumbbells straight back up. Your eyes should be facing up and your shoulders back. This will prevent your lower back from rounding.\nSqueeze up through the glutes and hamstrings until you're standing straight up.\nRepeat for desired reps.",
    content3:
      "You must keep your eyes looking up at all times. As soon as you look down at the floor your back will round!\nThe dumbbells need to stay close to your body throughout the set. The further the dumbbells are from your body the more strain is on your lower back.\nFocus on stretching the hamstrings out as you lower the dumbbells and contracting them as you raise back up. The greater the mind-muscle connection the more you'll get out of this exercise.\nIt's best to have your knees slightly bent during the set but fixed (ie: bend them slightly but keep them locked in the same place throughout the set).\nDuring the descent, to protect your lower back, keep your weight back on the heels. Do not let your weight shift forward onto the toes. If you find the your weight on the toes when at the bottom position of the exercise, you are performing it incorrectly.\nDo not relax at the bottom of the movement. Keep your legs, back and abdominals tight as you begin the ascent.\nKeep the rep timing slow and control the weight, especially when lowering. Remember the focus is on stretch and contraction!\nOne of the biggest mistakes people make when performing this exercise is bending over at the waist without moving the hips back. Instead of being supported by the large hamstring muscles, the weight is now placed almost entirely on the lower spine. Needless to say, this puts your back at great risk for injury. If you keep the weight close to your body your hips with naturally move back.\nTechnique is so important with this exercise. If you're just starting out, stand with your side to a mirror with a very light weight and practice the movement. Once you get the technique nailed you'll be able to move up in weight and start building some killer hams and glutes!",
    view: 3600000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 64,
    execisename: 'Conventional Deadlift',
    videolink: 'https://www.youtube.com/watch?v=wjsu6ceEkAQ',
    targetmuscleid: 9,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content1:
      'The deadlift is an extremely popular exercise and a true test of total body strength. It is popular across numerous weight lifting circle including bodybuilders, powerlifts, and Crossfit athletes.\n\nThe deadlift focuses on lifting dead weight off the ground to hip level without using momentum to assist the weight on its path up. It is known as one of the “big three” exercises for powerlifters which includes squats, bench press, and the deadlift. Bodybuilders use the deadlift to promote muscle growth in their entire posterior chain (muscles on the back of the body).\n\nThe deadlift primarily works the muscles of the hamstrings. However, it is a complete compound exercise and also requires muscle activation from the back, glutes, hamstrings, arms, and core.\n\nThe conventional deadlift shouldn’t be performed by just anyone as it involves a lot of technique and skill to execute. However, the hip-hinge movement pattern trained while performing a deadlift is and should be included in every workout program.\n\nFor those who cannot deadlift using the conventional pulling method, they can perform the exercise using one of the many deadlift variations out there.',
    content2:
      'Position the bar over the top of your shoelaces and assume a hip width stance.\nPush your hips back and hinge forward until your torso is nearly parallel with the floor.\nReach down and grasp the bar using a shoulder width, double overhand grip.\nInhale and pull up slightly on the bar while allowing your hips to drop in a seesaw fashion. This phenomenon is commonly referred to as “pulling the slack out of the bar”.\nAs you drop the hips and pull up on the bar, set the lats (imagine you’re trying to squeeze oranges in your armpits) and ensure your armpits are positioned directly over the bar.\nDrive through the whole foot and focus on pushing the floor away.\nEnsure the bar tracks in a straight line as you extend the knees and hips.\nOnce you have locked out the hips, reverse the movement by pushing the hips back and hinging forward.\nReturn the bar to the floor, reset, and repeat for the desired number of repetitions.',
    content3:
      'You MUST keep the crease of the armpit over the bar and the midfoot in order to allow the bar to travel linearly.\nThe deadlift is a hinge, not a squat. If you set the hips too low you will put yourself in a disadvantageous position biomechanically and limit your potential for pulling maximal weights.\nIn order to prevent the bar from drifting away from the body, one should focus on squeezing their lats in order to keep the bar close and allow it to travel in a linear fashion. Use the cue: “squeeze oranges in your armpits”, “put your shoulder blades in your back pockets” (i.e. scapular depression) or “imagine you’re doing a straight arm pulldown”.\nThe hips should be lower than the shoulders and you should be able to see the logo on the lifter’s shirt before they pull (i.e. “chest up”). The chest up cue is usually accomplished when the lats become locked in though so this cue is typically not needed if the lifter understands how to initiate the lats.\nNeck position is highly individual - Some prefer a neutral neck position (i.e. keeping the chin tucked throughout the lift) while others do well with looking slightly up. Here’s some factors to consider:\nIf you’re someone who is more globally extended (i.e. athletic background), then you will likely be able to keep a neutral position more effectively by packing the chin.\nOn the opposite end of the spectrum, if you tend to be more flexion dominant (especially in your thoracic spine - upper back) then it would behoove you to look up slightly as this will drive more extension.\nExperiment with each and see which one works best for your individual anatomy and biomechanics.\nIdeally you should cue and emphasize a vertical shin but this will depend entirely on a lifter’s spine and limb length.\nToe angle is highly individual - this will be dependent upon your hip anatomy. Experiment (toes slightly in, out, or neutral) to see what feels best for you.\nDo NOT retract your shoulder blades. This is mechanically inefficient and a self limiting cue as it shortens the length of the arms thus requiring a larger range of motion.\nMake sure you wrap your thumbs around the bar and don’t utilize a false grip. Squeeze the bar as tight as possible like you’re trying to leave an imprint of your fingerprints on the bar.\nScraping the shins isn’t always necessary in the deadlift. It may occur more frequently with sumo rather than conventional work but if you have the arm pits in the correct position (as noted above) then the bar should travel vertically and the shins will become vertical and move out of the way as the knees extend.\nTo follow up on my previous point, if you focus on keeping the weight entirely on the heels, you won’t be able to effectively recruit your quads at the beginning of the lift and thus you’ll be slow off the flow. So, to combat this, you should focus on driving through the whole foot - you want 3 points of contact: big toe, little toe, and heel.\nEnsure the elbows stay locked out. Don’t actively flex the triceps but make sure that your elbow doesn’t break neutral as this can potentially put you at risk for a bicep tear under maximal weights.\nMore experienced lifters may not need to emphasize the “pull the slack out the bar” cue as much and that’s perfectly fine if it works for them and still allows them to pull maximal weight but initially it’s an important concept to understand and implement.\nFor single repetitions, it will be much easier to drop the bar from lockout (provided that it’s allowed and you’re lifting on a platform or with bumper plates) due to less eccentric loading upon your spinal erectors. However, for multiple repetitions you should try to lower the weight under control while not overly fatiguing the erectors.\nThe knees should be stacked over the feet. If you position the feet too wide (outside of hip width) then you will likely have to resort to one of two strategies:\nThe knees will be pushed inward (valgus) due to your grip width.\nYou will have to widen your grip which will require a larger range of motion and make the lift less efficient.\nIf you find that you’re weak at lockout, you should incorporate rack pulls, RDLs, and/or pulls against chains or bands. On the opposite end of the spectrum however, if you’re weak off the floor, you should incorporate paused and/or deficit deadlifts. You would also need additional supplementary work for the upper back and glutes.',
    view: 3900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 65,
    execisename: 'Leg Curl',
    videolink: 'https://www.muscleandstrength.com/exercises/leg-curl.html',
    targetmuscleid: 9,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content2:
      "The lying leg curl is a great exercise to isolate the hamstrings. Set up for the leg curl by selecting the weight you want to use on the stack and adjusting the padding to suit your leg length.\nLay face down on the machine. The padding should be positioned just above the back of your ankles. If it's higher than that, adjust the length.\nTense up the hamstrings by taking the weight slightly off the stack. This is the starting position for the exercise.\nSqueeze the hamstrings and curl the weight up as far as possible.\nSqueeze the hamstring hard, and then slowly lower the weight back to the starting position.\nRepeat for desired reps.",
    content3:
      "Common mistakes with the leg curl are; moving the weight up and down too fast and not using a full range of motion.\nAlways control the weight throughout the set. Don't use momentum to move the weight up, and don't allow it to drop back down quickly.\nAlways use a full range of motion by curling the weight up as far as possible and lowering it as far as possible without the weight dropping on the stack.",
    view: 3200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 66,
    execisename: 'Landmine RDL',
    videolink: 'https://www.youtube.com/watch?v=WZc-FuYDm1U',
    targetmuscleid: 9,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content1:
      'The landmine Romanian deadlift, also known as the landmine RDL, is a variation of the Romanian deadlift and an exercise used primarily to target the muscles of the hamstrings and glutes.\n\nThe RDL has long been thought of as the “leg” deadlift variation, despite all hip hinge movements primarily targeting the hamstrings. A smart option, to increase training frequency and work on the movement pattern, would be to perform RDLs on your leg day and another deadlift variation on your back or pull days.\n\nThe hip hinge is a crucial movement pattern, so it is important to find a variation that is comfortable for you to perform (if able), and work on it.\n\nThe landmine implement provides a somewhat fixed movement pattern to take some of the stress of the stabilizing muscle groups to help emphasize hamstring usage and limit potential injuries from other variations.\n\nThe landmine RDL is best utilized during your leg workouts and/or full body workouts.',
    content2:
      'Stand with a bar in between your legs and lay the bar in the notch of a v-bar with both hands on the handle.\nStand tall and begin the RDL by pushing your hips back and hinging forward until the bar is just below knee height.\nDrive through the whole foot and focus on pushing the floor away.\nReturn to the starting position and repeat for the desired number of repetitions.',
    content3:
      'Range of motion in the lift will largely be determined by an individual’s mobility as well as their ability to maintain a neutral spine. Standing on a box or bench is likely counterproductive as most won’t have the mobility to control that much range of motion effectively.\nNeck position is highly individual - Some prefer a neutral neck position (i.e. keeping the chin tucked throughout the lift) while others do well with looking slightly up. Here’s some factors to consider:\nIf you’re someone who is more globally extended (i.e. athletic background), then you will likely be able to keep a neutral position more effectively by packing the chin.\nOn the opposite end of the spectrum, if you tend to be more flexion dominant (especially in your thoracic spine - upper back) then it would behoove you to look up slightly as this will drive more extension.\nExperiment with each and see which one works best for your individual anatomy and biomechanics.\nYour weight will naturally shift to your heels as you hinge; however, it’s important that you keep the weight distributed over your whole foot and don’t allow the toes to rise. To combat this, you should focus on maintaining 3 points of contact: big toe, little toe, and heel.',
    view: 120000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 67,
    execisename: 'Seated Leg Curl',
    videolink: 'https://www.youtube.com/watch?v=3BWiLFc8Dbg',
    targetmuscleid: 9,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The seated leg curl is a variation of the leg curl and an exercise used to isolate the hamstrings.\n\nThe seated leg curl is best used as part of your leg workout or in a full body workout routine.\n',
    content2:
      'Select the desired weight, then adjust the pad so it rests comfortably above the back of the heels.\nTense up the hamstrings by taking the weight slightly off the stack. This is the starting position for the exercise.\nTake a deep breath, squeeze the hamstrings, and curl the weight up as far as possible while keeping the spine neutral.\nSlowly lower the weight back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'To keep tension on the hamstrings, keep the knees just shy of lockout.\nDon’t allow the back to arch, keep your hips pressed into the pad.\nKeep your low back flat against the pad throughout the movement.\nEnsure the head does not jut forward excessively.\nDon’t allow momentum to dictate the tempo of the exercise, control the movement throughout the entire range of motion.',
    view: 142000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 68,
    execisename: 'Exercise Ball Leg Curl',
    videolink: 'https://www.youtube.com/watch?v=OOUtV11bSa8',
    targetmuscleid: 9,
    execisetypeid: 1,
    equipmentid: 5,
    experiencelevelid: 1,
    content1:
      'The exercise ball hamstring curl is a leg curl variation used to build and strengthen the muscles of the hamstring complex.\n\nThe exercise ball hamstring curl provides several unique challenges. For example, it challenges the core to stabilize the spine as you contract your hamstrings to bring the exercise ball towards the body.\n\nAlso, as a bodyweight exercise that requires a lot of core stability, it is a self-limiting exercise. This means, you’re less likely to cheat as you would if trying to increase weight used in a weighted exercise. Instead, your goal should be to execute the exercise with perfect form before progressing to a more challenging single leg variation.',
    content2:
      'Setup in a supine position with your feet elevated on a physioball and your arms extended out to the sides.\nInitiate the movement by flexing your glutes and extending the hips until you have a straight line from your heels through your head.\nWhile keeping your hips extended, curl your heels towards your butt by flexing your hamstrings.\nSlowly lower back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'SHELC = Supine Hip Extension Leg Curl\nWhen extending the glutes, you shouldn’t feel any pressure or contraction through the lower back. If you find yourself getting a pump through your spinal erectors then you’re likely substituting spinal extension for hip extension.\nIf you can’t seem to feel your glutes activating, palpate the musculature with your hands and focus on pausing the movement at the peak of contraction.\nIf you want to improve activation of your abs and hamstrings within the movement, consider squeezing something like a foam roller or yoga block in between your knees. Keep the hips up but also press into the roller/block as you curl the legs in.\nDon’t allow the hips to swivel as you curl the legs in.',
    view: 50000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 69,
    execisename: 'Kettlebell Swing',
    videolink: 'https://www.youtube.com/watch?v=wMBWFIn4ddg',
    targetmuscleid: 9,
    execisetypeid: 1,
    equipmentid: 6,
    experiencelevelid: 1,
    content1:
      'The kettlebell swing is a total body movement that primarily works the muscles of the posterior chain, emphasizing the hamstring complex.\n\nThe kettlebell swing is an excellent starting point for those learning the hip hinge movement pattern. From there one can progress to more advanced hip hinges such as the deadlift.\n\nRegardless, the kettlebell swing is a great exercise to incorporate into your workout program for general health purposes.',
    content2:
      'Assume a hinged position with your knees slightly bent, both hands on the kettlebell handle, chin tucked, and weight centered over your foot.\nBegin the movement by hiking the kettlebell between your legs and keeping your spine neutral.\nDrive the kettlebell back to the starting position by extending the hips, pushing through the floor, and keeping the arms straight.\nRepeat the movement for the desired number of repetitions.',
    content3:
      'The swing should be a fairly explosive and snappy movement, the point is to generate hip extension as rapidly as possible followed by a subsequent contraction.\nImagine you’re trying to hike a football between your legs as the kettlebell descends.\nYour weight will obviously shift to your heels during the bottom portion of the exercise but you shouldn’t allow the toes to rise.\nYour chin should follow your chest, don’t worry about looking up in the bottom of the movement.\nKeep a soft bend in your knee and don’t allow your arches to collapse as you complete the movement.\nMake sure you wrap your thumbs around the handle and don’t utilize a false grip.',
    view: 85000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 70,
    execisename: 'Kneeling Posterior Hip Capsule Mobilization',
    videolink: 'https://www.youtube.com/watch?v=3VbcdlWbfGA',
    targetmuscleid: 10,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The kneeling posterior hip capsule mobilization drill is a form of active stretching and an exercise used to warm up the muscles of the hip flexors.\n\nHip flexors are often tight, especially among those who work desk jobs, so it is important to warm them up prior to performing heavy lower body movements that require mobility of the hips.',
    content2:
      'In a quadruped position, straighten one leg and shift your weight to the other knee in flexion.\nExternally rotate the hip by turning your shin inward.\nOscillate in small circles to determine areas of restriction and continue to breathe normally.\nRepeat for the assigned time or number of repetitions on both sides.',
    content3:
      'Depending upon the bony anatomy of your hips, you may need to keep your shin pointing directly down.\nYou should feel a large stretch at the top of your glute. If you can’t seem to “find” the stretch in your glutes, experiment with altering foot position and weight shift into the hip.',
    view: 4200,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 71,
    execisename: 'Fire Hydrant Circles',
    videolink: 'https://www.youtube.com/watch?v=i_skOyupPm0',
    targetmuscleid: 10,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The fire hydrant circle drill is a form of dynamic stretching often used to warm up the muscles of the hip flexors prior to heavy leg training.\n\nThe hip flexors can become quite tight throughout the day, especially if you work a desk job. Increasing mobility of the joint and its surrounding muscles is critical for injury preventions. This couldn’t be truer for heavily loaded exercises such as the barbell back squat.\n\nThe drill gets its name due to its resemblance of how dogs stereotypically react to seeing a fire hydrant.\n\n',
    content2:
      'In a quadruped position, ensure the hands are underneath the shoulders, the knees are underneath the hips, and the toes are tucked.\nWhile keeping the knee bent, lift one leg slightly off the floor and rotate the hip in progressively larger circles while keeping the knee and ankle joint locked in place.\nRotate for the assigned number of repetitions and then repeat on the opposite side.',
    content3:
      'Focus on keeping all of the movement relegated to the hip, don’t allow the spine to move to compensate a lack of hip mobility.\nPush into the floor with your hands and focus on keeping the head neutral.',
    view: 6000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 72,
    execisename: 'Cradle Walk',
    videolink: 'https://www.youtube.com/watch?v=3S-ssi14_fU',
    targetmuscleid: 10,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The cradle walk is a dynamic stretching exercise typically used as a warm up prior to a leg workout.\n\nThe cradle walk exercise/drill promotes mobility in the hips and provides a stability challenge as you stand on one leg to perform the exercise.\n\n',
    content2:
      'In a standing position, quarter squat and position one leg in a figure four position.\nReach down and grab the ankle and knee of the non plant leg using a pronated grip.\nPull the leg upwards while keeping the chest tall and extending the planted leg.\nRelease the leg and slowly lower back to the starting position.\nRepeat the process on the opposite leg for the desired number of repetitions.\n',
    content3:
      'Ensure you grab the ankle and NOT the sole of the foot. Pulling on the sole of the shoe will place unnecessary stress on the lateral portion of the ankle which is most susceptible to ankle sprains. Remember, ankle and knee - you shouldn’t be touching your shoe.\nAs you pull the leg upwards, ensure your chest does not round. Think about driving your head towards the ceiling as you lift.\nEnsure the back knee is extended as some have a tendency to keep a slight amount of flexion.\nYou may receive additional benefit from completing a calf raise as the pull the leg up during the movement. This can help to mobilize the ankle as you are improving hip mobility on the opposite leg.',
    view: 4000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 73,
    execisename: 'Cradle Walk to Forward Lunge',
    videolink: 'https://www.youtube.com/watch?v=3S-ssi14_fU',
    targetmuscleid: 10,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The cradle walk to forward lunge is a dynamic stretching exercises that helps warm up the muscles of the lower body while also increasing the mobility of the hips.\n\nThe exercise itself is a combination exercise which combines the cradle walk with a forward lunge. The cradle walk portion promotes increased mobility, and the forward lunge activates the muscles of the lower body.\n\nThis exercise is best used as a warm up on days you plan to perform lower body exercises such as squat variations.',
    content2:
      'In a standing position, quarter squat and position one leg in a figure four position.\nReach down and grab the ankle and knee of the non plant leg using a pronated grip.\nPull the leg upwards while keeping the chest tall and extending the planted leg.\nRelease the leg and step forward in a lunge position until the back knee touches the ground.\nRepeat the process on the opposite leg for the desired number of repetitions.',
    content3:
      'Ensure you grab the ankle and NOT the sole of the foot. Pulling on the sole of the shoe will place unnecessary stress on the lateral portion of the ankle which is most susceptible to ankle sprains. Remember, ankle and knee - you shouldn’t be touching your shoe.\nAs you pull the leg upwards, ensure your chest does not round. Think about driving your head towards the ceiling as you lift.\nEnsure the back knee is extended as some have a tendency to keep a slight amount of flexion.\nYou may receive additional benefit from completing a calf raise as you pull the leg up during the movement. This can help to mobilize the ankle as you are improving hip mobility on the opposite leg.\nDo your best to keep the front shin vertical during the lunge. If you struggle with forward knee travel, regress to split squats and other movements where you must maintain a half kneeling position.',
    view: 4700,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 74,
    execisename: 'IT Band Foam Rolling',
    videolink:
      'https://www.youtube.com/watch?v=MmeTBH7AScQ&embeds_euri=https%3A%2F%2Fwww.muscleandstrength.com%2F&feature=emb_imp_woyt',
    targetmuscleid: 11,
    execisetypeid: 3,
    equipmentid: 8,
    experiencelevelid: 1,
    content1:
      'Foam rolling your IT band is a great way to warm up and cool down for your workout, especially if you plan to perform lower body exercises that require the IT band to be more mobile.\n\nWhen you foam roll the IT band, or any muscle group for that matter, you alleviate some of the tension that is built up during the day and your workouts.',
    content2:
      'In a side lying position, place the foam roller directly underneath your thigh between your knee and hip.\nSupport your upper body using your forearm and free hand. Cross your top leg in front of the down leg and adjust pressure into the roller with your free hand and foot.\nSlowly roll up and down the length of the thigh for 20-30 seconds.\nRepeat on the other side.',
    content3:
      'The most important thing you can remember with any soft tissue work: KEEP BREATHING. Don’t hold your breath, you want to release tension, not generate it.\nIf you find a tender spot, pause for 5-6 seconds and focus on slow, deep breaths and try to relax.\nFoam rolling may be uncomfortable but that’s not an excuse to avoid it. It hurts because there may be physiological or neurological influences generating a pain response. The more you roll the better it’ll feel provided there’s no serious underlying mechanism.\nDon’t slump into the shoulder capsule, maintain an active upper body.\nIf you notice any burning, numbness, or tingling, keep moving past that area. It’s likely a nerve and pausing on it for any length of time would not be a good idea.\nIn order to shift more pressure into the bottom leg, stack the legs and utilize the weight of your body.',
    view: 5300,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 75,
    execisename: 'Lat Pull Down',
    videolink: 'https://www.youtube.com/watch?v=iKrKgWR9wbY',
    targetmuscleid: 12,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The lat pull down is an exercise used to build the muscles of the back. While the exercise will primarily target the lats, you will also notice a fair amount of bicep and middle back activation.\n\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\n\nThe lat pull down can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.',
    content2:
      'Attach a wide grip handle to the lat pulldown machine and assume a seated position.\nGrasp the handle with a pronated grip (double overhand) and initiate the movement by depressing the shoulder blade and then flexing the elbow while extending the shoulder.\nPull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control.\nRepeat for the desired number of repetitions.',
    content3:
      'Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through the spine.\nDon’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\nIf you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.\nAllow the shoulder to internally rotate and shrug slightly at the top of the movement. You will obviously reverse the movement and depress the shoulder blade before you pull with the arm.',
    view: 3500000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 76,
    execisename: 'Close Grip Lat Pull Down',
    videolink: 'https://www.youtube.com/watch?v=uAyrz5GTEHg',
    targetmuscleid: 12,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The close grip lat pull down is a variation of the lat pull down and an exercise used to build the muscles of the back. While the exercise will primarily target the lats, you will also notice a fair amount of bicep and middle back activation.\n\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\n\nThe close grip lat pull down can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.\n\n',
    content2:
      'Attach a wide grip handle to the lat pulldown machine and assume a seated position.\nGrasp the handle with a pronated grip (double underhand) at shoulder width.\nInitiate the movement by depressing the shoulder blades and then flexing the elbow while extending the shoulder.\nPull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control.\nRepeat for the desired number of repetitions.',
    content3:
      'Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through the spine.\nDon’t allow momentum to dictate the movement, control the weight throughout the entirety of each rep.\nIf you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.\nAllow the shoulder to internally rotate and shrug slightly at the top of the movement. You will obviously reverse the movement and depress the shoulder blade before you pull with the arm.',
    view: 1500000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 77,
    execisename: 'Wide Grip Pull Up',
    videolink: 'https://www.youtube.com/watch?v=5oxviYmdHCY',
    targetmuscleid: 12,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The wide grip pull up is a variation of the pull up and an exercise used to target the upper back muscles such as the latissimus dorsi.\n\nVertical pulling movements, such as the wide grip pull up, are foundational movements that should be included in your workout routines. So, once you’ve found a variation you like and feels comfortable to you, master it as it will benefit you from a strength and aesthetic standpoint.\n\nThe wide grip pull up can be incorporated into back workouts, pull workouts, upper body workouts, or full body workouts.',
    content2:
      'Using a pronated grip, grasp the pull bar with a wider than shoulder width grip.\nTake a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats.\nPull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions.',
    content3:
      'To decrease bicep involvement, use a false (thumbless grip).\nTry to keep a neutral head position (looking straight ahead or slightly up) as hyperextending the neck can lead to compensations throughout the spine.\nIf the bar is high enough, keep the legs straight and in front of the body in a hollow body position.\nAvoid falling into overextension of the lumbar spine by squeezing your glutes and bracing your abs.\nThe pullup is completed when the lats are fully flexed, don’t continue pulling and compensate with the pecs. When this occurs, the elbows will flare up behind the body, the shoulder will round forward, and you’ll begin to feel pressure in the front of your shoulders.\nA lifter’s segment length will determine whether or not they can actually get their chin over the bar, it’s not an absolute for everyone.\nLower to almost full extension of the elbow but avoid locking out completely as this can place excessive strain on the ligamentous structures within the elbow and shoulder.\nIf you can’t complete a single bodyweight pullup, start with slow negatives (add weight when these can be accomplished under control) or flexed arm hangs in the top position.\nDitch the straps and kips, neither one is necessary or recommended.',
    view: 2800000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 78,
    execisename: 'Chin Up ',
    videolink: 'https://www.youtube.com/watch?v=1EJ3A3rEtlo',
    targetmuscleid: 12,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The chin up is a variation of the pull up and an exercise used to build the muscles of the back - particularly the lats.\n\nThe chin up differs from the pull up in that the chin up allows for a greater degree of bicep involvement during the pulling movement.\n\nVertical pull exercises such as the chin up are critical to have in your workout program to build a well balanced and strong physique.\n\nThis exercise can be included in your back workouts, upper body workouts, pull workouts, or full body workouts.',
    content2:
      'Using a supinated grip, grasp the bar with a shoulder width grip.\nTake a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats.\nPull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions.',
    content3:
      'To decrease bicep involvement, use a false (thumbless grip).\nTry to keep a neutral head position (looking straight ahead or slightly up) as hyperextending the neck can lead to compensations throughout the spine.\nIf the bar is high enough, keep the legs straight and in front of the body.\nAvoid falling into overextension of the lumbar spine by squeezing your glutes and bracing your abs.\nThe chin-up is completed when the lats are fully flexed, don’t continue pulling and compensate with the pecs.\nImagine you’re trying to drive the elbows down as you pull.\nKeep your shoulders down and back, if they round forward at the top then you’ve pulled too far.\nA lifter’s segment length will determine whether or not they can actually get their chin over the bar, it’s not an absolute for everyone.\nLower to almost full extension of the elbow but avoid locking out completely as this can place excessive strain on the ligamentous structures within the elbow and shoulder.\nIf you can’t complete a single bodyweight chinup, start with slow negatives or flexed arm hangs at the top position.',
    view: 1500000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 79,
    execisename: 'Straight Arm Lat Pull Down',
    videolink: 'https://www.youtube.com/watch?v=gDtXrJWPdlY',
    targetmuscleid: 12,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The straight arm lat pull down is a variation of the lat pull down and an exercise used to build the muscles of the back. While the exercise will primarily target the lats, you will also notice a fair amount of bicep and middle back activation.\n\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\n\nThe straight arm lat pull down mimics the movement of a dumbbell pullover. The emphasis should be on feeling the entire range of motion, not the amount of weight you use on the exercise.\n\nThe straight arm lat pull down can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.\n\n',
    content2:
      'Attach a wide grip handle to a cable stack and assume a standing position.\nGrasp the handle with a pronated grip (double overhand) at roughly shoulder width and lean forward slightly by hinging at the hips.\nKeep the elbow slightly flexed and initiate the movement by depressing the shoulder blades and extending the shoulders.\nPull the bar to your thigh until the lats are fully contracted and then slowly lower under control.\nRepeat for the desired number of repetitions.',
    content3:
      'Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through the spine.\nIf you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.\nIf you can’t seem to feel your lats engaging, try to “screw your shoulders” into their sockets by pointing your elbows behind your body. Another cue that works exceptionally well is to “squeeze oranges in your armpits”.',
    view: 766000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 80,
    execisename: 'Lat Foam Rolling',
    videolink: 'https://www.youtube.com/watch?v=0HoTk7H6Gcs',
    targetmuscleid: 12,
    execisetypeid: 3,
    equipmentid: 8,
    experiencelevelid: 1,
    content1:
      'Foam rolling your lats is a great way to warm up and cool down for your workout, especially if you plan to perform upper body exercises that require the lats to be more mobile.\n\nWhen you foam roll the lats, or any muscle group for that matter, you alleviate some of the tension that is built up during the day and your workouts.',
    content2:
      'In a supine position, position the foam roller near your armpit at the base of your lat.\nRaise one arm overhead, pick your hips up off the floor, and roll from the base of your ribcage up into the armpit region.\nAdjust pressure into the roller by raising your hips higher or lower or applying more force through your free hand into the ground.\nSlowly roll up and down the length of the thoracic spine for 20-30 seconds.\nRepeat on the other side.',
    content3:
      'The most important thing you can remember with any soft tissue work: KEEP BREATHING. Don’t hold your breath, you want to release tension, not generate it.\nAvoid rolling the lumbar spine (lower back), try to stay centered over your ribcage.\nDo not allow yourself to fall into overextension, keep tension through the abs.\nIf you find a tender spot, pause for 5-6 seconds and focus on slow, deep breaths and try to relax.\nFoam rolling may be uncomfortable but that’s not an excuse to avoid it. It hurts because there may be physiological or neurological influences generating a pain response. The more you roll the better it’ll feel provided there’s no serious underlying mechanism.\nIf you notice any burning, numbness, or tingling, keep moving past that area. It’s likely a nerve and pausing on it for any length of time would not be a good idea.',
    view: 3500,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 81,
    execisename: 'Dumbbell Deadlift',
    videolink:
      'https://www.muscleandstrength.com/exercises/dumbbell-deadlift.html',
    targetmuscleid: 13,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'Set up for the dumbbell deadlift by choosing a pair of dumbbells and placing them on the floor in front of you.\nStand with your feet at around shoulder width apart and position the dumbbells on the floor so that they are on either side of your feet.\nReach down and grab the dumbbells with a neutral grip (palms facing inward) and drop your hips.Your hips should be in the best, most natural position for leverage so you may need to raise or lower them slightly.\nMake sure your eyes are looking ahead. Your body will follow your head so keep your head up and eyes forward!  \nBe sure to keep a straight back and never allow it to round. You are now in the starting position.\nFocus on standing up with the dumbbells - not pulling them from the floor, and lead with your head as you rise.\nDrive with your heals and explode upward (leading with your head) as you rise.\nAs the dumbbells rise to knee level, thrust your hips forward and contract your back by bringing your shoulder blades back.\nPause here for a moment and then reverse the movement by bending at the knees while slowly lowering the weight - keeping the dumbbells under strict control on the descent.\nReset your stance if necessary and repeat for desired reps.',
    content3:
      'The biggest mistake you can make is trying to perform deadlifts from an unnatural body position. Read and re-read the form tips presented in this guide and practice them with a moderate weight. Start the deadlift with the hips in a position of strength and maximal leverage. If you start the deadlift with your hips too high you will be at a mechanical disadvantage and will tax your lower back. Starting with your hips too low will also cause you to lose your leverage and power.\nIf you start the deadlift while looking down, there is a good chance your hips will lift up causing you to lose form and lift with your lower back. This is a very common deadlift mistake. Think about exploding your head upward while trying to stand erect. The body will follow the head.\nAs the weight gets heavy, lifting straps can be used to lift more weight than your grip strength would allow.',
    view: 1100000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 82,
    execisename: 'Superman',
    videolink: 'https://www.youtube.com/watch?v=D07urmRplHQ',
    targetmuscleid: 13,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The superman is an exercise used to isolate the muscles of the lower back.\n\nOne can risk injury through over extending the spine with this exercise.\n\nThere are better ways to target your back (indirectly) to strengthen your lower back and build lean muscle mass.\n\n',
    content2:
      'Set up in a prone position with your hands by your side (or behind your back) and your feet together.\nExtend your lower back by contracting your spinal erectors.\nSlowly lower back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'Make sure to keep some tension through your abs and glutes as you complete the movement. If you feeling a pressure or pinching sensation within one spinal vertebrae directly then you are dealing with an issue of segmental extension (usually at your thoracolumbar junction: T12-L1) versus global extension.\nThis movement is fairly outdated and there are much better options given the high level of compression that is generated within the spine itself during the course of the movement.',
    view: 46000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 83,
    execisename: 'Smith Machine Deadlift',
    videolink:
      'https://www.muscleandstrength.com/exercises/smith-machine-deadlift.html',
    targetmuscleid: 13,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 2,
    content2:
      'Set up for the smith machine deadlift by loading the appropriate amount of weight onto the smith machine and setting the bar to the lowest setting.\nStand in front of the bar with your feet around shoulder width apart and halfway under the loaded bar. Your toes should be pointed straight ahead or slightly outward. Do what is comfortable for you.\nReach down and grab the bar with both hands using an overhand grip just outside of shoulder width. You can use an alternating grip (one over/one under) to help you lift more weight. Lifting straps can also be used to help lift more weight.\nDrop your hips until your shins are touching the barbell. Your hips should be in the best, most natural position for leverage so you may need to raise or lower them slightly.\nMake sure your eyes are looking ahead. Your body will follow your head so keep your head up and eyes forward!  \nBe sure to keep a straight back and never allow it to round. You are now in the starting position.\nFocus on standing up with the bar - not pulling the bar from the floor, and lead with your head as you rise.\nDrive with your heels and explode upward (leading with your head) as you rise.\nAs the bar rises above your knees, thrust your hips forward and contract your back by bringing your shoulder blades back.\nPause here for a moment and then reverse the movement by bending at the knees while slowly lowering the weight - keeping it under strict control on the descent.\nReset your stance if necessary and repeat for desired reps.',
    content3:
      'When positioning your feet under the bar (with the bar over the halfway point from your heels to toes) it can be difficult to gauge if your foot position is correct, so ask another lifter for guidance or record your deadlift setup.\nUse an alternating grip if the weight gets too heavy. Using lifting straps will also allow you to lift heavier than your grip strength will allow.\nThe biggest mistake you can make is trying to perform deadlifts from an unnatural body position. Read and re-read the form tips presented in this guide and practice them with a moderate weight. Start the deadlift with the hips in a position of strength and maximal leverage.\nIf you start the deadlift with your hips too high you will be at a mechanical disadvantage and will tax your lower back. Starting with your hips too low will also cause you to lose your leverage and power. If you start the deadlift while looking down, there is a good chance your hips will lift causing you to lose form and lift with your lower back. This is a very common deadlift mistake. Think about exploding your head upward while trying to stand erect. The body will follow the head.',
    view: 113000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 84,
    execisename: '90/90 Hip Crossover',
    videolink: 'https://www.youtube.com/watch?v=rPqdiiX2aZA',
    targetmuscleid: 13,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The 90/90 hip crossover drill is a great warm up exercise to perform prior to your workouts.\n\nThe 90/90 hip crossover drill will help relieve tension in the back muscles while also opening up the glutes and shoulders. It can also help increase mobility in the hips and slightly challenge the core.\n',
    content2:
      'In a supine position, lift your legs so that your hips and knees are at a 90 degree angle and ensure that your lower back is flat on the floor.\nReach your arms out to the side for support and slowly rotate your legs side to side.\nKeep your head neutral and focus on controlling the rotation by utilizing your abdominals.\nRepeat for the desired number of repetitions.',
    content3:
      'Ensure the feet don’t drop towards your butt as you get fatigued.\nKeep the lower back as flat as possible against the floor and focus on feeling the movement in the upper back.\nDon’t rotate the head as the legs move.',
    view: 9800,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 85,
    execisename: 'Rollover Into V-Sits',
    videolink: 'https://www.youtube.com/watch?v=zWlfhnkJdNk',
    targetmuscleid: 13,
    execisetypeid: 2,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The rollovers into V-sits drill is a form of dynamic stretching that warms up nearly every muscle group in the body.\n\nDynamic stretching is critical prior to performing your workouts as it allows you to activate your central nervous system and engage the muscle groups you’ll use later in your workout. Incorporating them into your warm up routine will help you get better results and avoid injury.',
    content2:
      'In a seated position, roll backwards while tucking your chin and allow your legs to travel over your head with your arms outstretched to the sides.\nOnce your toes touch the floor (if possible), roll forward and spread your legs into a straddle position.\nReach forward as you roll forward and get a dynamic stretch through hamstrings and spinal erectors.\nRepeat for the desired number of repetitions.',
    content3:
      'Focus on keeping your spine tall in the bottom position and don’t allow the weight to pull you forward.\nIdeally you should be able to sit comfortably in the bottom position and open up the hips and ankles as you rock side to side.',
    view: 6000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 86,
    execisename: 'One Arm Dumbbell Row',
    videolink: 'https://www.youtube.com/watch?v=YZgVEy6cmaY',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The one arm dumbbell row is a variation of the dumbbell row and an exercise used to build back muscle and strength.\n\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\n\nRows are a foundational movement pattern and are very important to train for balanced muscle growth and strength. So, experiment until you find a rowing variation that you enjoy and work on it.\n\nThe one arm dumbbell row can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.',
    content2:
      'Assume a standing position while holding a dumbbell in one hand with a neutral grip.\nHinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbow behind the body while retracting the shoulder blade.\nPull the dumbbell towards your body until the elbow is at (or just past) the midline and then slowly lower the dumbbell back to the starting position under control.\nRepeat for the desired number of repetitions on both sides.',
    content3:
      'Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\nFight the urge to use your opposing arm to brace against your leg or any other implement.\nKeep some tone through your abdominals as you pull the dumbbell into your body to ensure you don’t arch excessively through your spine.\nDon’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\nIf you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.',
    view: 6400000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 87,
    execisename: 'Bent Over Dumbbell Row',
    videolink: 'https://www.youtube.com/watch?v=DhewkuU_95s',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The dumbbell row is a variation of the bent over row and an exercise used to build back muscle and strength.\n\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\n\nRows are a foundational movement pattern and are very important to train for balanced muscle growth and strength. So, experiment until you find a rowing variation that you enjoy and work on it.\n\nThe dumbbell row can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.\n\n',
    content2:
      'Assume a standing position while holding a dumbbell in each hand with a neutral grip.\nHinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\nPull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\nRepeat for the desired number of repetitions.\n',
    content3:
      'Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\nKeep some tone through your abdominals as you pull the dumbbells into your body to ensure you don’t arch excessively through your spine.\nDon’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\nIf you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.',
    view: 3800000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 88,
    execisename: 'Bent Over Row',
    videolink: 'https://www.youtube.com/watch?v=DhewkuU_95s',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content1:
      'The bent over row is a back day staple exercise and is considered one of the best muscle building back building exercises you can do.\n\nSometimes referred to as the barbell row, the bent over row is a staple movement in most muscle building workouts. Those looking to build muscle utilize the bent over row to target their back, bicep and core muscle. Those in powerlifting and strength circles perform bent over rows to increase their strength on the big 3 movements.\n\nThe bent over row is typically used to build and strengthen the muscles of the upper back (latissimus dorsi, rhomboids, and trapezius). However, it requires assistance from muscles of the low back, core, and arms to perform a bent over row correctly.\n\nThere are several variations of the bent over row one can and should perform.',
    content2:
      'Assume a standing position while holding the bar using a double overhand grip.\nHinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\nPull the bar towards your belly button until it touches your body and then slowly lower the bar back to the starting position under control.\nRepeat for the desired number of repetitions.',
    content3:
      'Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\nKeep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\nDon’t allow momentum to dictate the movement, control the bar throughout the entirety of each rep.\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.',
    view: 6200000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 89,
    execisename: 'Seated Cable Row',
    videolink: 'https://www.muscleandstrength.com/exercises/seated-row.html',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content2:
      'Set the appropriate weight on the weight stack and attach a close-grip bar or V-bar to the seated row machine.\nGrasp the bar with a neutral grip (palms facing in).\nKeeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. You should be sitting straight upright with your shoulders back. This is the starting position.\nKeeping your body in position, pull the handle into your stomach.\nPull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position.\nRepeat for desired reps',
    content3:
      "Your back must remain straight at all times. Your torso should be kept still throughout the entire set.\nDon't let your shoulders hunch over when your arms are extended.\nUse the back muscles to move the weight - do not lean forward and use momentum to swing the weight back.\nPausing and squeezing at the top of the movement for a 1-2 count will increase intensity and results.",
    view: 4000000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 90,
    execisename: 'Tripod Dumbbell Row',
    videolink: 'https://www.youtube.com/watch?v=78Z2mk9LQoI',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The tripod dumbbell row is a variation of the dumbbell bent over row and an exercise one would typically use when trying to target the muscles of the back.\n\nThe tripod dumbbell row requires more core stability than other, more supported dumbbell row variations. The tripod dumbbell row also allows one to work the muscles of the back unilaterally, which can lead to a more symmetrical physique and balanced strength.',
    content2:
      'Assume a kneeling position on the bench with your ipsilateral (i.e. same side) hand braced against the bench.\nHold a dumbbell in the opposite hand with a neutral grip.\nBegin the movement by driving the elbow behind the body while retracting the shoulder blade.\nPull the dumbbell towards your body until the elbow is at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\nRepeat for the desired number of repetitions on both sides.',
    content3:
      'Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\nKeep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\nDon’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\nIf you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint',
    view: 583000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 91,
    execisename: 'Neutral Grip Chest Supported Dumbbell Row',
    videolink: 'https://www.youtube.com/watch?v=oKNjFM1bxAs',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The chest supported dumbbell row is a variation of the dumbbell bent over row and an exercise used to build back muscle and strength.\n\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\n\nRows are a foundational movement pattern and are very important to train for balanced muscle growth and strength. So, experiment until you find a rowing variation that you enjoy and work on it.\n\nThe chest supported dumbbell row can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.',
    content2:
      'Position an adjustable incline bench at 45 degrees and lie prone on the bench.\nGrab a dumbbell in each hand utilizing a neutral grip and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\nPull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\nRepeat for the desired number of repetitions.',
    content3:
      'Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\nKeep some tone through your abdominals as you pull the dumbbells into your body to ensure you don’t arch excessively through your spine.\nDon’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\nIf you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\nAs you pull the dumbbells towards your body, don’t hyperextend the thoracic spine by pull your entire upper torso off the bench. You can extend slightly but don’t make it too drastic.\nSome feel more comfortable with bending their knees and positioning them on the bottom pad whereas if you have longer legs than you may want to extend your legs and plant your feet flat on the floor.\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.',
    view: 648000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 92,
    execisename: 'T-Bar Row',
    videolink: 'https://www.youtube.com/watch?v=gJSov9rHIf0',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The T-Bar row, also known as the close grip barbell row, is an excellent exercise to use if you are trying to target your upper back.\n\nA variation of the bent over row, the T-bar row allows one to utilize a more neutral grip which can help alleviate some of the tension placed on the shoulder joint',
    content2:
      'Assume a standing position with the bar positioned directly between your legs.\nUtilize a v-grip handle and place the bar directly in the notch of the v.\nHinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\nPull the bar towards your body until the plates touch your chest and then slowly lower the handle back to the starting position under control.\nRepeat for the desired number of repetitions.',
    content3:
      'Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\nKeep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\nDon’t allow momentum to dictate the movement, control the bar throughout the entirety of each rep.\nDon’t allow the head to jut forward as you pull.\nSimilarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.',
    view: 562000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 93,
    execisename: 'High Inverted Row',
    videolink:
      'https://www.muscleandstrength.com/exercises/high-inverted-row.html',
    targetmuscleid: 14,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'The high inverted row is a variation of the inverted row.\n\nSet up for the high inverted row by lowering the bar on the smith machine and positioning yourself under the bar.\nGrasp the bar with arms slightly wider than shoulder width.\nPut your feet out in front of you so that your upper chest is directly under the bar.\nKeep your body straight and pull yourself up as far as possible. The bar should come to around upper chest/neck height.\nPause, and then slowly lower yourself back to the starting position.',
    content3:
      "Keep your body straight throughout the exercise.\nPause at the top of the movement and squeeze your shoulder blades together.\nLower yourself slowly - don't allow your body to drop",
    view: 378000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 94,
    execisename: 'Neck Tiger Tail',
    videolink: 'https://www.youtube.com/watch?v=C8hJmUXlogA',
    targetmuscleid: 15,
    execisetypeid: 3,
    equipmentid: 9,
    experiencelevelid: 1,
    content1:
      'The tiger tail is an implement used to perform a form of self myo-fascial release.\n\nUsing the tiger tail on the neck is a great way to warm up and cool down for your workout.\n\nWhen you perform SMR on your neck, or any muscle group for that matter, you alleviate some of the tension that is built up during the day and your workouts.\n\n',
    content2:
      'While in a seated position, position the tiger tail at the base of the neck with one hand on either handle.\nAdjust pressure into neck by applying more or less force through the hands.\nSlowly roll up and down the length of one side of the neck for 20-30 seconds.\nRepeat on the other side.',
    content3:
      'The most important thing you can remember with any soft tissue work: KEEP BREATHING. Don’t hold your breath, you want to release tension, not generate it.\nIf you find a tender spot, pause for 5-6 seconds and focus on slow, deep breaths and try to relax.\nIn addition to some deep breathing, pause for a second and take the joint through flexion and extension. This a method of active release known as “tack and floss”.\nFoam/stick rolling may be uncomfortable but that’s not an excuse to avoid it. It hurts because there may be physiological or neurological influences generating a pain response. The more you roll the better it’ll feel provided there’s no serious underlying mechanism.\nHOWEVER, if you notice any burning, numbness, or tingling, keep moving past that area. It’s likely a nerve and pausing on it for any length of time would not be a good idea.',
    view: 10500,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 95,
    execisename: 'Side Crunch',
    videolink: 'https://www.youtube.com/watch?v=dRhloYXeE3E',
    targetmuscleid: 16,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The side crunch, aka the oblique crunch, is a variation of the abdominal crunch.\n\nThe exercise is used to isolate the obliques - which is critical in building a complete mid-section.',
    content2:
      'Lay supine in a relaxed position with your knees stacked to one side.\nPlace your contralateral hand behind your head for support and use your free hand to palpate your abdominals.\nInitiate the movement by squeezing your abs to raise your torso off the floor, slowly lower yourself back to the starting position and complete the assigned number of repetitions.\nRepeat on the opposite side.',
    content3:
      'Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\nIf your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\nAvoid putting the hands behind the head as this can lead to excess strain upon the neck.',
    view: 400000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 96,
    execisename: 'Wood Chop',
    videolink: 'https://www.youtube.com/watch?v=0VWnOjUO7ks',
    targetmuscleid: 16,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The standing cable chop is an exercise used to target the muscles of the abdominal complex. In particular, the standing cable chop primarily works the obliques.\n\nThe standing cable chop is also commonly referred to as the wood chop as when you perform the exercise, you look as though you’re slinging an axe to chop a piece of wood.',
    content2:
      'Assume an athletic position with your feet just outside of shoulder width and attach a rope to a cable stack overhead.\nPosition the inside leg in hip flexion and set up with both hands grasping the rope at roughly shoulder width apart.\nExhale, rotate the rope across your body, and chop to the down knee.\nReturn to the starting position, repeat for the desired number of repetitions, and then switch sides.',
    content3:
      'Crunch slightly and ensure that you exhale as you rotate.\nYou can also utilize a bar attachment if you don’t have access to a rope but this variation will require slightly different cueing - extend the bottom elbow, then horizontally press the bar to extension with the top elbow as you rotate.\nSet up with the inside knee up relative to the cable stack.\nAlways chop to the down leg.\nThe rotation should be a crossbody pattern, think about moving diagonally rather than up and down.',
    view: 190000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 97,
    execisename: 'Side Plank',
    videolink: 'https://www.youtube.com/watch?v=LYRJgW0WuGE',
    targetmuscleid: 16,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The side plank with hip dip is a variation of the side plank and an exercise used to strengthen the obliques.\n\nThe side plank with hip dip adds an additional range of motion to provide a slight contraction of the obliques while performing the side plank.',
    content2:
      'Assume a side lying position with your forearm resting on the floor.\nLift your hips and form a straight line from your shoulders through your ankles.\nSlowly allow the hips to dip and get close to touching the floor.\nReturn back to the starting position and repeat for the desired number of repetitions on both sides.\n',
    content3:
      'Ensure the upper arm and torso maintain a 90 degree angle.\nAs the hips dip, don’t allow them to shoot backwards and take tension off the core.\nDo not allow the lower back to arch at any point during the set. If it does, terminate the set, rest, and then repeat. The goal of any static abdominal work is to learn to maintain tension through the torso with a neutral spinal position. If you continue the set in a poor position then you are merely reinforcing dysfunction and losing the potential benefit. Think quality, not just quantity.\nIf you find you can’t maintain a neutral spinal position during the exercise then choose other variations such as wall press heel tap and hip extension which provide more stability and shorten the lever arm.\nPress your elbow into the floor to help engage your serratus anterior. Ensure that you’re not sagging into the shoulder and putting excess stress upon your ligamentous structures.\nDo not hold your breath, you shouldn’t be using respiration to compensate for a lack of stability. Learn how to move while maintaining position without having to rely upon your breath.',
    view: 13700,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 98,
    execisename: 'Tall Kneeling Cable Lift',
    videolink: 'https://www.youtube.com/watch?v=I3wWVJkEBfo',
    targetmuscleid: 16,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The tall kneeling cable lift is a variation of the wood chop and an exercise used to target the muscles of the abdominals. Primarily, the tall kneeling cable lift targets the muscles of the obliques.\n\nTall kneeling variations of standing exercises, such as the tall kneeling cable lift, can be used as a way to progress to the standing variation by helping you develop the prerequisite core stability needed for standing variations.',
    content2:
      'Assume a tall kneeling position and attach a rope to a cable stack at the lowest possible position.\nPosition the inside knee down and set up with both hands grasping the ends of the rope.\nPull the rope to chest height and then press diagonally overhead.\nReturn to the starting position, repeat for the desired number of repetitions, and then switch sides.',
    content3:
      'Keep the back toes tucked and ensure that your don’t hyperextend your spine as you raise the rope overhead.\nYou can also utilize a bar attachment if you don’t have access to a rope but this variation will require slightly different cueing - extend the bottom elbow, then horizontally press the bar to extension with the top elbow as you rotate.\nKeep the hips forward by maintaining tension in the glutes during the movement.\nThe rotation should be a crossbody pattern, think about moving diagonally rather than up and down.',
    view: 4700,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 99,
    execisename: 'Off Bench Oblique Hold',
    videolink: 'https://www.youtube.com/watch?v=0wCrRo7r2LQ',
    targetmuscleid: 16,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content1:
      'The off bench oblique hold is a variation of the side plank and an exercise used to strengthen the obliques.\n\nThe off bench oblique hold works the oblique through static tension known as an isometric contraction.\n\nThe exercise can be performed with or without the weighted pulse.',
    content2:
      'Setup in a staggered stance with your bottom leg forward and hook your feet underneath a secure bench.\nHold a plate at chest level and press horizontally to extension as you exhale.\nReturn to the starting position and repeat for the desired number of repetitions.',
    content3:
      'Ensure your hips are resting on the end of the pad for the bench.\nYou can also use a GHR for this variation if you don’t have access to a normal bench with foot hold.\nEnsure the neck stays packed and doesn’t jut forward as you press the plate to extension.\nDo not let the hips rotate as you press the plate to extension. Similarly, check your setup and ensure that you’re not excessively rotated one way or another before you even move the plate.',
    view: 5600,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 100,
    execisename: 'Palmar Fascia',
    videolink: 'https://www.youtube.com/watch?v=uRd7fmEyjQc',
    targetmuscleid: 17,
    execisetypeid: 3,
    equipmentid: 5,
    experiencelevelid: 2,
    content1:
      'Using a lacrosse ball to perform smr on your palmar fascia is a great way to warm up and cool down for your workout, especially if you plan to perform upper body exercises that require the hands to be more mobile.\n\nWhen you perform smr on the palmar fascia, or any muscle group for that matter, you alleviate some of the tension that is built up during the day and your workouts.\n\n',
    content2:
      'Place the lacrosse ball directly underneath the palm of your hand and apply pressure via your bodyweight.\nSlowly roll the palmar region for 20-30 seconds.\nRepeat on the other side.',
    content3:
      'The most important thing you can remember with any soft tissue work: KEEP BREATHING. Don’t hold your breath, you want to release tension, not generate it.\nDo not allow yourself to fall into overextension, keep tension through the abs.\nIf you find a tender spot, pause for 5-6 seconds and focus on slow, deep breaths and try to relax.\nPerforming SMR may be uncomfortable but that’s not an excuse to avoid it. It hurts because there may be physiological or neurological influences generating a pain response. The more you roll the better it’ll feel provided there’s no serious underlying mechanism.\nIf you notice any burning, numbness, or tingling, keep moving past that area. It’s likely a nerve and pausing on it for any length of time would not be a good idea.\nIf you find a sensitive spot, pause for a second and take the joint through flexion and extension. This a method of active release known as “tack and floss”.',
    view: 3700,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 101,
    execisename: 'Plantar Fascia Lacrosse Ball',
    videolink: 'https://www.youtube.com/watch?v=C7yZFUj1LC8',
    targetmuscleid: 18,
    execisetypeid: 3,
    equipmentid: 5,
    experiencelevelid: 2,
    content1:
      'Using a lacrosse ball to perform smr on your plantar fascia is a great way to warm up and cool down for your workout, especially if you plan to perform lower body exercises that require the feet to be more mobile.\n\nWhen you perform smr on the plantar fascia, or any muscle group for that matter, you alleviate some of the tension that is built up during the day and your workouts.',
    content2:
      'In a standing position, place the lacrosse ball directly underneath the bottom of your foot and apply pressure via your bodyweight.\nSlowly roll the plantar region for 20-30 seconds.\nRepeat on the other side.',
    content3:
      'The most important thing you can remember with any soft tissue work: KEEP BREATHING. Don’t hold your breath, you want to release tension, not generate it.\nUse your free hand to stabilize yourself while holding onto something.\nDo not allow yourself to fall into overextension, keep tension through the abs.\nIf you find a tender spot, pause for 5-6 seconds and focus on slow, deep breaths and try to relax.\nDo not roll the front of the shoulder directly as this can cause irritation to the biceps tendon and anterior capsule.\nPerforming SMR may be uncomfortable but that’s not an excuse to avoid it. It hurts because there may be physiological or neurological influences generating a pain response. The more you roll the better it’ll feel provided there’s no serious underlying mechanism.\nIf you notice any burning, numbness, or tingling, keep moving past that area. It’s likely a nerve and pausing on it for any length of time would not be a good idea.\nIf you find a sensitive spot, pause for a second and take the joint through flexion and extension. This a method of active release known as “tack and floss”.',
    view: 14800,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 102,
    execisename: 'Barbell Back Squat',
    videolink: 'https://www.youtube.com/watch?v=R2dMsNhN3DE',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content1:
      'The squat is the king of all exercises, working over 256 muscles in one movement! From bodybuilders to powerlifters to competitive athletes, the squat is a staple compound exercise and should be in every workout plan.\n\nFor powerlifters, it is known as one of the “big three” lifts which includes the squat, deadlift, and bench press. For athletes, having an explosive squat is a good indicator for on field/court performance. And for bodybuilders, the squat is a compound exercise that targets nearly every muscle of your lower body and core.\n\nThe squat directly targets the muscles of the quads, but also involves the hamstrings, glutes, back, and core as well as muscles of the shoulders and arms to a lesser degree.\n\nNot everyone is built to perform the traditional barbell back squat and it can result in some pain for certain individuals. Over the years, several squatting variations have been developed to help everyone be able to train this critical movement pattern safely.',
    content2:
      "Set up for the exercise by setting the barbell to just below shoulder height and loading the weight you want to use.\nStand under the bar with your feet at about shoulder width apart.\nPosition the bar so that it is resting on the muscles on the top of your back, not on the back of your neck. The bar should feel comfortable. If it doesn't, try adding some padding to the bar.\nNow take your hands over the back and grip the bar with a wide grip for stability.\nYou should now bend at the knees and straighten your back in preparation to take the weight off the rack.\nKeeping your back straight and eyes up, push up through the legs and take the weight off the rack.\nTake a small step back and stabilize yourself.\nKeeping your eyes facing forward slowly lower your body down. Don't lean forward as you come down. Your buttocks should come out and drop straight down.\nSquat down until your thighs are parallel with the floor, and then slowly raise your body back up by pushing through your heels.\nDo not lock the knees out when you stand up, and then repeat the movement.",
    content3:
      "The are many mistakes that can be made when squatting, so it's important that you have your technique down before you attempt squatting heavy weights. If you are squatting correctly, you should not feel pain in your lower back. Lower back pain is usually a sign that you are not using correct form and/or your core is weak.  \n\nCommon mistakes when squatting:\n\nRounding the lower back: It's crucially important that you keep a straight back when you squat! You can ensure your back is straight by keeping your eyes facing forward, chest out, shoulder blades back, and back arched. Keep your core muscles tensed throughout the movement to help hold your back in place.\nPushing from the balls of your feet: This puts unnecessary strain on joints and tendons. Always push up through your heels. Curling up your toes can help you get the technique right.\nLeaning forward: This happens when your hips move up faster than your shoulders. To prevent this keep the rep timing slow and controlled and stick your buttocks out as you go down.\nKnees come too far forward: When you squat down, your hips should be dropping straight down, not coming forward. Using a light weight, perfect your form standing side on to a mirror. Your knees should never track out and over your toes.\nNot squatting deep enough: Using squats to their full potential requires squatting down at least until your thighs are around parallel to the floor.\nKnees in or out: Don't point your knees in or out when you're lowering or pushing the weight. This puts unnecessary strain on the knee joints.\nLooking down: As soon as you look down your back rounds, simple as that.",
    view: 3900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 103,
    execisename: 'Dumbbell Goblet Squat',
    videolink: 'https://www.youtube.com/watch?v=5Y3KW5rWMh4',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The dumbbell goblet squat is a variation of the squat and an exercise used to build the muscles of the legs. In particular, the dumbbell goblet squat will place a lot of emphasis on the quads.\n\nThe squat movement pattern is a foundational movement and should be performed by most capable individuals throughout their lives. So, it is important to find a variation that is comfortable for you to perform, and continuously work on it.\n\nYou can include the dumbbell goblet squat in your leg workouts or full body workouts.',
    content2:
      'Select a dumbbell and position it at chest height with one hand under each edge of the dumbbell.\nTake a deep breath and descend by simultaneously pushing the hips back and bending the knees.\nOnce your thighs reach parallel with the floor, begin to reverse the movement.\nKeep your abs braced and drive your feet through the floor.\nDrive back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'If you struggle with squatting with a barbell then this is the best version for learning how to squat in a vertical fashion.\nToe angle is highly individual - experiment to see what feels best for you.\nExperiment with a “false” (i.e. thumbless) grip as this helps to eliminate elbow and wrist issues in some folks.\nDrive through the whole foot - you want 3 points of contact: big toe, little toe, and heel.\nImagine you’re trying to drop your back pockets straight towards your heels. Down, not back.\nSome forward translation of the knees over the toes is alright provided that the knees don’t deviate excessively inward or outward. Those with longer femurs will have to allow their knees to come farther forward if they want to remain upright.\nNeck position is highly individual as well - some prefer a neutral neck position (i.e. keeping the chin tucked throughout the lift) while others do well with looking straight ahead. Experiment with each and see which one works best for your anatomy.\nDon’t push the knees out excessively but ensure they track roughly over or slightly outside the 2nd toe.',
    view: 1700000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 104,
    execisename: 'Leg Extension',
    videolink: 'https://www.youtube.com/watch?v=0fl1RRgJ83I',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The seated leg extension is an isolation exercise and one used to target the muscles of the quads.\n\nThis exercise can be particularly hard on the knees. So, for those with prior knee issues, it may be beneficial to stick with other movements, preferably compound, to target your quads.\n\nThe leg extension is a great exercise for quad development and may be beneficial to include in your workout routines if your goals are more aesthetics-driven.\n\nThe leg extension can be utilized in both leg workouts and full body workouts.',
    content2:
      'Select the desired resistance on the weight stack and insert the pin.\nAdjust the seat so that the knees are directly in line with the axis of the machine.\nSit down and position your shins behind the pad at the base of the machine.\nTake a deep breath and extend your legs as you flex your quadriceps.\nAs you lock out the knees, exhale to complete the repetition.\nSlowly lower your feet back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'Ensure the axis of rotation for the knee directly matches that of the machine. In other words, the point of rotation for the machine should be in line with your knee joint itself. If the knee is positioned too far in front or behind the axis of rotation, there will be excessive stress added to the joint which could cause significant injury.\nTypically extensions should not be done excessively heavy due to the lack of hamstring co-contraction with the quads. When one occurs in isolation it could present an injury risk to the knee if done with excessive weight.\nPointing the toes can help to enhance mind muscle connection.',
    view: 2300000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 105,
    execisename: 'Leg Press',
    videolink: 'https://www.youtube.com/watch?v=sEM_zo9w2ss',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The leg press is a variation of the squat and an exercise used to target the muscles of the leg.\n\nOne can utilize the leg press to target both the quads and the hamstring muscle, depending on which portion of the foot they push through.\n\nThe leg press is commonly thought of as a machine variation of the barbell back squat. The mechanics are fairly similar, however, the leg press does not completely mimic the movement pattern of the squat. Nor does it work all of the muscle groups that the squat does.\n\nThe leg press is best used as an accessory movement to the squat, or as a primary movement in gyms which lack the necessary equipment to train the squat movement pattern.',
    content2:
      'Load the machine with the desired weight and take a seat.\nSit down and position your feet on the sled with a shoulder width stance.\nTake a deep breath, extend your legs, and unlock the safeties.\nLower the weight under control until the legs are roughly 45 degrees or slightly below.\nDrive the weight back to the starting position by extending the knees but don’t forcefully lockout.\nRepeat for the desired number of repetitions.',
    content3:
      'To keep tension on the quads, keep the knees just shy of lockout.\nTo emphasize the glutes more, push through the heels.\nTo emphasize the quads more, push through the balls of the feet.\nDon’t allow the hips to posteriorly tilt and roll off the pad.\nKeep your low back flat against the pad throughout the movement.\nMaintain a neutral head position by not looking up or down excessively.\nSelf spotting is possible by simply applying pressure to the knees with the hands. Use only when necessary.\nToe angle is individual and will depend upon each individual’s hip anatomy and ankle mobility - experiment and adjust based upon feel.',
    view: 2300000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 106,
    execisename: 'Dumbbell Rear Lunge',
    videolink: 'https://www.youtube.com/watch?v=Ix9QZ3Pnneo',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 2,
    content1:
      'The dumbbell reverse lunge is a dumbbell lunge variation and an exercise used to target the muscles of the quads, as well as the rest of the muscles of the leg.\n\nThe lunge is a foundational movement pattern that every lifter should strive to master.',
    content2:
      'Set up with your feet shoulder width apart and hold a dumbbell in each hand by your sides.\nStep back with one leg and allow both knees to bend simultaneously.\nDescend until the back knee touches the floor.\nDrive through the front foot and extend the knee as you stand up fully and return to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Reverse lunges are a more advanced progression and should only be utilized once one has the requisite hip and core stability. In general, a proper single leg progression scheme might look like this:\nStep Up\nSplit Squat > Front foot elevated\nReverse Lunge > Front foot elevated\nSingle Leg Squat to Bench\nLateral Lunge\nBulgarian/Rear Foot Elevated Split Squat (RFESS)\nSingle Leg Squat From Bench\nWalking Lunge\nForward Lunge\nSingle Leg Skater Squat\nPistol Squat\nDon’t rush the progression scheme, earn the right to use every exercise and don’t neglect any of them.\nWhen you go to push back to the starting position, fight the urge to lead the movement with your shoulders by hyperextending at your spine. Instead, look to drive the movement via force from your lower body.\nIn the bottom of the movement both of your legs should be at 90 degree angles at the knees.\nKeep in mind that with any sort of lunge or split squat pattern, if you want to emphasize the quads, focus on taking a slightly smaller step and drive  up through the ball of the foot.\nIf you want to emphasize the glutes and hamstrings during any sort of lunge or split squat pattern, focus on taking a slightly larger step and drive up through the heel of the foot.',
    view: 630000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 107,
    execisename: 'Front Squat',
    videolink: 'https://www.youtube.com/watch?v=9xAkoz95IFE',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content1:
      'The front squat is a variation of the squat and an exercise used to build the muscles of the legs. In particular, the front squat will place a lot of emphasis on the quads.\n\nThe squat movement pattern is a foundational movement and should be performed by most capable individuals throughout their lives. So, it is important to find a variation that is comfortable for you to perform, and continuously work on it.\n\nYou can include the front squat in your leg workouts or full body workouts.',
    content2:
      'Position the safety stops at roughly waist height and then place the bar just underneath shoulder height.\nPosition the hands just outside of shoulder width, step underneath the bar, and allow it to sit on the shoulders while driving the elbows high in front of the body.\nTake a breath and unrack the bar by pushing your hips forward and extending your knees.\nTake 2-3 steps back and position your feet just inside of shoulder width.\nSit directly between your legs by simultaneously bending your knees and pushing your hips back.\nOnce your thighs reach parallel with the floor, begin to reverse the movement.\nKeep your abs braced and drive your feet through the floor.\nFinish the lift by exhaling as you fully extend the hips and knees.',
    content3:
      'Toe angle is highly individual - experiment to see what feels best for you.\nYou can use either 2 or 3 fingers when front squatting in the front rack position as it will take some stress off the wrist.\nIn order to keep the torso upright, focus on driving the elbows up out of the hole.\nIf you can’t get into a front rack position to front squat, then use the cross arm grip.\nDrive through the whole foot - you want 3 points of contact: big toe, little toe, and heel.\nSome forward translation of the knees over the toes is alright provided that the knees don’t deviate excessively inward or outward. Those with longer femurs will have to allow their knees to come farther forward if they want to remain upright.\nNeck position is highly individual as well - some prefer a neutral neck position (i.e. keeping the chin tucked throughout the lift) while others do well with looking straight ahead. Experiment with each and see which one works best for your anatomy.\nDon’t push the knees out excessively but ensure they track roughly over or slightly outside the 2nd toe.',
    view: 1000000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 108,
    execisename: 'Smith Machine Squat',
    videolink: 'https://www.youtube.com/watch?v=BtfMX4WqUBo',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The Smith machine squat is a variation of the squat and an exercise used to build the muscles of the legs. In particular, the Smith machine squat will place a lot of emphasis on the quads.\n\nUtilizing a Smith machine will ensure the bar path remains in a fixed position, eliminating some of the need to stabilize during the exercise.\n\nYou can include the Smith machine squat in your leg workouts or full body workouts.',
    content2:
      'Position the bar just below shoulder level and adjust the safety stops right above knee height.\nPlace your pinkies on the smooth ring of the barbell.\nGet under the bar and position at the base of your traps looking straight ahead.\nUnrack the bar by rotating your wrists to remove the safety hooks.\nTake a deep breath and keep your elbows in line with your torso.\nDescend by simultaneously pushing the hips back and bending the knees.\nOnce your thighs reach parallel with the floor, reverse the movement by driving your feet into the floor and flexing your quads.\nFinish the lift by exhaling as you fully extend the hips and knees.',
    content3:
      'Low bar will not work well with smith machine squats due to the completely vertical bar path.\nToe angle is highly individual - experiment to see what feels best for you.\nExperiment with a “false” (i.e. thumbless) grip as this helps to eliminate elbow and wrist issues in some folks.\nDrive through the whole foot - you want 3 points of contact: big toe, little toe, and heel.\nImagine you’re trying to drop your back pockets straight towards your heels. Down, not back.\nSome forward translation of the knees over the toes is alright provided that the knees don’t deviate excessively inward or outward. Those with longer femurs will have to allow their knees to come farther forward if they want to remain upright.\nDrive your traps into the bar and try to squeeze your elbows in towards your body as you reverse the movement out of the hole.\nNeck position is highly individual as well - some prefer a neutral neck position (i.e. keeping the chin tucked throughout the lift) while others do well with looking straight ahead. Experiment with each and see which one works best for your anatomy.\nDon’t push the knees out excessively but ensure they track roughly over or slightly outside the 2nd toe.',
    view: 218000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 109,
    execisename: 'Frog Squat',
    videolink: 'https://www.muscleandstrength.com/exercises/frog-squat.html',
    targetmuscleid: 19,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      "Set up for the frog squat by choosing a dumbbell and standing it up on the floor in front of you.\nStand with a slight bend in your knees and your feet in a wide stance. Keep your head up and your back straight.\nBend at the knees only and lift the dumbbell from the floor, securing the dumbbell on one end with your fingertips.\nPush through the heels to return to an upright position. Your arms should be fully extended, holding the dumbbell down between your legs. This is the starting position.\nKeeping your eyes facing forward slowly lower your body down. Don't lean forward as you come down. Your buttocks should come out and drop straight down.\nSquat down as far as possible or at least until your thighs are parallel with the floor and the dumbbell touches the floor.\nThen slowly raise your body back up by pushing through your heels.\nDo not lock the knees out when you stand up, and then repeat the movement.",
    content3:
      "It's crucially important that you keep a straight back when you squat! You can ensure your back is straight by keeping your eyes facing forward, chest out, shoulder blades back, and back arched. Keep your core muscles tensed throughout the movement to help hold your back in place.\nAlways push up through your heels. Curling up your toes can help you get the technique right.\nNever lean forward. This happens when your hips move up faster than your shoulders. To prevent this keep the rep timing slow and controlled and stick your buttocks out as you go down.\nWhen you squat down, your hips should be dropping straight down, not coming forward. Using a light weight, perfect your form standing side on to a mirror. Your knees should never track out and over your toes.\nUsing squats to their full potential requires squatting down at least until your thighs are around parallel to the floor.\nNever look down. As soon as you look down your back rounds, simple as that.",
    view: 484000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 110,
    execisename: 'Dumbbell Lateral Raise',
    videolink:
      'https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content2:
      'The dumbbell lateral raise is a good exercise for building width in your upper body which gives you the "V" shape. Grab a set of dumbbells and stand straight up with the dumbbells at your sides.\nYour palms should be facing your body. You should be holding the dumbbells slightly off your body, as this keeps the tension on the side delts. This is your starting position for the exercise.\nTo execute, slowly raise the dumbbells up to around shoulder height. It\'s important that you do not let your wrists go above your elbows while raising the weight, as this will take the work off the side delts and put it on the front delts.\nPause at the top of the movement, and then slowly lower the weight back to the starting position.\nDo not let the dumbbells touch your body, and then raise them for the next rep.',
    content3:
      'The dumbbell lateral raise is one of those exercises that so many people do incorrectly. First, this is an isolation exercise, so you should be focusing on stretch and muscle contraction, not using heavy weights.\nSecond, you MUST keep your rep timing slow and controlled. So many people use momentum to swing heavy weights up, and this is not going to get you the best results from the dumbbell lateral raise.\nThird, it very important that your elbows stay above your wrists. If your wrists come up too far, the focus comes off your side delts and onto your front delts. A good trick to ensure this does not happen is to tilt the dumbbells down as if you were pouring a jug of water as you raise them up. This makes it very hard to raise the wrists higher than the elbows.\nAnd finally, keep the side delts under stress for the whole set by not allowing the dumbbells to touch your body or "hang" at the bottom of the movement.',
    view: 7000000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 111,
    execisename: 'Overhead Press',
    videolink: 'https://www.youtube.com/watch?v=j7ULT6dznNc',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content1:
      'The military press is a complete shoulder building exercise perfect for building shoulder muscle. The military press is an exercise with many names and is often referred to as the shoulder press, overhead press, and strict press.\n\nThe military press is used primarily to build the deltoid muscle. It also indirectly targets the other muscles of the shoulder, your triceps, and your core. Since the military press is completed standing up, it involves a lot of core strength to help stabilize the spine while pressing weight overhead.\n\nThere are a number of variations to the military press you can use to target the deltoids from different angles and different ways.',
    content2:
      'Adjust the barbell to just below shoulder height then load the desired weight onto the bar.\nAssume a shoulder width stance and place your hands at (or just outside of) shoulder width with a pronated grip on the bar.\nStep underneath the bar and unrack it while keeping the spine in a neutral position.\nTake two steps back, inhale, brace, tuck the chin, then press the bar to lockout overhead.\nExhale once the bar gets to lockout and reverse the movement slowly while controlling the bar back to your chest.\nRepeat for the desired number of repetitions.',
    content3:
      'Reach tall at the top and don’t worry about keeping the shoulders packed down and back.\nAllow the elbows to rotate and point outward at the top of the movement but tuck them tight to the ribcage at the bottom.\nFight to control the bar from rolling your wrists into extension and think about “rolling your knuckles toward the ceiling.”\nKeep momentum out of the movement and don’t add any additional leg drive by flexing and extending the knees.\nSqueeze your glutes and brace your abs as you press. You shouldn’t be leaning back excessively as you press.\nImagine you’re trying to look out a window at the top, your ears should be in line with your biceps.\nIf your shoulders are bothering you during the movement, consider experimenting with a wider grip or utilizing some of the vertical pressing progressions listed on the site.\nYou can use a staggered stance to prevent the lower back from arching excessively but if you still can’t control the anterior core then consider using a half kneeling regression shown on the site.',
    view: 4600000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 112,
    execisename: 'Bent Over Dumbbell Reverse Fly',
    videolink: 'https://www.youtube.com/watch?v=Fgz_FdzDukE',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The bent over dumbbell reverse fly, also known as the bent over rear delt fly, is a great exercise to assist you in building a complete set of shoulders.\n\nMany lifters utilize the bent over dumbbell reverse fly to target the rear delts, an often lagging muscle for many lifters alike.\n\nStrengthening the rear delts by using the bent over rear delt fly can lead to improved posture and a greater level of strength on other lifts.\n\n',
    content2:
      'Select the desired weight from the rack then take a few steps back into an open area.\nHinge from the hips until your body is almost parallel to the floor and allow the arms to hang straight down from the shoulders with a neutral grip.\nTake a deep breath and pull the dumbbells towards the ceiling using the rear deltoids.\nSlowly lower the dumbbells back to the starting position under control.\nRepeat for the desired number of repetitions.',
    content3:
      'Ideally we want to focus on the rear deltoids, not the scapular retractors so movement at the shoulder blade should be limited. Move the shoulder within the joint, not the shoulder blade on the ribcage.\nKeep the abs braced and don’t arch the back at the top of the movement.\nIf you can’t hinge to 90 degrees, then hinge as far as comfortably possible while completing the exercise. Or, you could also take a seated position to complete the exercise as well.\nIf you experience shoulder pain during the movement then it may be beneficial to rotate the dumbbells until the thumbs are pointing away from one another and the palms are facing forward. This is also known as a supinated grip and will externally rotate the shoulder.\nDon’t jut your head forward during the movement - this about stimulation for a small muscle group. Focus during the movement and don’t just rely on momentum.\nAllow the arms to move freely but don’t lock out the elbows.',
    view: 2600000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 113,
    execisename: 'Seated Dumbbell Press',
    videolink: 'https://www.youtube.com/watch?v=FRxZ6wr5bpA',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The seated dumbbell press is a variation of the standing dumbbell press and an exercise used to strengthen the muscles of the shoulders.\n\nThe overhead press is a foundational movement for establishing baseline strength and building a completely balanced physique.\n\nUtilizing dumbbells as opposed to performing with a barbell will allow the individual to strengthen each side of the muscle equally.\n\nThe exercise can be included in shoulder workouts, push workouts, upper body workouts, and full body workouts.',
    content2:
      'Set up an adjustable angle bench to 90 degrees and select the desired weight from the rack.\nPick up the dumbbells from the floor using a neutral grip (palms facing in). Position the end of the dumbbells on your knees and sit down on the bench.\nUsing a safe and controlled motion, kick your knees up one at a time in order to get each dumbbell into place.\nOnce the dumbbells are in place, rotate your palms so they are facing forward.\nTake a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.\nSlowly lower the dumbbells back to the starting position (the arms should be roughly 90 degrees or slightly lower depending upon limb lengths).\nRepeat for the desired number of repetitions.',
    content3:
      'Keep your back flat against the pad throughout the duration of the exercise.\nDon’t allow the head to jut forward excessively.\nDrive the bicep to the ear and exhale as you press.\nIf you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion.\nKeeping the elbows slightly bent at the top and not locking out entirely will help to keep tension on the shoulders.\nIf you can’t lock out the elbows overhead than it may indicate a lack of shoulder mobility due to poor scapular upward rotation.',
    view: 3100000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 114,
    execisename: 'Smith Machine Shoulder Press',
    videolink:
      'https://www.muscleandstrength.com/exercises/smith-machine-shoulder-press.html',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content2:
      'Set up for the smith machine shoulder press by setting a bench down in the smith machine and adjusting the back to a 90 degree angle.\nNow sit down on the bench and adjust the position so that the bar comfortably comes down just in front of your face.\nNext, add the weight you want to use and sit down on the bench.\nUn-rack the weights and bend your elbows slightly. This is the starting position for the movement.\nSlowly lower the weight down until the bar is just below chin height, pause, and then raise the bar back to the starting position without locking your elbows out at the top of the movement.\nRepeat for desired reps.',
    content3:
      "The smith machine shoulder press is a viable option for moving heavy weight without a spotter.\nDon't lock your elbows out at the top of the movement.\nAlways warm up first to lower your risk of shoulder injury.\nAlways lower the bar below your chin to complete a long range of motion.",
    view: 2400000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 115,
    execisename: 'Cable Face Pull',
    videolink: 'https://www.youtube.com/watch?v=7ZvpXA_mFpQ',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The cable face pull is a great shoulder exercise that can be used to target the rear deltoids. Not many exercises can effectively target the rear delts like the cable face pull can.\n\nThe rear delt is often a lagging muscle group for many lifters and weak rear delts can result in poor posture, thus performing the cable face pull (or other rear delt exercises) is highly recommended.\n\nAdd the cable face pull exercise in your body part split on either shoulder or back day, on your upper day during your upper/lower splits, or on your pull day for push/pull/leg splits.',
    content2:
      'Assume a split stance with the arms straight out in front of you utilizing a pronated grip.\nInhale and pull the rope towards your face with the elbows high.\nSlowly lower the rope back to the starting position and repeat for the desired number of repetitions on both sides.',
    content3:
      'If you find yourself leaning back or arching your back as you pull, utilize a half kneeling stance.\nAs you pull, ensure the elbows stay high and the rope remains at eye level.\nFocus on contracting the rear delts and ensure you don’t jut the head forward to meet the rope.\nEnsure you set the cable at face height rather than at the top of the machine as this may over recruit the lats and negate some of the scapular upward rotation benefits.\nDon’t rely upon momentum, keep the motion smooth and controlled from start to finish.\nIf no rope attachment is available, you can still complete the exercise using 2 regular handles or a band.',
    view: 620000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 116,
    execisename: 'Machine Reverse Fly',
    videolink:
      'https://www.muscleandstrength.com/exercises/machine-reverse-fly',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content1:
      'The machine reverse fly is the machine variation of the bent over dumbbell reverse fly and an exercise used to target the rear delt muscles of the shoulder.\n\nPerforming the machine reverse fly exercise can be a useful way to isolate the rear delt muscles without the need to stabilize the core as seen in other variations. The rear delts are often a lagging and underactive muscle group, so training them within your workout program is a must.',
    content2:
      'Face the fly machine while seated with your chest against the pad and the handles positioned in front of your torso.\nReach forward and grasp each handle with a pronated or neutral grip.\nContract the rear delts while keeping the elbows bent and open the arms in a reverse fly motion.\nSlowly lower the handles back to the starting position and repeat for the desired number of repetitions.',
    content3:
      'Ensure the movement comes entirely from the upper arm moving in the shoulder socket rather than scapular retraction.\nThe shoulder blades shouldn’t move drastically - there may be some end range retraction but nothing drastic.\nDon’t allow the head to jut forward as the arms open.',
    view: 198000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 117,
    execisename: 'Seated Arnold Press',
    videolink: 'https://www.youtube.com/watch?v=hmnZKRpYaV8',
    targetmuscleid: 20,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 2,
    content1:
      'The seated Arnold press is a variation of the seated dumbbell press and an exercise utilized to build shoulder muscle size and strength.\n\nThe Arnold press, named after Arnold Schwarzenegger himself, is an exercise used to target every single head of the deltoid.\n\nThe exercise is best used by those seeking aesthetic benefits due to its long time under tension, but can also be used as an accessory movement by those attempting to build strength.',
    content2:
      'Set up an adjustable angle bench to 90 degrees and select the desired weight from the rack.\nPick up the dumbbells from the floor using a neutral grip (palms facing in). Position the end of the dumbbells on your knees and sit down on the bench.\nUsing a safe and controlled motion, kick your knees up one at a time in order to get each dumbbell into place.\nOnce the dumbbells are in place, rotate your palms so they are facing you.\nTake a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.\nAs you press, rotate the dumbbells until your palms are facing forward.\nSlowly lower the dumbbells back to the starting position (the arms should be roughly 90 degrees or slightly lower depending upon limb lengths).\nRepeat for the desired number of repetitions.',
    content3:
      'Keep your back flat against the pad throughout the duration of the exercise.\nDon’t allow the head to jut forward excessively.\nDrive the bicep to the ear and exhale as you press.\nIf you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion.\nKeeping the elbows slightly bent at the top and not locking out entirely will help to keep tension on the shoulders.\nIf you can’t lock out the elbows overhead than it may indicate a lack of shoulder mobility due to poor scapular upward rotation.',
    view: 1900000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 118,
    execisename: 'Barbell Upright Row',
    videolink: 'https://www.muscleandstrength.com/exercises/upright-row.html',
    targetmuscleid: 21,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 1,
    content2:
      'The barbell upright row is one of the best exercises for building the upper traps and shoulders. Load up a barbell with the weight you want to use and stand facing it with your feet at around shoulder width apart.\nGrasp the barbell with an overhand grip (palms facing down), and hands slightly closer than shoulder width apart.\nPick the bar up, bending at the knees and keeping your back straight.\nKeeping your back straight and eyes facing forwards, lift the bar straight up while keeping it as close to your body as possible (you should pull the bar up to around chest height - nearly touching your chin).\nPause, and then slowly lower the bar back to the starting position.\nRepeat for desired reps.',
    content3:
      "Focus on keeping your elbows higher than your forearms. The elbows push the motion.\nKeep your body fixed throughout the set. Don't lean forward as you lower the bar, and back as you raise it. Movement of the body makes the upright row easier, and you will not get the most out of it.\nPause and squeeze the traps at the top of the movement, and then lower the bar really slowly if you want to add a bit of intensity to the exercise.",
    view: 3000000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 119,
    execisename: 'Dumbbell Shrug',
    videolink: 'https://www.youtube.com/watch?v=dj2Gm628kas',
    targetmuscleid: 21,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The dumbbell shrug is a variation of the shrug and an exercise used to build trap muscle size.\n\nTraps, being a stubborn muscle group for many, can be trained with a fairly high frequency during the week. When doing so, be sure to mix up the volume, intensity, and implements you use to train the traps.\n\nDumbbell shrugs can be included into your shoulder workouts, back workouts, upper body workouts, and full body workouts.',
    content2:
      'Assume a standing position with the dumbbells on both sides of your body.\nHinge forward, inhale, and grab the dumbbells with a neutral grip.\nStand up tall and ensure your spine remains neutral.\nContract the traps to elevate the shoulders. Squeeze hard at the top and slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Looking slightly up while shrugging may enhance the contraction as traps help to control movement of the skull. This motion should be smooth and controlled, as a ballistic movement could result in a neck injury.\nThe traps tend to respond well to high reps and explosive movements (e.g. snatch grip high pulls) so program your accessory work accordingly.\nLimit momentum and excessive jerking or bouncing of the weight. No one cares about how much you shrug.\nDon’t allow the head to jut forward excessively as you squeeze the traps, this can put the neck in a compromised position and result in an injury.\nAdding a pause at the top of the movement can help to enhance the mind muscle connection.',
    view: 2400000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 120,
    execisename: 'Smith Machine Shrug',
    videolink:
      'https://www.muscleandstrength.com/exercises/smith-machine-shrug.html',
    targetmuscleid: 21,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 1,
    content2:
      'Set up for the smith machine shrug by loading up the weight you want to use on a smith machine.\nStand facing the bar with your feet about shoulder width apart.\nGrab the bar with an overhand grip (palms facing down), with your hands about shoulder width apart. Bending at the knees only, pick the barbell up and release the safety.\nKeeping the barbell close to your body, let your shoulders sag as far as possible. This is the starting position for the exercise.\nSlowly shrug your shoulders up as far as possible.\nPause, and then slowly lower the barbell back to the starting position.\nRepeat for desired reps.',
    content3:
      "Focus on lifting the weight with your traps and not your biceps.\nPausing at the top of the barbell shrug makes the exercise more challenging and you'll get more out of it. Try and pause for a count of 1-3 at the top of each rep.\nThere's no benefit to rolling your shoulders forward or back when you shrug - that's a myth! Just raise the barbell straight up and straight down.",
    view: 135000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 121,
    execisename: 'Cable Shrug',
    videolink: 'https://www.youtube.com/watch?v=LwTq3v2GUF4',
    targetmuscleid: 21,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The cable shrug is a variation of the shrug and an exercise used to build the muscles of the traps.\n\nUtilizing the cable pulley machine is useful in that it provides constant tension on the target muscle group as you move the weight through the range of motion',
    content2:
      'Set 2 cable handles as low as possible and assume a standing position with one handle in each hand.\nInhale and contract the traps to elevate the shoulders. Squeeze hard at the top and slowly lower the handles back to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Looking slightly up while shrugging may enhance the contraction as traps help to control movement of the skull. This motion should be smooth and controlled, as a ballistic movement could result in a neck injury.\nThe traps tend to respond well to high reps and explosive movements (e.g. snatch grip high pulls) so program your accessory work accordingly.\nDon’t allow the head to jut forward excessively as you squeeze the traps, this can put the neck in a compromised position and result in an injury.\nAdding a pause at the top of the movement can help to enhance the mind muscle connection.',
    view: 87000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 122,
    execisename: 'T-Bar Machine Shrug',
    videolink: 'https://www.youtube.com/watch?v=MgKQjNlFrrQ',
    targetmuscleid: 21,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 2,
    content1:
      'The t-bar machine shrug is an exercise one can use to isolate the muscles of the traps.\n\nAs opposed to targeting the upper traps, as most shrug variations tend to do, the t-bar machine shrug emphasizes the use of the mid and lower trap area. It is important to train them all to have a well develop set of traps.',
    content2:
      'Assume a prone position on a t-bar machine with your chest on the pad.\nReach forward and grab the handle with a semi pronated grip.\nContract the traps and retract your shoulder blades together to activate all of the traps. Squeeze hard at the top and slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'Looking slightly up while shrugging may enhance the contraction as traps help to control movement of the skull. This motion should be smooth and controlled, as a ballistic movement could result in a neck injury.\nThe traps tend to respond well to high reps and explosive movements (e.g. snatch grip high pulls) so program your accessory work accordingly.\nLimit momentum and excessive jerking or bouncing of the weight. No one cares about how much you shrug.\nDon’t allow the head to jut forward excessively as you squeeze the traps, this can put the neck in a compromised position and result in an injury.\nAdding a pause at the top of the movement can help to enhance the mind muscle connection.',
    view: 4800,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 123,
    execisename: 'Kettlebell Sumo Deadlift High Pul',
    videolink: 'https://www.youtube.com/watch?v=wLm32q4q0ZM',
    targetmuscleid: 21,
    execisetypeid: 1,
    equipmentid: 6,
    experiencelevelid: 1,
    content1:
      'The 2 KB kettlebell sumo deadlift to high pull is a variation of the clean and an exercise used primarily to target the muscles of the shoulders and traps.\n\nThe 2 kb kettlebell high pull is a combination exercise (combining a sumo deadlift with a high pull) and will target other muscles groups such as the upper back and hamstrings.\n\nHigh pulls are performed explosively, and since the traps respond well to explosive movements, will help with trap muscle growth. They also have a significant amount of application in sports-specific training where explosiveness is an important indicator for performance.',
    content2:
      'Position the kettlebells between your legs and assume a wider than shoulder width stance (determined by your hip structure and limb length).\nPush your hips back and hinge forward until your torso is nearly parallel with the floor.\nReach down and grasp the handles of the bells with both hands.\nInhale, drop your hips, and keep the chest up tall.\nDrive through the whole foot and focus on pushing the floor away.\nAs the kettlebells nears your hips and your legs lock out, shrug the shoulders and then pull aggressively with the arms.\nThe kettlebells should rise to sternum level at the completion of the movement.\nAs the kettlebells return to the hip position, reverse the movement by pushing the hips back and hinging forward.\nReturn the kettlebells to the floor, reset, and repeat for the desired number of repetitions.',
    content3:
      'Stance width varies greatly depending upon the individual. Rather than spending too much time trying to calculate your ideal stance width, simply experiment and see what feels best on your hips in the long run while simultaneously allowing you to generate the most power. For some folks this will be a semi medium width (hybrid) position whereas for others their toes will very wide.\nThe hips should be lower than the shoulders and you should be able to see the logo on the lifter’s shirt before they pull (i.e. “chest up”). The chest up cue is usually accomplished when the lats become locked in though so this cue is typically not needed if the lifter understands how to initiate the lats.\nIdeally the knees should be tracking out over the foot. If you find that you have trouble keeping this neutral knee position, focus on spreading the floor by trying to push your feet apart as you push into the floor. In other words, imagine there is a crack in the floor and you’re trying to spread it open by pushing your heels away from each other. This will help to activate your glutes more during the movement and stabilize the knee joint.\nNeck position is highly individual - Some prefer a neutral neck position (i.e. keeping the chin tucked throughout the lift) while others do well with looking slightly up. Here’s some factors to consider:\nIf you’re someone who is more globally extended (i.e. athletic background), then you will likely be able to keep a neutral position more effectively by packing the chin.\nOn the opposite end of the spectrum, if you tend to be more flexion dominant (especially in your thoracic spine - upper back) then it would behoove you to look up slightly as this will drive more extension.\nExperiment with each and see which one works best for your individual anatomy and biomechanics.\nIdeally you should cue and emphasize a vertical shin, especially in the sumo deadlift.\nToe angle is highly individual - this will be dependent upon your hip anatomy. Experiment (toes slightly out or neutral) to see what feels best for you.\nDo NOT retract your shoulder blades. This is mechanically inefficient and a self limiting cue as it shortens the length of the arms thus requiring a larger range of motion.\nMake sure you wrap your thumbs around the kettlebell and don’t utilize a false grip. Squeeze the handle as tight as possible like you’re trying to leave an imprint of your fingerprints on the kettlebell.\nIf you focus on keeping the weight entirely on the heels, you won’t be able to effectively recruit your quads at the beginning of the lift and thus you’ll be slow off the flow. So, to combat this, you should focus on driving through the whole foot - you want 3 points of contact: big toe, little toe, and heel.',
    view: 2000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 124,
    execisename: 'Straight Bar Tricep Extension',
    videolink: 'https://www.youtube.com/watch?v=mpZ9VRisAyw',
    targetmuscleid: 22,
    execisetypeid: 1,
    equipmentid: 2,
    experiencelevelid: 1,
    content1:
      'The straight bar tricep extension is a variation of the cable tricep extension and an exercise used to build the muscles of the triceps.\n\nWell-built triceps also have a lot of positive carryover into your pressing movements such as bench press variations and shoulder press variations.\n\nThe straight bar tricep extension can be included in your tricep workouts, upper body workouts, push workouts, and full body workouts.',
    content2:
      'Attach a straight bar to a cable stack as high as possible and assume a standing position.\nGrasp the straight bar with a pronated grip (palms facing down) and lean forward slightly by hinging at the hips.\nInitiate the movement by extending the elbows and flexing the triceps.\nPull the handle downward until the elbows are almost locked out and then slowly lower under control back to the starting position.\nRepeat for the desired number of repetitions.',
    content3:
      'If you want to keep more tension in the triceps, don’t lock the elbows out entirely.\nImagine there’s a screw running through your elbow and don’t allow them to move in front of the body as you extend at the bottom of the movement.\nExperiment with static elbow positioning throughout the lift - some may find that they get a better stretch in the bottom portion of the movement by allowing their elbows to drift behind the body during the eccentric portion of the movement (similar to a drag curl).\nEnsure the shoulder blades don’t tilt forward as you extend the elbows.',
    view: 4400000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 125,
    execisename: 'Seated Dumbbell Tricep',
    videolink: 'https://www.youtube.com/watch?v=LlCFtWCQc5s',
    targetmuscleid: 22,
    execisetypeid: 1,
    equipmentid: 7,
    experiencelevelid: 1,
    content1:
      'The seated dumbbell tricep extension is a variation of the dumbbell tricep extension and an exercise used to isolate the muscles of the triceps.\n\nOverhead extension exercises are particularly useful in targeting the long head of the triceps muscle. Having a larger and more dense long head will give you an overall appearance of a larger tricep.\n\nIsolation exercises for the triceps are particularly useful for those looking to achieve aesthetics. They can also be helpful for those looking to increase their strength on other pressing motions.',
    content2:
      'Select the desired weight from the rack and position an adjustable bench at 90 degrees.\nTo get into position, sit in an upright position and lift the dumbbell to the top of your shoulder. Take a deep breath, overlap your hands around the dumbbell, then press it into position overhead.\nMaintain an overlapping grip and slowly lower the dumbbell behind your head by unlocking your elbows.\nOnce your forearms reach parallel or just below, drive the dumbbell back to the starting point by extending the elbows and flexing the triceps.\nRepeat for the desired number of repetitions.',
    content3:
      'Don’t overextend through the lumbar spine, keep your ribcage down by maintaining tension through the abs and glutes.\nUsing a slow eccentric (lowering portion) of the exercise can help to improve tension and mind muscle connection.\nKeep the head in a fairly neutral position, don’t allow the neck to jut forward as this may place excessive pressure on the cervical spine.',
    view: 2400000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 126,
    execisename: 'Lying Barbell Tricep Extension',
    videolink:
      'https://www.muscleandstrength.com/exercises/lying-tricep-extension.html',
    targetmuscleid: 22,
    execisetypeid: 1,
    equipmentid: 4,
    experiencelevelid: 2,
    content2:
      'The lying tricep extension (AKA Skull Crusher) is one of the best tricep building exercises there is.\n\nSit on the end of a flat bench with a barbell on your thighs.\nGrip the barbell with an overhand grip (palms facing down) with your hands about shoulder-width apart.\nBring the bar up to your chest and lay down on your back. Extend your arms straight up above your chest.\nKeeping your elbows fixed in place and not pointing out, slowly lower the bar until it is about an inch from your forehead (hence the name skullcrusher!).\nPause, and then slowly extend your arms back to the starting position.\nDo not lock your elbows out, and then repeat for desired reps.',
    content3:
      "It's very important that you keep your elbows in during the set. Your elbows will have a tendency to flare out as you move the weight, and you must keep them pointing forward.\nKeep the rep timing slow and control the weight.\nAnd finally, don't lock your elbows out at the top of the movement. This will take the tension off the triceps.",
    view: 2300000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 127,
    execisename: 'Weighted Tricep Dips',
    videolink: 'https://www.youtube.com/watch?v=ZQnPQG5d67E',
    targetmuscleid: 22,
    execisetypeid: 1,
    equipmentid: 1,
    experiencelevelid: 3,
    content1:
      'The weighted tricep dip is a variation of the tricep dip and an exercise used to build the muscles of the triceps, shoulders, and chest.\n\nAdding weight to a dip belt is an excellent way to progress from the bodyweight variation of the tricep dip and will ensure you are continuously getting stronger and building muscle from performing the lift.\n\nWeighted tricep dips can be added in your arm workouts, upper body workouts, push workouts, or full body workouts.',
    content2:
      'Step up onto the dip station (if possible) and position your hands with a neutral grip.\nInitiate the dip by unlocking the elbows and slowly lowering the body until the forearms are almost parallel with the floor.\nControl the descent to parallel and then drive back to the starting position by pushing through the palms.\nRepeat for the desired number of repetitions.',
    content3:
      'Technically there are two ways to perform dips - neither is wrong, just different movement with different purposes:\nStaying upright and keeping the elbows in close to increase tricep recruitment.\nLeaning forward with elbows wider to increase chest recruitment.\nIf possible, keep the legs straight down while bracing the glutes and abs to limit excessive spinal movement.\nIf no dip station with steps is available, position a box underneath the handles to boost yourself up to the bars.\nIf no box is available, then jump into position.\nDon’t allow the head to jut forward during the descent.\nEnsure the elbows stay just short of lockout to keep tension on the triceps.\nExperiment with a false grip by wrapping the thumb over the bar as this may be more comfortable for some.',
    view: 434500,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
  {
    id: 128,
    execisename: 'Close Grip Push Up',
    videolink:
      'https://www.muscleandstrength.com/exercises/close-grip-push-up.html',
    targetmuscleid: 22,
    execisetypeid: 1,
    equipmentid: 3,
    experiencelevelid: 1,
    content2:
      'The close grip push up is a variation of the push up that focuses on hitting the triceps.\n\nSet up by placing your palms on the floor with your thumbs touching one another.\nExtend your legs back so that only your toes are touching the floor and your body is straight.\nBend slightly at the elbows to keep tension in your triceps.\nKeeping your body straight, slowly lower yourself as far as possible without hitting the floor.\nPause, and then push back up to the starting position without locking your elbows out.\nRepeat for desired reps.',
    content3:
      "Keep your elbows tucked in at your side throughout the set.\nDon't lock your elbows out. This takes the tension off the triceps and makes the exercise less effective.\nThe close-grip push-up is a good finishing exercise or as a second exercise in a superset.",
    view: 340000,
    trackingWeight: [],
    trackingRep: [],
    trackingDate: [],
  },
];
