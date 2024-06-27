import weaponData from "@/app/data/weapons.json";

export const allWeapons = weaponData;

export const getWeaponsByCategory = (category) => {
	return weapondata.filter((w) => w.category === category);
};

export const getWeaponAttack = (name) => {
	const weapon = weaponsData.find((w) => w.name === name);
	return weapon ? weapon.attack : null;
};

export const getWeaponScalesWith = (name) => {
	const weapon = weaponsData.find((w) => w.name === name);
	return weapon ? weapon.scalesWith : null;
};

export const getWeaponRequiredAttributes = (name) => {
	const weapon = weaponsData.find((w) => w.name === name);
	return weapon ? weapon.requiredAttributes : null;
};

export const getWeaponWeight = (name) => {
	const weapon = weaponsData.find((w) => w.name === name);
	return weapon ? weapon.weight : null;
};

export const getWeaponDesc = (name) => {
	const weapon = weaponsData.find((w) => w.name === name);
	return weapon ? weapon.description : null;
};
