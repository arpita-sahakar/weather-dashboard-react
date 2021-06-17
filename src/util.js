import moment from "moment";
const displayDate = (dateFromRes) => {
    let now = new Date(dateFromRes * 1000);
    let dateString = moment(now).format("MM-DD-YYYY");
    return dateString;
  };

export default displayDate