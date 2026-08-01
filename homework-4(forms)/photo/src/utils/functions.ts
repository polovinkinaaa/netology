export const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", (evt) => {
      resolve((evt.currentTarget as FileReader).result as string);
    });

    fileReader.addEventListener("error", () => {
      reject(fileReader.error ?? new Error("Failed to read file"));
    });

    fileReader.readAsDataURL(file);
  });
};
