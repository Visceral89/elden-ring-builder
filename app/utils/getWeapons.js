import weaponData from "@/app/data/weapons.json";

export const allWeapons = weaponData;

export const getWeaponByCategory = (category) => {
	return weaponData.filter((weapon) => weapon.category === category);
};

export const getWeaponAttack = (name) => {
    return const 
}
