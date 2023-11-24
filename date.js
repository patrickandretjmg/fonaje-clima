const date = (dateString) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("pt-BR", 'DD/mm/yyyy');

    return formattedDate
}