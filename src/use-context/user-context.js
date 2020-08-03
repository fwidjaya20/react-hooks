const { createContext } = require("react");

const UserContext = createContext({
    name: "",
    email: "",
    setUserDetail: () => {}
});

export default UserContext;