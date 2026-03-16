const directTo = () => {
    console.log("Redirecting to login page...");
    window.location.href = "login.html";
};

const btnStart = document.getElementsByClassName("btn-start")[0];
if (btnStart) {
    btnStart.addEventListener("click", () => {
        setTimeout(directTo, 500);
    });
}

const inputField = document.querySelector(".input-field");
const btnConfirm = document.querySelector(".btn-confirm");
const loginModal = document.querySelector('.overlay');

btnConfirm.disabled = true;

inputField.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    if (value.length > 0) {
        btnConfirm.disabled = false;
    } else {
        btnConfirm.disabled = true;
    }
    // Ẩn thông báo lỗi khi người dùng bắt đầu nhập
    document.getElementById('error-message').style.display = 'none';
});
var count = 200;
var defaults = { origin: { y: 0.7 } };
let fire = () => {
    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff85a2', '#ffb1c1'] });
    fire(0.2, { spread: 60, colors: ['#ff4d6d', '#ff85a2'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#ffb1c1', '#ffffff'] });
}
btnConfirm.addEventListener('click', () => {
    const inputName = inputField.value.toLowerCase().trim();

    // 1. Tìm kiếm trong danh sách bạn nữ (mảng data)
    const foundUser = data.find(user => {
        const dbName = user.name.toLowerCase();
        return dbName.includes(inputName);
    });

    if (foundUser && inputName.length >= 2) {
        // --- GIỮ NGUYÊN LOGIC CHO BẠN NỮ ---
        currentUserInSession = foundUser.name.toLowerCase();
        loginModal.style.opacity = '0';

        setTimeout(() => {
            loginModal.style.display = 'none';
            document.getElementById('wish-name').innerText = "Xin chào \n" + foundUser.name + "!";
            document.getElementById('wish-dob').innerText = "Ngày sinh: " + foundUser.dob;
            document.getElementById('wish-message').innerText = foundUser.message;
            const wishCont = document.getElementById('wish-container');
            wishCont.style.display = 'flex';
            setTimeout(() => wishCont.classList.add('active-fade'), 10);
            fire(); //
        }, 1000);
    }
    // 2. Nếu không tìm thấy nữ, duyệt vòng for qua mảng boysData
    else {
        let foundBoyName = null;
        for (let i = 0; i < boysData.length; i++) {
            if (boysData[i].toLowerCase().includes(inputName)) {
                foundBoyName = boysData[i];
                break; // Tìm thấy thì dừng vòng lặp
            }
        }

        if (foundBoyName && inputName.length >= 2) {
            // --- XỬ LÝ CHO BẠN NAM ---
            loginModal.style.opacity = '0';

            setTimeout(() => {
                loginModal.style.display = 'none';
                document.getElementById('wish-name').innerText = "Chào ông, \n" + foundBoyName + "!";
                document.getElementById('wish-dob').innerText = "Thành viên hội Ga-lăng";
                document.getElementById('wish-message').innerText = "Ngại ngần gì mà không gửi những lời yêu thương đến bạn nữ bên cạnh mình nhỉ? 😎";

                const wishCont = document.getElementById('wish-container');
                wishCont.style.display = 'flex';

                // Giữ cấu trúc nhưng đổi nội dung nút cho nam
                const closeBtn = document.querySelector('.btn-close-wish');
                if (closeBtn) closeBtn.innerText = "Ok luôn! 👌";

                setTimeout(() => wishCont.classList.add('active-fade'), 10);
                // Không gọi fire() cho nam nếu bạn muốn giữ bất ngờ cho nữ
            }, 1000);
        }
        else {
            // 3. Cuối cùng nếu không tìm thấy ai mới hiện lỗi
            document.getElementById('error-message').style.display = 'block';
        }
    }
});

let currentRotation = 0;
let isSpinning = false;

// Hàm mở vòng quay (Sửa nút trong HTML thành onclick="openWheel()")


function drawWheel() {
    const canvas = document.getElementById('wheel-canvas');
    const ctx = canvas.getContext('2d');
    const arc = (2 * Math.PI) / boysData.length;

    // Bảng màu Pastel Material Design sang trọng
    const pastelColors = ['#F8BBD0', '#E1BEE7', '#FFCDD2', '#FCE4EC', '#F3E5F5'];

    canvas.width = 800; canvas.height = 800; // Vẽ độ phân giải cao
    ctx.clearRect(0, 0, 800, 800);

    boysData.forEach((name, i) => {
        const angle = i * arc;
        ctx.beginPath();
        ctx.fillStyle = pastelColors[i % pastelColors.length];
        ctx.moveTo(400, 400);
        ctx.arc(400, 400, 395, angle, angle + arc); // Bán kính gần chạm viền
        ctx.fill();

        // Đường kẻ phân cách mờ
        ctx.strokeStyle = "rgba(255,255,255,0.4)"; ctx.lineWidth = 1; ctx.stroke();

        ctx.save();
        ctx.translate(400, 400);
        ctx.rotate(angle + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#ad1457"; // Màu chữ hồng đậm cho dễ đọc
        ctx.font = "bold 22px 'Arial', sans-serif";
        ctx.fillText(name, 370, 10);
        ctx.restore();
    });
}
function openWheel() {
    document.getElementById('wish-container').style.display = 'none';
    document.getElementById('wheel-backdrop').style.display = 'flex';
    drawWheel();
}
// Xử lý sự kiện quay
document.getElementById('spin-btn').addEventListener('click', () => {
    if (isSpinning) return;
    isSpinning = true;

    const canvas = document.getElementById('wheel-canvas');
    const backdrop = document.getElementById('wheel-backdrop');

    // 1. Kích hoạt hiệu ứng đèn chớp LED
    backdrop.classList.add('spinning');
    document.getElementById('winner-display').innerText = "Vòng quay đang chọn...";
    document.getElementById('winner-display').style.color = "#888";

    // --- BẮT ĐẦU PHẦN CƠ CẤU ---
    // Giả sử biến currentUserInSession chứa tên người đang đăng nhập (ví dụ: "Trần Trang Linh")
    // Bạn cần đảm bảo đã lưu tên này lúc người dùng nhấn "Xác nhận" ở bước đăng nhập.

    const riggedPairs = {
        "trần trang linh": "Nguyễn Minh Trí"
    };

    let targetAngle;
    const sliceSize = 360 / boysData.length;
    const targetBoyName = riggedPairs[currentUserInSession.toLowerCase()];

    if (targetBoyName) {
        // Tìm vị trí của bạn nam được chỉ định trong danh sách
        const targetIndex = boysData.indexOf(targetBoyName);
        if (targetIndex !== -1) {
            // Tính toán góc để lát cắt đó dừng đúng ở vị trí 3 giờ (0 độ)
            // Công thức: 360 - (vị trí * độ rộng ô) - (nửa ô để vào giữa)
            targetAngle = (360 - (targetIndex * sliceSize)) - (sliceSize / 2);
        } else {
            targetAngle = Math.floor(Math.random() * 360);
        }
    } else {
        // Nếu không phải đối tượng "cơ cấu", quay ngẫu nhiên
        targetAngle = Math.floor(Math.random() * 360);
    }
    // --- KẾT THÚC PHẦN CƠ CẤU ---

    // 2. Tính toán độ xoay tổng cộng
    const extraRounds = 12;
    // Reset góc hiện tại về 0 (bằng cách trừ đi currentRotation % 360) rồi cộng góc đích
    currentRotation += (extraRounds * 360) + targetAngle - (currentRotation % 360);

    // 3. Áp dụng xoay
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    // 4. Đợi quay xong (7 giây)
    setTimeout(() => {
        isSpinning = false;
        backdrop.classList.remove('spinning');

        // 5. Tính toán người thắng (Kim ở 3 giờ - 0 độ)
        const normalizedAngle = currentRotation % 360;
        const winnerIndex = Math.floor(((360 - normalizedAngle) % 360) / sliceSize);
        const winnerName = boysData[winnerIndex];

        // 6. Hiện kết quả tạm thời
        document.getElementById('winner-display').innerText = "🏆 " + winnerName;
        document.getElementById('winner-display').style.color = "#d81b60";

        // 7. Chờ 1.2 giây rồi hiện màn hình chúc mừng
        setTimeout(() => {
            document.getElementById('wheel-backdrop').style.display = 'none';
            document.getElementById('winner-announcement').style.display = 'flex';
            document.getElementById('final-winner-name').innerText = winnerName;

            if (typeof fire === "function") fire();
        }, 1200);

    }, 7000);
});