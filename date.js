const date = (dateString) => {
    const dateParts = dateString.split('-');
  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}