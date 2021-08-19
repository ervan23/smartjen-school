const Role = {
	ADMIN: 0,
	TEACHER: 1,
	STUDENT: 2
};

const getRole = role => {
	switch(role) {
	case Role.ADMIN:
		return 'Admin';
	case Role.TEACHER:
		return 'Teacher';
	case Role.STUDENT:
		return 'Student';
	default:
		return 'Unknown';
	}
};

export {
	Role,
	getRole
};