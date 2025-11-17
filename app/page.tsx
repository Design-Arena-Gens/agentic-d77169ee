'use client';

export default function Page() {
  return (
    <main className="scene-wrapper">
      <section className="scene">
        <div className="sky">
          <div className="moon" />
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
        </div>
        <div className="ground">
          <div className="hill hill-1" />
          <div className="hill hill-2" />
          <div className="hill hill-3" />
        </div>
        <div className="castle">
          <div className="tower tower-left">
            <div className="crenellation">
              <span />
              <span />
              <span />
            </div>
            <div className="window" />
          </div>
          <div className="keep">
            <div className="crenellation">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="banner banner-left">
              <span />
            </div>
            <div className="banner banner-right">
              <span />
            </div>
            <div className="gate">
              <div className="gate-arch" />
              <div className="gate-doors">
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="tower tower-right">
            <div className="crenellation">
              <span />
              <span />
              <span />
            </div>
            <div className="window shattered" />
            <div className="smoke">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="catapult">
          <div className="arm" />
          <div className="bucket" />
          <div className="frame frame-front" />
          <div className="frame frame-back" />
          <div className="wheel wheel-front" />
          <div className="wheel wheel-back" />
        </div>
        <div className="projectile" />
        <div className="impact">
          <span className="spark spark-1" />
          <span className="spark spark-2" />
          <span className="spark spark-3" />
          <span className="spark spark-4" />
        </div>
        <div className="fire">
          <span className="flame flame-1" />
          <span className="flame flame-2" />
          <span className="flame flame-3" />
        </div>
        <div className="arrows">
          <span className="arrow arrow-1" />
          <span className="arrow arrow-2" />
          <span className="arrow arrow-3" />
        </div>
        <div className="siege-text">
          <h1>Castle Under Attack</h1>
          <p>Defenders brace as the catapult launches a fiery assault.</p>
        </div>
      </section>
      <style jsx>{`
        .scene-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .scene {
          position: relative;
          width: min(90vw, 960px);
          aspect-ratio: 16 / 9;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(11, 29, 50, 0.95) 0%, rgba(6, 17, 31, 0.95) 65%, rgba(2, 10, 20, 0.98) 100%);
          box-shadow: 0 30px 120px rgba(15, 23, 42, 0.7), inset 0 0 80px rgba(10, 20, 40, 0.7);
        }

        .sky {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(200, 220, 255, 0.3) 0%, rgba(10, 20, 40, 0.1) 35%, transparent 60%);
          overflow: hidden;
        }

        .moon {
          position: absolute;
          top: 8%;
          left: 12%;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: radial-gradient(circle, #f9fafb 0%, #e2e8f0 45%, rgba(148, 163, 184, 0.75) 100%);
          box-shadow: 0 0 60px rgba(226, 232, 240, 0.4);
        }

        .cloud {
          position: absolute;
          width: 220px;
          height: 80px;
          background: rgba(100, 116, 139, 0.35);
          border-radius: 80px;
          filter: blur(1px);
        }

        .cloud::before,
        .cloud::after {
          content: "";
          position: absolute;
          background: inherit;
          border-radius: inherit;
        }

        .cloud::before {
          width: 140px;
          height: 60px;
          top: -20px;
          left: 30px;
        }

        .cloud::after {
          width: 160px;
          height: 70px;
          top: -10px;
          right: 20px;
        }

        .cloud-1 {
          top: 18%;
          right: 15%;
          animation: drift 28s linear infinite;
        }

        .cloud-2 {
          top: 6%;
          left: 32%;
          animation: drift 40s linear infinite reverse;
        }

        .cloud-3 {
          top: 30%;
          left: 10%;
          animation: drift 35s linear infinite;
        }

        @keyframes drift {
          from {
            transform: translateX(-50px);
          }
          to {
            transform: translateX(50px);
          }
        }

        .ground {
          position: absolute;
          bottom: 0;
          inset-inline: 0;
          height: 32%;
          background: linear-gradient(180deg, rgba(29, 35, 42, 0.4) 0%, rgba(13, 17, 23, 0.95) 65%, #05070f 100%);
          overflow: hidden;
        }

        .hill {
          position: absolute;
          bottom: -40px;
          width: 320px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(180deg, rgba(48, 69, 99, 0.7), rgba(10, 16, 26, 0.9));
          filter: blur(1px);
        }

        .hill-1 {
          left: 8%;
          transform: scale(1.2);
        }

        .hill-2 {
          left: 38%;
          width: 360px;
          height: 140px;
          transform: scale(1.1);
        }

        .hill-3 {
          right: 6%;
          width: 380px;
          height: 160px;
          transform: scale(1.3);
        }

        .castle {
          position: absolute;
          bottom: 16%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: flex-end;
          gap: 28px;
        }

        .tower {
          width: 120px;
          height: 240px;
          background: linear-gradient(180deg, #3b4252 0%, #1f2839 90%);
          border-radius: 10px;
          position: relative;
          box-shadow: inset 0 0 20px rgba(15, 23, 42, 0.7);
        }

        .tower::after {
          content: "";
          position: absolute;
          inset: 22px;
          border: 2px solid rgba(148, 163, 184, 0.15);
          border-radius: 6px;
        }

        .tower-left {
          transform: translateY(12px);
        }

        .tower-right .smoke {
          position: absolute;
          top: 5%;
          left: 50%;
          width: 8px;
          display: flex;
          gap: 6px;
          transform: translateX(-50%);
        }

        .smoke span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(226, 232, 240, 0.5);
          animation: smoke 6s ease-in-out infinite;
        }

        .smoke span:nth-child(2) {
          animation-delay: 0.6s;
          width: 16px;
          height: 16px;
        }

        .smoke span:nth-child(3) {
          animation-delay: 1.2s;
          width: 20px;
          height: 20px;
        }

        @keyframes smoke {
          0% {
            transform: translate(-10px, 0) scale(0.5);
            opacity: 0.7;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-40px, -90px) scale(1.4);
            opacity: 0;
          }
        }

        .crenellation {
          position: absolute;
          top: -32px;
          left: 10px;
          right: 10px;
          display: flex;
          justify-content: space-between;
        }

        .crenellation span {
          width: 28px;
          height: 32px;
          background: linear-gradient(180deg, #4c566a 0%, #2e3440 100%);
          border-radius: 6px 6px 0 0;
        }

        .window {
          position: absolute;
          top: 40%;
          left: 50%;
          width: 40px;
          height: 70px;
          transform: translateX(-50%);
          border-radius: 20px 20px 10px 10px;
          background: radial-gradient(circle, rgba(148, 163, 184, 0.8) 0%, rgba(71, 85, 105, 0.6) 100%);
        }

        .window.shattered {
          background: linear-gradient(135deg, rgba(148, 163, 184, 0.35) 20%, rgba(248, 113, 113, 0.7) 50%, rgba(15, 23, 42, 0.35) 90%);
          position: relative;
        }

        .window.shattered::after {
          content: "";
          position: absolute;
          inset: 12px 8px;
          background: transparent;
          border-top: 12px solid rgba(248, 113, 113, 0.9);
          border-right: 12px solid transparent;
          transform: rotate(12deg);
        }

        .keep {
          width: 220px;
          height: 260px;
          background: linear-gradient(180deg, #4c566a 0%, #2e3547 40%, #1b2333 100%);
          border-radius: 14px;
          position: relative;
          box-shadow: inset 0 0 40px rgba(12, 18, 31, 0.8);
        }

        .keep::after {
          content: "";
          position: absolute;
          inset: 16px;
          border: 2px solid rgba(148, 163, 184, 0.2);
          border-radius: 10px;
        }

        .banner {
          position: absolute;
          top: 16px;
          width: 16px;
          height: 120px;
          background: linear-gradient(180deg, rgba(249, 115, 22, 0.9) 0%, rgba(217, 70, 239, 0.85) 50%, rgba(126, 34, 206, 0.85) 100%);
          border-radius: 8px;
          overflow: hidden;
          filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.5));
          animation: banner-wave 3s ease-in-out infinite;
        }

        .banner-left {
          left: 24px;
        }

        .banner-right {
          right: 24px;
          animation-delay: 1.2s;
        }

        .banner span {
          position: absolute;
          bottom: -18px;
          left: 0;
          width: 100%;
          height: 36px;
          background: inherit;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
        }

        @keyframes banner-wave {
          0%,
          100% {
            transform: skewX(0deg);
          }
          50% {
            transform: skewX(6deg);
          }
        }

        .gate {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 130px;
          border-radius: 60px 60px 10px 10px;
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.95));
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .gate-arch {
          position: absolute;
          top: 16px;
          width: 100px;
          height: 100px;
          border: 6px solid rgba(148, 163, 184, 0.35);
          border-bottom: none;
          border-radius: 50%;
        }

        .gate-doors {
          position: relative;
          width: 86%;
          height: 70%;
          display: flex;
          gap: 6px;
        }

        .gate-doors span {
          flex: 1;
          border-radius: 6px;
          background: repeating-linear-gradient(180deg, rgba(71, 85, 105, 0.8), rgba(71, 85, 105, 0.8) 10px, rgba(30, 41, 59, 0.8) 10px, rgba(30, 41, 59, 0.8) 20px);
          border: 1px solid rgba(148, 163, 184, 0.3);
        }

        .catapult {
          position: absolute;
          bottom: 13%;
          left: 12%;
          width: 220px;
          height: 140px;
          transform-origin: bottom left;
          animation: recoil 6s ease-in-out infinite;
        }

        .arm {
          position: absolute;
          left: 36px;
          bottom: 92px;
          width: 16px;
          height: 120px;
          background: linear-gradient(180deg, #f59e0b 0%, #b45309 100%);
          border-radius: 12px;
          transform-origin: bottom center;
          transform: rotate(-20deg);
          animation: arm-swing 6s ease-in-out infinite;
        }

        .bucket {
          position: absolute;
          width: 52px;
          height: 38px;
          border-radius: 50% / 60%;
          background: linear-gradient(180deg, #f97316, #b45309);
          bottom: 160px;
          left: 12px;
          transform: rotate(-12deg);
          box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.25);
          animation: bucket-tilt 6s ease-in-out infinite;
        }

        .frame {
          position: absolute;
          width: 200px;
          height: 20px;
          background: linear-gradient(180deg, #fb923c 0%, #ea580c 100%);
          border-radius: 10px;
        }

        .frame-front {
          bottom: 34px;
          transform: rotate(-6deg);
        }

        .frame-back {
          bottom: 18px;
          transform: rotate(6deg);
        }

        .wheel {
          position: absolute;
          bottom: 0;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 6px solid rgba(248, 250, 252, 0.7);
          background: radial-gradient(circle at 30% 30%, rgba(248, 250, 252, 0.9), rgba(148, 163, 184, 0.2));
          box-shadow: inset 0 0 10px rgba(15, 23, 42, 0.6);
          animation: wheel-roll 6s ease-in-out infinite;
        }

        .wheel-front {
          left: 24px;
        }

        .wheel-back {
          right: 24px;
        }

        @keyframes recoil {
          0%,
          30%,
          100% {
            transform: translateY(0);
          }
          35% {
            transform: translateY(6px);
          }
          40% {
            transform: translateY(0);
          }
        }

        @keyframes arm-swing {
          0%,
          70%,
          100% {
            transform: rotate(-20deg);
          }
          32% {
            transform: rotate(-20deg);
          }
          40% {
            transform: rotate(-75deg);
          }
          55% {
            transform: rotate(-20deg);
          }
        }

        @keyframes bucket-tilt {
          0%,
          35%,
          100% {
            transform: translateY(0) rotate(-12deg);
          }
          40% {
            transform: translateY(-10px) rotate(8deg);
          }
          55% {
            transform: translateY(0) rotate(-12deg);
          }
        }

        @keyframes wheel-roll {
          0%,
          65%,
          100% {
            transform: rotate(0deg);
          }
          40% {
            transform: rotate(-35deg);
          }
        }

        .projectile {
          position: absolute;
          bottom: 28%;
          left: 18%;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: radial-gradient(circle, #facc15 0%, #f97316 40%, #7c2d12 100%);
          box-shadow: 0 0 20px rgba(248, 173, 75, 0.8);
          animation: trajectory 6s ease-in-out infinite;
        }

        @keyframes trajectory {
          0%,
          70% {
            opacity: 0;
            transform: translate(0, 0) scale(0.4);
          }
          28% {
            opacity: 0;
          }
          38% {
            opacity: 1;
            transform: translate(120px, -120px) scale(0.8);
          }
          45% {
            opacity: 1;
            transform: translate(360px, -200px) scale(1);
          }
          52% {
            opacity: 1;
            transform: translate(560px, -140px) scale(0.9);
          }
          58% {
            opacity: 0;
            transform: translate(650px, -40px) scale(0.4);
          }
        }

        .impact {
          position: absolute;
          bottom: 34%;
          right: 25%;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: impact-flash 6s ease-in-out infinite;
        }

        .impact::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          background: radial-gradient(circle, rgba(254, 215, 170, 0.8), rgba(249, 115, 22, 0.7) 45%, rgba(15, 23, 42, 0) 68%);
          filter: blur(6px);
          opacity: 0;
          animation: impact-flash 6s ease-in-out infinite;
        }

        .spark {
          position: absolute;
          width: 12px;
          height: 42px;
          background: linear-gradient(180deg, rgba(252, 211, 77, 0.9) 0%, rgba(249, 115, 22, 0) 100%);
          border-radius: 50% 50% 50% 50%;
          transform-origin: bottom center;
          opacity: 0;
          animation: sparks 6s ease-in-out infinite;
        }

        .spark-1 {
          transform: rotate(-15deg);
        }

        .spark-2 {
          transform: rotate(25deg);
          animation-delay: 0.1s;
        }

        .spark-3 {
          transform: rotate(-55deg);
          animation-delay: 0.15s;
        }

        .spark-4 {
          transform: rotate(55deg);
          animation-delay: 0.2s;
        }

        @keyframes impact-flash {
          0%,
          55%,
          100% {
            opacity: 0;
            transform: scale(0.4);
          }
          58% {
            opacity: 1;
            transform: scale(1.1);
          }
          65% {
            opacity: 0;
            transform: scale(0.7);
          }
        }

        @keyframes sparks {
          0%,
          55%,
          100% {
            opacity: 0;
            transform: scaleY(0) translateY(0);
          }
          58% {
            opacity: 1;
            transform: scaleY(1.1) translateY(-20px);
          }
          65% {
            opacity: 0;
            transform: scaleY(0.3) translateY(-48px);
          }
        }

        .fire {
          position: absolute;
          bottom: 26%;
          right: 21%;
          width: 70px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flame {
          position: absolute;
          bottom: 0;
          width: 40px;
          height: 60px;
          border-radius: 50% 50% 15% 15%;
          background: radial-gradient(circle at 50% 20%, rgba(254, 240, 138, 0.9) 0%, rgba(252, 211, 77, 0.8) 40%, rgba(249, 115, 22, 0.85) 65%, rgba(194, 65, 12, 0.7) 100%);
          box-shadow: 0 0 30px rgba(252, 211, 77, 0.6);
          animation: flame 1.8s ease-in-out infinite;
        }

        .flame-1 {
          animation-delay: 0.1s;
        }

        .flame-2 {
          width: 52px;
          height: 75px;
          animation-delay: 0.5s;
          opacity: 0.8;
        }

        .flame-3 {
          width: 32px;
          height: 48px;
          animation-delay: 0.9s;
          opacity: 0.6;
        }

        @keyframes flame {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.1);
          }
        }

        .arrows {
          position: absolute;
          bottom: 38%;
          right: 40%;
          width: 240px;
          height: 120px;
          pointer-events: none;
        }

        .arrow {
          position: absolute;
          width: 90px;
          height: 6px;
          background: linear-gradient(90deg, rgba(248, 250, 252, 0), rgba(191, 219, 254, 0.9));
          border-radius: 4px;
          transform-origin: left center;
          opacity: 0;
          animation: volley 4s ease-in-out infinite;
        }

        .arrow::after {
          content: "";
          position: absolute;
          right: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          clip-path: polygon(0 50%, 100% 0, 100% 100%);
          background: rgba(191, 219, 254, 0.9);
        }

        .arrow-1 {
          top: 40%;
          animation-delay: 0.4s;
        }

        .arrow-2 {
          top: 20%;
          animation-delay: 0.6s;
        }

        .arrow-3 {
          top: 60%;
          animation-delay: 0.8s;
        }

        @keyframes volley {
          0%,
          60%,
          100% {
            opacity: 0;
            transform: translateX(0) translateY(0) rotate(-12deg);
          }
          68% {
            opacity: 1;
            transform: translateX(140px) translateY(-20px) rotate(-6deg);
          }
          74% {
            opacity: 0;
            transform: translateX(230px) translateY(-40px) rotate(-2deg);
          }
        }

        .siege-text {
          position: absolute;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          text-shadow: 0 5px 20px rgba(0, 0, 0, 0.7);
          max-width: 70%;
        }

        .siege-text h1 {
          font-size: clamp(1.8rem, 3vw, 3rem);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .siege-text p {
          font-size: clamp(0.9rem, 1.4vw, 1.2rem);
          color: rgba(226, 232, 240, 0.75);
        }

        @media (max-width: 768px) {
          .scene {
            aspect-ratio: 4 / 5;
          }

          .castle {
            transform: translateX(-50%) scale(0.85);
            transform-origin: bottom center;
          }

          .catapult {
            transform-origin: bottom left;
            transform: scale(0.8);
            left: 4%;
          }
        }
      `}</style>
    </main>
  );
}
