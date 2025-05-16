import User from "../models/User.js";
import Thesis from "../models/Thesis.js";
import Schedule from "../models/Schedule.js";

class LoginController {
    static async index(req, res) {
        const data = {
            oldData: {},
            error: {},
        };

        return res.render("login", { data });
    }

    static async login(req, res) {
        const { token } = req.body;

        const decoded = await User.login(token);

        const email = decoded.email;

        if (email !== "admin@gmail.com") {
            return res.status(403).json({ error: "Email salah" });
        }

        req.session.admin = {
            uid: decoded.uid,
            email: decoded.email,
        };

        return res.status(200).json({ message: "Login Berhasil"})

        // const { email, password } = req.body;
        // const objData = { email, password };

        // let error = {};

        // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        // if (!emailRegex.test(objData.email)) {
        //     error.email = "Masukkan email anda dengan benar";
        // }

        // const data = {
        //     oldData: req.body,
        //     error: error,
        // };

        // if (Object.keys(error).length) {
        //     return res.render("login", { data });
        // }

        // objData.email = objData.email.toLowerCase();

        // await User.login()
    }
}

export default LoginController;
