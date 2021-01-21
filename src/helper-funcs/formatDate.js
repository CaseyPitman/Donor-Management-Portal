import dayjs from "dayjs";

const formatDate = date => dayjs(date).format("MM/DD/YYYY");

export default formatDate;
