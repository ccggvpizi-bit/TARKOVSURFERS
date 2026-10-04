// ... existing code ...
    './Staff/Killa.png',
    './Staff/SJ6.png',
    './Staff/pach.png',
    './Staff/obdolbos.png',
    './Staff/Location.jpg',
    './Staff/container.png'
];

self.addEventListener('install', event => {
// ... existing code ...
```

```html:Tarkov Surfers PWA:index.html
<!-- ... existing code ... -->
            <div class="text-left text-xs text-gray-300 mb-6 bg-black/60 p-3 rounded border border-gray-600 space-y-1">
                <p><b>W / ⬆️</b> : Jump over Barriers & onto Containers</p>
                <p><b>S / ⬇️</b> : Duck under Killa</p>
                <p><b>A/D / ⬅️➡️</b> : Change Lanes</p>
                <hr class="border-gray-700 my-1">
<!-- ... existing code ... -->
        const imgLocation = new Image();
        imgLocation.src = 'Staff/Location.jpg';

        const imgContainer = new Image();
        imgContainer.src = 'Staff/container.png';

        // Sanitar Speech Quotes
<!-- ... existing code ... -->
        const player = {
            lane: 0, // -1, 0, 1
            targetLane: 0,
            y: 0.85, 
            state: 'run', // run, jump, duck
            stateTimer: 0,
            flashTimer: 0,
            mountedCid: null
        };

        const sanitar = {
            lane: 0,
            targetLane: 0,
            state: 'run',
            stateTimer: 0,
            actionCooldown: 2.5,
            mountedCid: null
        };

        let objects = []; 
<!-- ... existing code ... -->
        function spawnObject() {
            if (gameState !== 'playing') return;
            
            if (Math.random() > 0.035 * (speedMultiplier * baseSpeed)) return;
            
            const lane = Math.floor(Math.random() * 3) - 1;
            const recentInLane = objects.some(o => o.lane === lane && o.z < 2.0);
            if (recentInLane) return;

            // Spawn long container
            if (Math.random() < 0.06) {
                let cid = Math.random();
                for (let i = 0; i < 10; i++) {
                    objects.push({
                        lane: lane,
                        z: 0.02 - (i * 0.04), // densely pack segments to form a long object
                        type: i === 0 ? 'container_front' : 'container_body',
                        isItem: false,
                        img: imgContainer,
                        active: true,
                        cid: cid
                    });
                }
                return;
            }

            let type, isItem = false, imgAsset = null;
            
            if (Math.random() < 0.22) {
<!-- ... existing code ... -->
            if (player.stateTimer > 0) {
                player.stateTimer -= dt;
                if (player.stateTimer <= 0) player.state = 'run';
            }
            
            if (player.flashTimer > 0) {
                player.flashTimer -= dt;
            }

            // Maintain player mount state
            if (player.mountedCid) {
                let under = objects.find(o => o.cid === player.mountedCid && o.lane === Math.round(player.lane) && o.z > 0.70 && o.z < 0.95);
                if (!under) player.mountedCid = null;
            }

            // Sanitar active AI behavior
            sanitar.actionCooldown -= dt;
            if (sanitar.actionCooldown <= 0) {
                sanitar.actionCooldown = 1.2 + Math.random() * 1.8;
                let upcomingObj = objects.find(o => o.z > 0.02 && o.z < 0.14 && o.lane === Math.round(sanitar.targetLane));
                if (upcomingObj) {
                    if (upcomingObj.type === 'high' || upcomingObj.type === 'container_front') {
                        sanitar.state = 'jump';
                        sanitar.stateTimer = 0.55;
                    } else if (upcomingObj.type === 'low') {
                        sanitar.state = 'duck';
                        sanitar.stateTimer = 0.55;
                    } else if (upcomingObj.type === 'container_body') {
                        sanitar.targetLane = sanitar.lane === 0 ? (Math.random() > 0.5 ? 1 : -1) : 0;
                    }
                } else {
                    if (Math.random() < 0.25) {
                        sanitar.targetLane = Math.floor(Math.random() * 3) - 1;
                    }
                }
            }

            sanitar.lane += (sanitar.targetLane - sanitar.lane) * 12 * dt;
            if (sanitar.stateTimer > 0) {
                sanitar.stateTimer -= dt;
                if (sanitar.stateTimer <= 0) sanitar.state = 'run';
            }

            // Maintain sanitar mount state visually
            let sanZ = 0.15;
            let objAtSanitar = objects.find(o => Math.abs(o.lane - sanitar.lane) < 0.45 && o.z > sanZ - 0.05 && o.z < sanZ + 0.05);
            if (objAtSanitar && objAtSanitar.type === 'container_front' && sanitar.state === 'jump') {
                sanitar.mountedCid = objAtSanitar.cid;
            }
            if (sanitar.mountedCid) {
                let under = objects.find(o => o.cid === sanitar.mountedCid && Math.abs(o.lane - sanitar.lane) < 0.45 && o.z > sanZ - 0.1 && o.z < sanZ + 0.15);
                if (!under) sanitar.mountedCid = null;
            }

            spawnObject();

            for (let i = objects.length - 1; i >= 0; i--) {
                let obj = objects[i];
                obj.z += currentSpeed * dt * 0.75; 
                
                if (obj.active && obj.z > 0.78 && obj.z < 0.90) {
                    if (Math.abs(obj.lane - player.lane) < 0.45) {
                        if (obj.type === 'container_front') {
                            obj.active = false;
                            if (player.state === 'jump') {
                                player.mountedCid = obj.cid;
                            } else {
                                applyPenalty();
                            }
                        } else if (obj.type === 'container_body') {
                            if (player.mountedCid !== obj.cid) {
                                obj.active = false;
                                applyPenalty(); // Hit the side of the container
                            }
                        } else if (!player.mountedCid) {
                            // Only hit normal ground obstacles if not on container
                            handleCollision(obj);
                        }
                    }
                }

                if (obj.z > 1.25) {
                    objects.splice(i, 1);
                }
            }

            for (let i = floatingTexts.length - 1; i >= 0; i--) {
<!-- ... existing code ... -->
            distanceTraveled += currentSpeed * dt * 2;
        }

        function applyPenalty() {
            AudioSys.hit();
            player.flashTimer = 0.5;
            gameTimer += 10;
            addFloatingText("+10s PENALTY!", "#ff3333");
        }

        function handleCollision(obj) {
            obj.active = false; 

            if (obj.isItem) {
<!-- ... existing code ... -->
                document.getElementById('buff-display').innerHTML = badgeHtml;

            } else {
                let hit = false;
                if (obj.type === 'high' && player.state !== 'jump') hit = true;
                if (obj.type === 'low' && player.state !== 'duck') hit = true;

                if (hit) {
                    applyPenalty();
                }
            }
        }

        function draw() {
<!-- ... existing code ... -->
            if (sanitar.state === 'jump') {
                let t = 1 - (sanitar.stateTimer / 0.55);
                sOffsetY = -Math.sin(t * Math.PI) * (height * 0.12);
                sScaleY = 1.2;
                sScaleX = 0.85;
            } else if (sanitar.state === 'duck') {
                sScaleY = 0.55;
                sScaleX = 1.2;
                sOffsetY = sanitarSize * 0.12;
            }
            
            if (sanitar.mountedCid) {
                sOffsetY -= sanitarSize * 0.6; // Draw Sanitar elevated
            }
            
            ctx.scale(sScaleX, sScaleY);

            if (imgSanitar.complete && imgSanitar.naturalWidth !== 0) {
<!-- ... existing code ... -->
            objects.forEach(obj => {
                if (!obj.active && obj.isItem) return;
                if (obj.z <= 0) return; // Prevent Math.pow NaN on negative Z behind horizon
                
                let pz = Math.pow(obj.z, 2.2); 
                let objY = horizonY + pz * (height - horizonY);
                
                let targetMaxX = centerX + obj.lane * width * 0.45;
                let targetMinX = centerX + obj.lane * width * 0.02;
                let objX = targetMinX + pz * (targetMaxX - targetMinX);

                let scale = 0.25 + pz * 1.3;
                let baseSizeFactor = obj.type.startsWith('container') ? 0.45 : (obj.isItem ? 0.09 : 0.28);
                let spriteSize = height * baseSizeFactor * scale;
                
                ctx.save();
                ctx.translate(objX, objY);
                ctx.globalAlpha = obj.active ? 1.0 : 0.3;

                if (obj.img && obj.img.complete && obj.img.naturalWidth !== 0) {
                    if (obj.type.startsWith('container')) {
                        // Draw container stretching upwards a bit
                        ctx.drawImage(obj.img, -spriteSize/2, -spriteSize * 0.8, spriteSize, spriteSize * 0.8);
                    } else {
                        ctx.drawImage(obj.img, -spriteSize/2, -spriteSize, spriteSize, spriteSize);
                    }
                } else {
                    ctx.fillStyle = obj.isItem ? '#0ff' : '#f00';
<!-- ... existing code ... -->
            if (player.state === 'jump') {
                let t = 1 - (player.stateTimer / 0.55);
                pOffsetY = -Math.sin(t * Math.PI) * (height * 0.22); 
                pScaleY = 1.25; 
                pScaleX = 0.85;
            } else if (player.state === 'duck') {
                pScaleY = 0.55; 
                pScaleX = 1.25;
                pOffsetY = basePlayerSize * 0.12;
            }

            if (player.mountedCid) {
                pOffsetY -= basePlayerSize * 0.7; // Draw player elevated
            }

            ctx.scale(pScaleX, pScaleY);
            
            if (imgDoctor.complete && imgDoctor.naturalWidth !== 0) {
<!-- ... existing code ... -->
            distanceTraveled = 0;
            objects = [];
            floatingTexts = [];
            player.lane = 0;
            player.targetLane = 0;
            player.state = 'run';
            player.mountedCid = null;
            sanitar.lane = 0;
            sanitar.targetLane = 0;
            sanitar.state = 'run';
            sanitar.mountedCid = null;
            voiceTimer = 5.0;
            currentQuote = "";
<!-- ... existing code ... -->