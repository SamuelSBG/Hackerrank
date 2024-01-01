function angryProfessor(k, a) {
  const studentsInTime = a.filter((time) => time <= 0).length;

  return studentsInTime >= k ? "NO" : "YES";
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
