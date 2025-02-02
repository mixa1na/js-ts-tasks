interface User {
  name: string;
  type: 'EMPLOYEE' | 'CONTRACTOR';
}

module.exports.groupUsers = function (users: User[]): { employees: User[]; contractors: User[] } {
  const result: { employees: User[]; contractors: User[] } = { employees: [], contractors: [] };

  users.forEach((user: User) => {
    if (user.type === 'EMPLOYEE') {
      result.employees.push(user);

    } else if (user.type === 'CONTRACTOR') {
      result.contractors.push(user);

    } else {
      console.error("Invalid user type: ${user.type}");
    }
  });

  return result;
};
