// Array with body part and exercise data
// Array with detailed body part and exercise data
const exercises = [
    { 
      bodyPart: 'Knee', 
      exercise: 'Squats, Lunges',
      description: 'The knee is a hinge joint that connects the thigh to the lower leg. It is essential for most movements, including walking, running, and jumping.',
      tips: 'Strengthening the quadriceps and hamstrings helps stabilize the knee joint and reduce the risk of injury.'
    },
    { 
      bodyPart: 'Shoulder', 
      exercise: 'Shoulder Press, Lateral Raises',
      description: 'The shoulder is a ball-and-socket joint that allows a wide range of motion. It is one of the most mobile joints in the body.',
      tips: 'Strengthen the deltoid muscles to improve shoulder stability and mobility.'
    },
    { 
      bodyPart: 'Chest', 
      exercise: 'Push-ups, Bench Press',
      description: 'The chest primarily consists of the pectoralis major muscle, which is responsible for movements like pushing and lifting.',
      tips: 'Focus on both compound and isolation exercises to build strength and mass in the chest.'
    },
    { 
      bodyPart: 'Abs', 
      exercise: 'Crunches, Leg Raises',
      description: 'The abdominal muscles are crucial for core strength, helping with posture, balance, and most body movements.',
      tips: 'Incorporating both upper and lower ab exercises ensures balanced core development.'
    },
    { 
      bodyPart: 'Obliques', 
      exercise: 'Side Planks, Russian Twists',
      description: 'The obliques are muscles on the sides of the abdomen that help with rotational movement and trunk stability.',
      tips: 'Oblique exercises promote a stable, strong core and improve your balance.'
    },
    { 
      bodyPart: 'Front Deltoids', 
      exercise: 'Front Raises, Arnold Press',
      description: 'The front deltoid (anterior deltoid) is responsible for lifting the arm forward. It is a key muscle for overhead movements.',
      tips: 'Isolating the front delts can help improve shoulder aesthetics and strength.'
    },
    { 
      bodyPart: 'Bicep', 
      exercise: 'Bicep Curls, Hammer Curls',
      description: 'The biceps are located at the front of the upper arm and are responsible for elbow flexion.',
      tips: 'Variety in curls (e.g., hammer curls, concentration curls) helps target all parts of the biceps.'
    },
    { 
      bodyPart: 'Tricep', 
      exercise: 'Tricep Dips, Tricep Pushdowns',
      description: 'The triceps are located at the back of the upper arm and are responsible for elbow extension.',
      tips: 'Tricep exercises like dips and pushdowns are essential for developing arm strength and definition.'
    },
    { 
      bodyPart: 'Forearm', 
      exercise: 'Wrist Curls, Reverse Curls',
      description: 'The forearm contains several muscles that control wrist and finger movements.',
      tips: 'Forearm strength is important for grip and preventing injury during heavy lifts.'
    },
    { 
      bodyPart: 'Abductors', 
      exercise: 'Leg Raises, Side Leg Raises',
      description: 'The abductors are muscles responsible for moving the leg away from the body.',
      tips: 'Strengthening the abductors helps improve hip mobility and stability.'
    },
    { 
      bodyPart: 'Quadriceps', 
      exercise: 'Squats, Leg Press',
      description: 'The quadriceps are a group of muscles at the front of the thigh responsible for knee extension.',
      tips: 'Squats and lunges are effective compound movements to strengthen the quadriceps.'
    },
    { 
      bodyPart: 'Calves', 
      exercise: 'Calf Raises, Seated Calf Raises',
      description: 'The calves are made up of the gastrocnemius and soleus muscles, which allow for ankle movement.',
      tips: 'To effectively train calves, both seated and standing calf raises are needed.'
    },
    { 
      bodyPart: 'Trapezius', 
      exercise: 'Shrugs, Upright Rows',
      description: 'The trapezius is a large muscle located on the upper back, responsible for shoulder movement and neck stability.',
      tips: 'Strengthening the traps can improve posture and help with shoulder mobility.'
    },
    { 
      bodyPart: 'Upper Back', 
      exercise: 'Pull-ups, Lat Pulldown',
      description: 'The upper back consists of muscles like the latissimus dorsi, which are responsible for pulling and lifting movements.',
      tips: 'Pull-ups and lat pulldowns are key exercises for building upper back strength.'
    },
    { 
      bodyPart: 'Lower Back', 
      exercise: 'Deadlifts, Hyperextensions',
      description: 'The lower back is essential for posture, stability, and movements like bending and lifting.',
      tips: 'Deadlifts are one of the most effective exercises for strengthening the lower back.'
    },
    { 
      bodyPart: 'Gluteal', 
      exercise: 'Hip Thrusts, Glute Bridges',
      description: 'The gluteal muscles are responsible for hip movement and play a crucial role in posture and athletic performance.',
      tips: 'Hip thrusts are one of the best exercises to activate and strengthen the glutes.'
    },
    { 
      bodyPart: 'Adductor', 
      exercise: 'Adductor Machine, Sumo Squats',
      description: 'The adductors are a group of muscles located on the inner thigh, responsible for bringing the leg toward the body.',
      tips: 'Adductor exercises help improve hip stability and flexibility.'
    },
    { 
      bodyPart: 'Hamstring', 
      exercise: 'Leg Curls, Deadlifts',
      description: 'The hamstrings are muscles at the back of the thigh that are involved in knee flexion and hip extension.',
      tips: 'Hamstring training is vital to prevent injury and improve overall leg strength.'
    }
  ];
  
  
  // Add event listeners to all body parts
  document.querySelectorAll('[data-body-part]').forEach(part => {
    part.addEventListener('click', function() {
      const bodyPart = part.getAttribute('data-body-part');
      const exercise = exercises.find(e => e.bodyPart === bodyPart);
      if (exercise) {
        // Update the modal with detailed information
        document.getElementById('modalLabel').textContent = exercise.bodyPart;
        document.getElementById('modalContent').innerHTML = `
          <strong>Exercises:</strong> ${exercise.exercise}<br>
          <strong>Description:</strong> ${exercise.description}<br>
          <strong>Tips:</strong> ${exercise.tips}
        `;
        new bootstrap.Modal(document.getElementById('bodyPartModal')).show();
      }
    });
  });
 

  function checkScreenSize() {
    const width = window.innerWidth;
    const unsupportedModal = new bootstrap.Modal(document.getElementById('unsupportedModal'));
    
    // If the window width is less than 768px, show the modal
    if (width < 768) {
      unsupportedModal.show();
    }
  }

  // Check on page load and when the window is resized
  window.addEventListener('load', checkScreenSize);
  window.addEventListener('resize', checkScreenSize);

