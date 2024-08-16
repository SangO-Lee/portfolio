function Loading() {
    return (
        <div id="loading">
            <div id="phase1" className="dark">
                <p className="l1">
                    <span className="t1">Hi.</span>{" "}
                    <span className="t2">My</span>{" "}
                    <span className="t3">Name</span>{" "}
                    <span className="t4">is</span>
                </p>
                <p className="l2">
                    <span className="t4">Sang-o Lee.</span>
                </p>
            </div>
            <div id="phase2" className="trait light">
                <p className="main-text">
                    <small className="sup-text">효율적으로일하고</small>
                    <span className="text-c">Efficient</span>
                    <span className="text-m">Efficient</span>
                    <span className="text-y">Efficient</span>
                </p>
            </div>
            <div id="phase3" className="trait light">
                <p className="main-text">
                    <small className="sup-text">협업을생각하며</small>
                    <span className="text-c">Supportive</span>
                    <span className="text-m">Supportive</span>
                    <span className="text-y">Supportive</span>
                </p>
            </div>
            <div id="phase4" className="trait light">
                <p className="main-text">
                    <small className="sup-text">성장하는</small>
                    <span className="text-c">Growing</span>
                    <span className="text-m">Growing</span>
                    <span className="text-y">Growing</span>
                </p>
            </div>
            <div id="phase5" className="dark">
                <p className="l1">
                    <span className="t1">웹퍼블리셔</span>
                    <span className="t2">이상오</span>
                    <span className="t3">입니다.</span>
                </p>
                <p className="l2">
                    <span className="t1">Efficient</span>
                    <span className="t2">Supportive</span>
                    <span className="t3">Growing</span>
                </p>
            </div>
            <button id="loading-close">SKIP</button>
        </div>
    );
}

export default Loading;
