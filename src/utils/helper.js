export const uniqArray = (data) => {
    const uniques = Object.values(
        data.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {})
    );
    return uniques;
}