export const convet_data_to_select = (array: any[]): { label: string, value: string }[] => {
    let new_array: { label: string, value: string }[] = [];
    new_array = array.map(e => ({ label: e.name, value: e.id }));
    return new_array;
  }