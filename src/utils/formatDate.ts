const formatDate = (value: string): string =>
Intl.DateTimeFormat('en-GB').format(Date.parse(value));

export default formatDate;
