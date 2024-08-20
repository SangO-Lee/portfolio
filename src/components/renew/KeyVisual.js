import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { AnimationMixer } from "three";
import MENU from "data/menu";

import renderSrc from "../../assets/img/renew/mechanical_keyboard.glb";
//technotron

function KeyVisual() {
    useEffect(() => {
        const canvas = document.querySelector("#canvas");
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const aspect = width / height;

        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });

        // 노출도 조절을 위한 렌더러 설정
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 1.0; // 기본값, 조절할 노출도 값

        // 조명 추가
        const ambientLight = new THREE.AmbientLight(0xffffff, 20); // 환경광
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 15); // 방향광
        directionalLight.position.set(70, 100, 0).normalize();
        scene.add(directionalLight);

        // 카메라 생성
        const camera = new THREE.PerspectiveCamera(45, aspect, 0.2, 1000);

        // 카메라 위치 설정 (x, y, z)
        camera.position.set(0, 5, -7);
        camera.fov = 13; // 기본값 75에서 더 좁은 값으로 줄이기
        camera.updateProjectionMatrix(); // 변경된 시야각을 적용

        // 배경색을 투명으로 설정
        renderer.setClearColor(0xffffff, 0);

        // OrbitControls 설정
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // 감속 효과
        controls.dampingFactor = 0.25; // 감속 비율
        controls.enableZoom = false; // 확대/축소 활성화
        controls.enablePan = true; // 팬 활성화

        // 회전 축을 위한 벡터 정의
        const rotationAxis = new THREE.Vector3(0.1, 1, 0).normalize(); // (x, y, z) 축

        // 회전 속도와 방향 설정
        // let rotationSpeed = 0.01;
        // let rotationDirection = 1; // 1: 왼쪽으로, -1: 오른쪽으로
        // let rotationLimit = Math.PI / 3; // 회전 제한 각도 (45도)

        //불러오기
        let loader = new GLTFLoader();
        let mixer;

        loader.load(
            renderSrc,
            function (gltf) {
                const model = gltf.scene;
                scene.add(model); // 로드된 3D 모델을 장면에 추가

                mixer = new AnimationMixer(model);

                // 모델의 애니메이션 클립을 가져와서 믹서에 추가
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });

                // 모델의 모든 메시를 순회하며 금속성 재질 적용
                // model.material = new THREE.MeshStandardMaterial({
                //     color: 0xffffff, // 기본 색상
                //     metalness: 0.0, // 금속성
                //     roughness: 0.0, // 거칠기
                // });

                // 반응형 처리
                const handleResize = () => {
                    let setWidth =
                        document.querySelector(".canvas-wrap").clientWidth;
                    let setHeight =
                        document.querySelector(".canvas-wrap").clientHeight;

                    renderer.setSize(setWidth, setHeight);
                    camera.aspect = setWidth / setHeight;
                    camera.updateProjectionMatrix();
                };
                handleResize();
                window.addEventListener("resize", handleResize);

                //particle 요소 추가
                const positions = [];
                for (let i = 0; i < 2000; i++) {
                    positions.push(Math.random() * 2000 - 1000);
                    positions.push(Math.random() * 2000 - 1000);
                    positions.push(Math.random() * 2000 - 1000);
                }

                const geometry = new THREE.BufferGeometry();
                const positionAttribute = new THREE.Float32BufferAttribute(
                    positions,
                    3
                );
                geometry.setAttribute("position", positionAttribute);

                const material = new THREE.PointsMaterial({
                    color: 0xffffff,
                    size: 3,
                });

                const particles = new THREE.Points(geometry, material);
                scene.add(particles);

                // 애니메이션 루프
                function animate() {
                    requestAnimationFrame(animate);

                    model.rotateOnAxis(rotationAxis, 0.005);
                    // 회전
                    // model.rotation.y += rotationSpeed * rotationDirection;

                    // 회전 방향 변경
                    // if (Math.abs(model.rotation.y) >= rotationLimit) {
                    //     rotationDirection *= -1; // 방향 반전
                    // }

                    // 애니메이션 믹서 업데이트
                    if (mixer) mixer.update(0.01);

                    renderer.render(scene, camera);
                }
                animate();
            },
            undefined,
            function (e) {
                console.error(e);
            }
        );

        //co work text 이동
        const coworkText = document.querySelector(".cowork-text");
        const jobText = document.querySelector(".job-text");
        const setTextPosition = () => {
            const scrollSpeed = 0.02;
            const scrollSpeed2 = 1.75;
            let scrollAmount =
                window.scrollY * scrollSpeed + window.innerHeight / 40;
            let scrollAmount2 =
                window.scrollY * scrollSpeed2 - window.innerHeight / 1.25;

            scrollAmount > 40
                ? (scrollAmount = 40)
                : (scrollAmount =
                      window.scrollY * scrollSpeed + window.innerHeight / 40);
            scrollAmount2 > 1000
                ? (scrollAmount2 = 1000)
                : (scrollAmount2 =
                      window.scrollY * scrollSpeed2 -
                      window.innerHeight / 1.25);

            coworkText.style.bottom = `${scrollAmount}px`;
            jobText.style.top = `${scrollAmount2}px`;
        };

        setTextPosition();
        window.addEventListener("scroll", () => {
            setTextPosition();
        });
    }, []);

    return (
        <section className="se1" id={MENU[0].id}>
            <div className="container fluid">
                <div className="visual-wrap">
                    <div className="txt-box">
                        <h2>
                            <small>SANG-O LEE</small>
                            코드로 <span className="highlight">협업</span>을
                            쓰다.
                        </h2>
                    </div>
                    <div className="canvas-wrap">
                        <canvas id="canvas"></canvas>
                    </div>
                </div>

                <p className="cowork-text">Collaborate through Code</p>
                <p className="job-text">web publisher</p>
            </div>
        </section>
    );
}

export default KeyVisual;
