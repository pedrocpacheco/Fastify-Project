function calculateUserAge(user) {
    return new Date().getFullYear() - user.birthYear;
}
console.log(calculateUserAge({ birthYear: 10 }));
