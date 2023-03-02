import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./DigitalHealthScanningSystem.module.css";

const DigitalHealthScanningSystem = () => {
  return (
    <div className={styles.digitalHealthScanningSystem}>
      <div className={styles.background} />
      <div className={styles.shadow} />
      <div className={styles.healthScanningSystem}>
        <div className={styles.uiBackground} />
        <img
          className={styles.gridStructureIcon}
          alt=""
          src="../grid-structure.svg"
        />
        <img
          className={styles.dIllustrationIcon}
          alt=""
          src="../3d-illustration.svg"
        />
        <div className={styles.scanning}>
          <div className={styles.scanning1}>scanning...</div>
          <div className={styles.scanningChild} />
        </div>
        <img className={styles.logoIcon} alt="" src="../logo.svg" />
        <Button className={styles.cta} variant="outline-primary">
          STOP
        </Button>
        <div className={styles.leftComponents}>
          <div className={styles.pulseRate}>
            <div className={styles.pulseRateInner}>
              <div className={styles.pulseRate}>
                <div className={styles.groupChild} />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../group-363.svg"
                />
                <div className={styles.groupParent}>
                  <div className={styles.parent}>
                    <div className={styles.div}>60</div>
                    <div className={styles.div1}>60</div>
                    <div className={styles.bpm}>BPM</div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div2}>98</div>
                    <div className={styles.div3}>98</div>
                    <div className={styles.spo2}>SPO2</div>
                  </div>
                </div>
                <div className={styles.groupInner} />
                <div className={styles.pulseRateParent}>
                  <div className={styles.pulseRate1}>PULSE RATE</div>
                  <img
                    className={styles.nounLoading4097731Icon}
                    alt=""
                    src="../nounloading409773-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bodyTemperature}>
            <div className={styles.bodyTemperatureInner}>
              <div className={styles.groupContainer}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.groupChild1} />
                  <div className={styles.bodyTemperatureParent}>
                    <div className={styles.pulseRate1}>BODY TEMPERATURE</div>
                    <img
                      className={styles.nounLoading4097731Icon}
                      alt=""
                      src="../nounloading409773-11.svg"
                    />
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.container}>
                      <div className={styles.pulseRate1}>38.0</div>
                      <div className={styles.pulseRate1}>37.5</div>
                      <div className={styles.pulseRate1}>37.0</div>
                      <div className={styles.pulseRate1}>36.5</div>
                      <div className={styles.pulseRate1}>36.0</div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.pulseRate1}>0</div>
                      <div className={styles.pulseRate1}>12</div>
                      <div className={styles.pulseRate1}>24</div>
                    </div>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="../group-357.svg"
                    />
                  </div>
                  <img
                    className={styles.silkThermalImagingThermograIcon}
                    alt=""
                    src="../silkthermalimagingthermographyslideremovebgpreview-1@2x.png"
                  />
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.theNormalBodyTemperatureOfWrapper}>
                    <div
                      className={styles.theNormalBody}
                    >{`The normal body temperature of a person varies depending on gender, recent activity, food and fluid consumption, time of day `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
        </div>
        <img className={styles.closeIcon} alt="" src="../close.svg" />
        <div className={styles.rightComponents}>
          <div className={styles.bloodPressure}>
            <div className={styles.frameGroup}>
              <div className={styles.parent1}>
                <div className={styles.div}>120</div>
                <div className={styles.div1}>120</div>
                <div className={styles.sys}>Sys</div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.div}>80</div>
                <div className={styles.div1}>80</div>
                <div className={styles.dia}>Dia</div>
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild4} />
              <div className={styles.groupInner} />
              <div className={styles.bodyTemperatureParent}>
                <div className={styles.pulseRate1}>BLOOD PRESSURE</div>
                <img
                  className={styles.nounLoading4097731Icon}
                  alt=""
                  src="../nounloading409773-12.svg"
                />
              </div>
            </div>
            <img
              className={styles.bloodPressureChild}
              alt=""
              src="../group-369.svg"
            />
            <img
              className={styles.bloodPressureItem}
              alt=""
              src="../ellipse-615.svg"
            />
            <img
              className={styles.bloodPressureInner}
              alt=""
              src="../ellipse-616.svg"
            />
          </div>
          <div className={styles.breathingRate}>
            <div className={styles.theRespirationRateIsTheNuParent}>
              <div className={styles.theNormalBody}>
                The respiration rate is the number of breaths a person takes per
                minute. The rate is usually measured when a
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild2} />
                <div className={styles.groupChild3} />
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.groupChild8} />
              <div className={styles.groupChild1} />
              <div className={styles.bodyTemperatureParent}>
                <div className={styles.pulseRate1}>BREATHING RATE</div>
                <img
                  className={styles.nounLoading4097731Icon}
                  alt=""
                  src="../nounloading409773-13.svg"
                />
              </div>
              <img
                className={styles.alveoliWeb824x549RemovebgPIcon}
                alt=""
                src="../alveoli-web824x549removebgpreview-1@2x.png"
              />
            </div>
            <div className={styles.groupParent1}>
              <div className={styles.frameContainer}>
                <div className={styles.parent2}>
                  <div className={styles.pulseRate1}>30</div>
                  <div className={styles.pulseRate1}>20</div>
                  <div className={styles.pulseRate1}>10</div>
                </div>
                <div className={styles.parent3}>
                  <div className={styles.pulseRate1}>0</div>
                  <div className={styles.pulseRate1}>1</div>
                  <div className={styles.pulseRate1}>2</div>
                  <div className={styles.pulseRate1}>3</div>
                  <div className={styles.pulseRate1}>4</div>
                  <div className={styles.pulseRate1}>5</div>
                </div>
                <img
                  className={styles.groupChild10}
                  alt=""
                  src="../group-3571.svg"
                />
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.groupChild11} />
                <div className={styles.groupChild12} />
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.groupChild13} />
                <div className={styles.groupChild14} />
              </div>
              <div className={styles.rectangleParent6}>
                <div className={styles.groupChild15} />
                <div className={styles.groupChild16} />
              </div>
              <div className={styles.rectangleParent7}>
                <div className={styles.groupChild17} />
                <div className={styles.groupChild18} />
              </div>
              <div className={styles.rectangleParent8}>
                <div className={styles.groupChild19} />
                <div className={styles.groupChild20} />
              </div>
              <div className={styles.rectangleParent9}>
                <div className={styles.groupChild21} />
                <div className={styles.groupChild22} />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.lungInfectionIcon}
          alt=""
          src="../lung-infection.svg"
        />
      </div>
      <div className={styles.wwwnickelfoxcom}>www.nickelfox.com</div>
    </div>
  );

  
};

// Get the div element
const divElement = document.querySelector(`.${styles.parent}`);

// Update the content of the div every second
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  divElement.textContent = randomNumber;
}, 1000);

// Get the div element
const divElement1 = document.querySelector(`.${styles.group}`);

// Update the content of the div every second
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  divElement1.textContent = randomNumber;
}, 1000);


// Get the div element
const divElement2 = document.querySelector(`.${styles.parent1}`);

// Update the content of the div every second
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  divElement2.textContent = randomNumber;
}, 1000);

// Get the div element
const divElement3 = document.querySelector(`.${styles.groupDiv}`);


setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  divElement3.textContent = randomNumber;
}, 1000);


export default DigitalHealthScanningSystem;
