import classesData from "@/app/data/classes.json";
export const classNames = classesData.map((cls) => cls.name);

export const getClassStats = (name) => {
	const classObj = classesData.find((cls) => cls.name === name);
	return classObj ? classObj.stats : null;
};

export const getClassImage = (name) => {
	const classObj = classesData.find((cls) => cls.name === name);
	return classObj ? classObj.image : null;
};

export const getClassDescription = (name) => {
	const classObj = classesData.find((cls) => cls.name === name);
	return classObj ? classObj.description : null;
};

export const getAllClassDetails = (name) => {
	const classObj = classesData.find((cls) => cls.name === name);
	return classObj || null;
};
