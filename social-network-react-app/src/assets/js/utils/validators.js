export const requiredField = (value) => {
    if (value) return undefined;

    return "Field is reqired";
};

export const maxLenghtCreator = (maxLenght) => (value) => {
        if (value.length > maxLenght) return `Max lenght is ${maxLenght} symbols`;

        return undefined;
}