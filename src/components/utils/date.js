
export const getDate = () => {
    const today = new Date();
    // const month = today.getMonth() + 1;
    // const year = today.getFullYear();
    // const date = today.getDate();
    // return `${year}/${month}/${date}`;
    const hours = today.getHours();
    const minutes = today.getMinutes(); 
    const seconds = today.getSeconds();
    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
  }