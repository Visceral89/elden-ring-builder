import armorsData from "@/app/data/armors.json";
export const armors = armorsData;

export const getArmorsByCategory = (category) => {
	return armorsData.filter((armor) => armor.category === category);
};
