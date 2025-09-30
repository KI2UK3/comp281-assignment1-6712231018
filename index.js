import { getContext, FPS } from "./utils-module.js";

// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์


	function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
		const ctx = getContext("#myCanvas");

	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
		const config = {
		width : 800,
		height : 600,
		bgColor : "skyblue",
		debug : true,
		};
		
// กำหนดขนาดของ canvas ตามค่า config
		ctx.canvas.width = config.width;
		ctx.canvas.height = config.height;

// กำหนดอ็อบเจกต์สำหรับเก็บข้อมูลเมฆแต่ละก้อน
		const cloud1 = {
    	x: 40, 
    	y: 30,
    	speed: 0.3, // ความเร็วในการเคลื่อนที่(หน่วยเป็นพิกเซล/เฟรม)
    	width: 90,  // ความกว้างโดยประมาณของเมฆก้อนนี้
	};
		const cloud2 = {
    	x: 500, 
    	y: 70,
    	speed: 0.3, 
    	width: 90, 
	};
		const cloud3 = {
    	x: 800, 
   	 	y: 120,
    	speed: -0.3,
    	width: 90,  
	};
//กำหนดอ็อบเจกต์สำหรับเก็บข้อมูลนก
		const bird1 = {
		x: 300,
		y: 110,
		speed: -0.7, 
		width: 30,  
	};

		const sun1 = {
		x: 100,
		y: 100,
		speed: 0.3, 
		width: 30,  
	};

	function draw() {
		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		// วาดรูปจากส่วนนี้ไป **แนะนำให้วาดจากรูปที่อยู่ด้านหลังไปด้านหน้าตามลำดับ**
		// ใช้ภาพจาก MP1-app-graphics-2d.jpg เป็นแนวทางในการวาดรูป แต่จะวาดอย่างไรก็ได้ตามต้องการ

		// TODO: 

// เริ่มต้นวาดภูเขาลูกที่ 1
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "rgb(15, 195, 15)";
		ctx.lineWidth = 2;
		ctx.moveTo(0, 200);
		ctx.bezierCurveTo(100, 150, 200, 150, 300, config.height/2);
		ctx.lineTo(0, config.height/2);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		ctx.restore();
		
// เริ่มต้นวาดภูเขาลูกที่ 2
		ctx.save();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "rgb(15, 195, 15)";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(265, 250);
		ctx.bezierCurveTo(500, 10, 550, 300, config.width, 150);
		ctx.lineTo(config.width, config.height/2);
		ctx.lineTo(300, config.height/2);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		ctx.restore();

//เริ่มวาดออร่ารอบดวงอาทิตย์แบบสี่เหลี่ยมซ้อนกัน
		ctx.save(); //เซฟตำแหน่งเดิม
		ctx.translate(sun1.x, sun1.y); // ศูนย์กลางดวงอาทิตย์
		ctx.fillStyle = "red";
	for (let i = 0; i < 8; i++) {// วนลูป 8 ครั้ง
   		ctx.save(); 
    	ctx.rotate((Math.PI / 5) * i); // หมุนทีละ 36 องศา
   		ctx.beginPath();
    	ctx.rect(-30, -30, 60, 60); // วาดสี่เหลี่ยมจัตุรัสขนาด 60x60
    	ctx.fill();
    	ctx.restore(); 
	}
		ctx.restore(); //คืนค่าตำแหน่งเดิม
//เริ่มวาดดวงอาทิตย์
		ctx.save();
		ctx.beginPath();
		ctx.translate(sun1.x, sun1.y);
		ctx.fillStyle = "yellow";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.arc(0, 0, 30, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
		ctx.restore();

// เริ่มต้นการวาดรูปเมฆ 1
		ctx.save()
		ctx.beginPath();
		ctx.translate(cloud1.x, cloud1.y);
		ctx.fillStyle = "lightgray";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.moveTo(0, 10);
		ctx.bezierCurveTo(-15, 10, -15, -10, 0, -10);
		ctx.bezierCurveTo(5, -25, 25, -25, 30, -10);
		ctx.bezierCurveTo(45, -10, 45, 10, 30, 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore()

// เริ่มต้นการวาดรูปเมฆ 2
		ctx.save()
		ctx.beginPath();
		ctx.translate(cloud2.x, cloud2.y);
		ctx.fillStyle = "lightgray";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.moveTo(0, 10);
		ctx.bezierCurveTo(-15, 10, -15, -10, 0, -10);
		ctx.bezierCurveTo(5, -25, 25, -25, 30, -10);
		ctx.bezierCurveTo(45, -10, 45, 10, 30, 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore()

// เริ่มต้นการวาดรูปเมฆ 3
		ctx.save()
		ctx.beginPath();
		ctx.translate(cloud3.x, cloud3.y);
		ctx.fillStyle = "lightgray";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.moveTo(0, 10);
		ctx.bezierCurveTo(-15, 10, -15, -10, 0, -10);
		ctx.bezierCurveTo(5, -25, 25, -25, 30, -10);
		ctx.bezierCurveTo(45, -10, 45, 10, 30, 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore()

// เริ่มต้นการวาดรูปนก
        ctx.save()
		ctx.beginPath();
		ctx.translate(bird1.x, bird1.y);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.moveTo(0, 10);
		ctx.quadraticCurveTo(20, -5, 20, 20);
		ctx.quadraticCurveTo(20, -5, 40, 15);
		ctx.stroke();
		ctx.restore()
		
// อนิเมชันการเคลื่อนที่ของเมฆ
// เมฆก้อนที่ 1
		cloud1.x += cloud1.speed;//  อัปเดตตำแหน่งแนวนอนของเมฆ โดยบวกความเร็วเข้าไป ทำให้เมฆเคลื่อนที่
    if (cloud1.x > config.width + cloud1.width) { // ตรวจสอบว่าเมฆเคลื่อนที่
    	cloud1.x = -cloud1.width; // รีเซ็ตตำแหน่ง x 
	}
// เมฆก้อนที่ 2
		cloud2.x += cloud2.speed;
    if (cloud2.x > config.width + cloud2.width) {
    	cloud2.x = -cloud2.width; 
	}
// เมฆก้อนที่ 3
		cloud3.x += cloud3.speed;// อัปเดตตำแหน่ง x 
    if (cloud3.x < -cloud3.width) { // ตรวจสอบว่าเมฆเคลื่อนที่
    	cloud3.x = config.width; // รีเซ็ตตำแหน่ง x 
	}

// อนิเมชันการเคลื่อนที่ของนก
		bird1.x += bird1.speed; // อัปเดตตำแหน่ง x ของนกโดยเพิ่มค่าความเร็วเข้าไป
	if (bird1.x < -bird1.width) { // ถ้านกหลุดซ้าย
    	bird1.x = config.width;    // กลับมาด้านขวา
	}

// อนิเมชันการเคลื่อนที่ของดวงอาทิตย์

		sun1.x += sun1.speed; // อัปเดตตำแหน่ง x ของดวงอาทิตย์โดยเพิ่มค่าความเร็วเข้าไป
	if (sun1.x > ctx.canvas.width + sun1.width) { // ถ้าดวงอาทิตย์หลุดขวา
    	sun1.x = -sun1.width; // กลับมาด้านซ้าย
}


// เริ่มต้นวาดพื้นหญ้าสีเขียว
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "green";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.moveTo(0, config.height/2);
		ctx.lineTo(config.width, config.height/2);
		ctx.lineTo(config.width, config.height);
		ctx.lineTo(0, config.height);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		
// เริ่มต้นวาดแม่น้ำสีน้ำเงิน
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "rgb(7, 186, 241)"; // กำหนดสีน้ำเงิน
		ctx.strokeStyle = "brack"; // กำหนดสีเส้นขอบเป็นสีดำ
		ctx.lineWidth = 1; // กำหนดความหนาของเส้นขอบ
		ctx.moveTo(config.width/2, config.height/2);
		ctx.bezierCurveTo(200, 500, 550, 400, config.width/2, config.height);
		ctx.lineTo(220, config.height);
		ctx.bezierCurveTo(400, 400, 100, 500, 250, config.height/2);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();

// วาดลายคลื่นน้ำ
		/*ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.moveTo(250, 450);
		ctx.bezierCurveTo(270, 430, 290, 470, 310, 450);
		ctx.stroke();
		ctx.restore();
		}*/

// ฟังก์ชันสำหรับวาดคลื่นน้ำ
		function drawwaves(ctx, x, y) {
    	ctx.save();
    	ctx.beginPath();
    	ctx.strokeStyle = "black";
    	ctx.lineWidth = 1;
   	 	ctx.moveTo(x, y);
    	ctx.bezierCurveTo(x + 20, y - 20, x + 40, y + 20, x + 60, y);
    	ctx.stroke();
    	ctx.restore();
	}
// กำหนดตำแหน่งของคลื่นน้ำหลายอัน
		const wavePositions = [ // เก็บตำแหน่งของคลื่นน้ำ
    	[290, 450],
    	[320, 500],
    	[270, 330],
    	[245, 385],
    	[300, 560]
		];
// วาดคลื่นน้ำหลายอัน
		for (const [x, y] of wavePositions) {  // วาดคลื่นน้ำตามตำแหน่งที่กำหนดเอง
    	drawwaves(ctx, x, y);   // เรียกใช้ฟังก์ชันวาดคลื่นน้ำ
		}


// เริ่มวาดบ้านตัวบ้าน
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.fillStyle = "saddlebrown";
		ctx.fillRect(500, 400, 200, 60);
		ctx.strokeRect(500, 400, 200, 60);
		ctx.restore();
		
// วาดหลังคาบ้าน
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "saddlebrown";
		ctx.lineWidth = 1;
		ctx.moveTo(500, 400);
		ctx.lineTo(530, 350);
		ctx.lineTo(560, 400);
		ctx.moveTo(700, 400);
		ctx.lineTo(670, 350);
		ctx.lineTo(530, 350);
		ctx.lineTo(560, 400);
		ctx.moveTo(560, 400);
		ctx.lineTo(560, 460);
		ctx.moveTo(500, 400);
		ctx.lineTo(700, 400)
		ctx.fill();
		ctx.stroke();
		ctx.restore();

// วาดประตูบ้าน
		ctx.save();
		ctx.fillStyle = "yellow";
		ctx.fillRect(520, 430, 20, 30);
		ctx.strokeRect(520, 430, 20, 30);
		ctx.restore();

// วาดหน้าต่างบ้าน
		ctx.save();
		ctx.fillStyle = "yellow";  // หน้าต่างบานที่ 1
		ctx.fillRect(670, 420, 20, 20);
		ctx.strokeRect(670, 420, 20, 20);
		ctx.fillRect(650, 420, 20, 20);
		ctx.strokeRect(650, 420, 20, 20);

		ctx.fillRect(600, 420, 20, 20); // หน้าต่างบานที่ 2
		ctx.strokeRect(600, 420, 20, 20);
		ctx.fillRect(580, 420, 20, 20);
		ctx.strokeRect(580, 420, 20, 20);
		ctx.restore();

// เริ่มต้นวาดต้นไม้
		function drawTree(ctx, x, y) { // ฟังก์ชันวาดต้นไม้
		ctx.save();
// ลำต้นต้นไม้
		ctx.fillStyle = "saddlebrown";
		ctx.fillRect(x, y, 15, 50);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.strokeRect(x, y, 15, 50);
// ใบต้นไม้
		ctx.translate(x-8, y);// เลื่อนจุดอ้างอิงไปที่ตำแหน่งยอดต้นไม้
		ctx.beginPath();
		ctx.fillStyle = "rgb(15, 195, 15)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.moveTo(0, 10);
		ctx.bezierCurveTo(-15, 10, -15, -10, 0, -10);
		ctx.bezierCurveTo(5, -25, 25, -25, 30, -10);
		ctx.bezierCurveTo(45, -10, 45, 10, 30, 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
	}
		const treePositions = [ // เก็บตำแหน่งของต้นไม้
    	[150, 330],
    	[50, 330],
    	[750, 370],
    	[400, 340],
    	[700, 330]
	];

	for (const [x, y] of treePositions) { // วาดต้นไม้ตามตำแหน่งที่กำหนดเอง
    	drawTree(ctx, x, y); // เรียกใช้ฟังก์ชันวาดต้นไม้
	}

//เริ่มวาดหญ้า
		ctx.save();
		ctx.fillStyle = "green";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
	for (let i = 0; i < config.width; i += 15) {   // วนลูปตามความกว้างของ canvas โดยเพิ่มทีละ 15 พิกเซล ไปจนสุดความกว้างของ canvas
		ctx.beginPath();
		ctx.moveTo(i, config.height/2);// จุดเริ่มต้นที่พื้นดิน
		ctx.lineTo(i + 7.5, config.height/2 - 15);// จุดยอดของหญ้า
		ctx.lineTo(i + 15, config.height/2);// จุดสิ้นสุดที่พื้นดิน
		ctx.fill();
		ctx.stroke();
	}
		ctx.restore();

//วาดแปลงนาข้าว
		ctx.save();
		ctx.fillStyle = "rgb(64, 44, 3)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.fillRect(7, 425, 207, 165);
		ctx.strokeRect(7, 425, 207, 165);
		ctx.restore();

//เริ่มวาดต้นข้าว
		const ricePositions = [];// เก็บตำแหน่งของต้นข้าว
		const startX = 15; // จุดเริ่มต้นของนาข้าว
		const startY = 420; // จุดเริ่มต้นของนาข้าว
		const riceWidth = 10;   // ระยะห่างแนวนอน
		const riceHeight = 20;  // ระยะห่างแนวตั้ง
		const riceCols = 20;    // จำนวนต้นข้าวต่อแถว
		const riceRows = 8;     // จำนวนแถว

	for (let row = 0; row < riceRows; row++) {// วนลูปตามจำนวนแถว
    	for (let col = 0; col < riceCols; col++) { // วนลูปตามจำนวนต้นข้าวในแต่ละแถว
        const x = startX + col * riceWidth; // คำนวณตำแหน่ง x ของต้นข้าวตามระยะห่าง riceWidth
        const y = startY + row * riceHeight;// คำนวณตำแหน่ง y ของต้นข้าวตามระยะห่าง riceHeight
        ricePositions.push([x, y]); // เพิ่มตำแหน่งของต้นข้าวลงในอาร์เรย์
    	}
}

// ฟังก์ชันวาดต้นข้าว
	function drawRice(ctx, x, y) {
    	ctx.save();
    	ctx.beginPath();
    	ctx.strokeStyle = "yellow";
    	ctx.lineWidth = 1;
    	ctx.moveTo(x, y); // ลำต้น          
    	ctx.lineTo(x, y + 20);  // ยาว 20 พิกเซล    
    	ctx.lineTo(x - 5, y + 10);  // ใบซ้าย
    	ctx.moveTo(x, y + 20);      // กลับไปที่ปลายลำต้น
    	ctx.lineTo(x + 5, y + 10);  // ใบขวา	
    	ctx.stroke();
    	ctx.restore();
	}

// วาดต้นข้าวตามตำแหน่งที่กำหนดเอง
	for (const [x, y] of ricePositions) { // วาดต้นข้าวตามตำแหน่งที่กำหนดเอง
    	drawRice(ctx, x, y); // เรียกใช้ฟังก์ชันวาดต้นข้าว
	}	

		// เขตสิ้นสุดของการวาดรูป


		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);

		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
}