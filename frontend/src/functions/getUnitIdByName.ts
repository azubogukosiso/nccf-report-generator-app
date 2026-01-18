type Unit = {
    unitName: string;
    unitId: number;
};

export const getUnitIdByName = (units: Unit[], name: string): number | undefined => {
    const found = (units as Unit[]).find(u => u.unitName === name);
    return found?.unitId;
}
