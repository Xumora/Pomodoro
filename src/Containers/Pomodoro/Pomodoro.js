import { faChartBar, faCheckCircle, faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");


const Pomodoro = (props) => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(25);
    const [work, setWork] = useState(1);
    const [breakTime, setBreakTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [btn, setBtn] = useState(false);


    const renderTime = (time) => {
        return time < 10 ? "0" + time : time
    }

    const start = () => {
        setTimerOn(true);
        setBtn(false);
    }

    const pause = () => {
        setTimerOn(false);
        setBtn(true);
    }

    const clear = () => {
        setTimerOn(false);
        setSecond(0);
        setMinute(25);
        setWork(1);
        setBreakTime(0);
        setBtn(false);
    }

    useEffect(() => {
        if (timerOn == true) {
            setTimeout(() => {
                if (second == 0 && minute == 0) {
                    if (work > breakTime) {
                        setBreakTime(breakTime + 1);
                        if (work % 4 == 0) {
                            setMinute(15);
                            setSecond(0);
                        } else {
                            setMinute(5);
                            setSecond(0);
                        }
                    } else {
                        setWork(work + 1)
                        setMinute(25);
                        setSecond(0);
                    }
                }
                else if (second == 0) { setSecond(59) } else { setSecond(second - 1) };
                if (second == 0 && minute != 0) { setMinute(minute - 1) };
            }, 10)
        }
    }, [second, timerOn, minute]);

    return <div style={{
        backgroundColor: `${work > breakTime && "#DB524D" || work == breakTime && work % 4 == 0 && "#437EA8" || work == breakTime && "#468E91"}`,
        height: "100vh", overflowX: "hidden", transition: "0.5s"
    }}>
        <div className="row justify-content-center px-4">
            <div className="col-12 col-md-6 text-center">
                <header className="d-flex justify-content-between align-items-center py-3">
                    <h5>
                        <FontAwesomeIcon icon={faCheckCircle} /> Pomofocus
                    </h5>
                    <div className="d-none d-md-block">
                        <button className="btn btn1 text-white mx-2" style={{ backgroundColor: `${work > breakTime && "#DF645F" || work == breakTime && work % 4 == 0 && "#568BB1" || work == breakTime && "#599A9C"}`, transition: "0.5s" }}><FontAwesomeIcon icon={faChartBar} />Report</button>
                        <button className="btn btn1 text-white mx-2" style={{ backgroundColor: `${work > breakTime && "#DF645F" || work == breakTime && work % 4 == 0 && "#568BB1" || work == breakTime && "#599A9C"}`, transition: "0.5s" }}><FontAwesomeIcon icon={faCog} />Setting</button>
                        <button className="btn btn1 text-white mx-2" style={{ backgroundColor: `${work > breakTime && "#DF645F" || work == breakTime && work % 4 == 0 && "#568BB1" || work == breakTime && "#599A9C"}`, transition: "0.5s" }}><FontAwesomeIcon icon={faUserCircle} />Login</button>
                    </div>
                </header>

                <div className="box p-5" style={{ backgroundColor: `${work > breakTime && "#DF645F" || work == breakTime && work % 4 == 0 && "#568BB1" || work == breakTime && "#599A9C"}`, transition: "0.5s" }}>
                    <h1>{renderTime(minute)} : {renderTime(second)}</h1>
                    <button className="btn bg-white mx-3 fw-bold" style={{ color: `${work > breakTime && "#DB524D" || work == breakTime && work % 4 == 0 && "#437EA8" || work == breakTime && "#468E91"}`, transition: "0.5s" }} onClick={start}>Start</button>
                    <button className="btn bg-white mx-3 fw-bold" style={{ color: `${work > breakTime && "#DB524D" || work == breakTime && work % 4 == 0 && "#437EA8" || work == breakTime && "#468E91"}`, transition: "0.5s" }} onClick={pause}>Pause</button>
                    {btn && <button className="btn bg-white mx-3 fw-bold" style={{ color: `${work > breakTime && "#DB524D" || work == breakTime && work % 4 == 0 && "#437EA8" || work == breakTime && "#468E91"}`, transition: "0.5s" }} onClick={clear}>Clear</button> || ""}
                </div>
                <p className="my-3">{work > breakTime && "Time to work!" || "Have a rest!"}</p>
            </div>
        </div>
    </div>
}

export default Pomodoro;