// Write your code here
function getStudent(classroom) {
  const { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (classList.length === 0) {
    return null;
  }

  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  return students;
}

const oneClassRoom = {
  hasTeachingAssistant: false,
  classList: ["Rashid", "John", "Roman", "Lisa", "Omair", "Luke"],
};

console.log(getStudent(oneClassRoom));
