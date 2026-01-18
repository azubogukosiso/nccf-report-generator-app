type Unit = {
    unitName: string;
    unitId: number;
};

export const getUnitNameById = (units: Unit[], id: number): string | undefined => {
    const found = (units as Unit[]).find(u => u.unitId === id);
    return found?.unitName;
}
