let data = [
    {
        name: "Đinh Diệp Ánh",
        dob: "20/04/2009",
        message: "Người con gái họ Đinh mang tên một loài cỏ lá xanh ngời ơi! Cậu biết không, cái tên của cậu luôn gợi nhắc về những tia sáng rạng rỡ nhất len lỏi qua tán lá. Chúc Diệp Ánh ngày 8/3 không chỉ xinh đẹp mà còn luôn giữ được sự ấm áp, tỏa sáng trong mọi hành trình cậu chọn. Mong thế giới này sẽ luôn dịu dàng với cô gái tháng Tư như cách cậu đối đãi với mọi người."
    },
    {
        name: "Thạch Bảo Châu",
        dob: "30/08/2009",
        message: "Chào đời vào một ngày cuối tháng Tám mùa thu dịu nhẹ, cậu chính là viên ngọc quý mà lớp mình thật may mắn khi có được. Bảo Châu à, người ta nói ngọc quý cần mài giũa, nhưng mình thấy cậu vốn đã tự thân lấp lánh bằng sự bản lĩnh và tự lập rồi. Chúc cậu một ngày 8/3 tràn đầy niềm vui, mong rằng tuổi mới sắp tới của cậu sẽ rực rỡ và quý giá y như cái tên của cậu vậy."
    },
    {
        name: "Nguyễn Ngọc Giang",
        dob: "06/09/2009",
        message: "Gửi tới người con gái họ Nguyễn mang tên dòng sông ngọc bích những lời chúc chân thành nhất! Ngọc Giang thân mến, cậu mang trong mình vẻ đẹp sâu lắng và êm đềm của tháng Chín mùa thu. Cầu mong cuộc sống của cậu sẽ luôn trôi chảy thuận lợi như dòng nước mát, lúc nào cũng đầy ắp tiếng cười và những điều ngọt ngào nhất sẽ luôn cập bến cuộc đời cậu."
    },
    {
        name: "Lê Thúy Hà",
        dob: "25/03/2009",
        message: "Sinh ra vào tháng Ba - tháng của phái đẹp và sự đâm chồi nảy lộc, Thuý Hà chính là hiện thân của sức sống mùa xuân tươi trẻ nhất. Có vẻ như sự tinh khôi của đất trời lúc sang xuân đã thấm đẫm vào tính cách của cậu vậy. Chúc cô gái họ Lê một ngày 8/3 thật hạnh phúc bên gia đình và bạn bè. Hãy cứ luôn yêu đời và giữ mãi nụ cười tỏa nắng ấy, vì đó là món quà tinh thần quý giá nhất của lớp mình."
    },
    {
        name: "Lê Thuý Hà",
        dob: "25/03/2009",
        message: "Sinh ra vào tháng Ba - tháng của phái đẹp và sự đâm chồi nảy lộc, Thuý Hà chính là hiện thân của sức sống mùa xuân tươi trẻ nhất. Có vẻ như sự tinh khôi của đất trời lúc sang xuân đã thấm đẫm vào tính cách của cậu vậy. Chúc cô gái họ Lê một ngày 8/3 thật hạnh phúc bên gia đình và bạn bè. Hãy cứ luôn yêu đời và giữ mãi nụ cười tỏa nắng ấy, vì đó là món quà tinh thần quý giá nhất của lớp mình."
    },
    {
        name: "Phạm Nguyễn Ngân Hà",
        dob: "08/12/2009",
        message: "Ngân Hà ơi, người con gái mang tên cả một dải tinh tú lung linh! Dù sinh ra vào tháng 12 mùa đông lạnh giá nhưng trái tim cậu lại cực kỳ ấm áp và bao dung. Chúc cậu ngày 8/3 thật rạng rỡ, mình mong rằng cậu sẽ luôn kiên định với những mục tiêu của mình, tỏa sáng theo cách riêng giữa bầu trời tri thức và mãi là người bạn đồng hành đáng tin cậy của chúng mình nhé."
    },
    {
        name: "Nguyễn Thu Hương",
        dob: "11/08/2009",
        message: "Tháng Tám mùa thu dường như đã ưu ái tặng cho lớp mình một đóa hoa mang tên Thu Hương đầy thanh khiết. Cái tên của cậu luôn gợi nhắc đến hương thơm nhẹ nhàng mà sâu đậm, khiến ai đi ngang cũng phải nhớ về. Chúc cậu 8/3 nhận được thật nhiều tình yêu thương, ngày càng xinh đẹp và gặt hái được những thành quả ngọt ngào trong hành trình học tập sắp tới."
    },
    {
        name: "Trần Trang Linh",
        dob: "16/10/2009",
        message: "Đến từ dòng họ Trần và sinh vào giữa tháng Mười mơ mộng, Trang Linh luôn sở hữu một sự điềm tĩnh và thông minh rất cuốn hút. Nhân ngày Quốc tế Phụ nữ, chúc cô gái cá tính nhất của lớp một ngày thật ý nghĩa. Mong rằng mọi dự định cậu đang ấp ủ sẽ đều thành công rực rỡ, và mỗi ngày trôi qua đều là một trang nhật ký đầy ắp niềm vui và sự tự hào về bản thân."
    },
    {
        name: "Nguyễn Huyền Mai",
        dob: "19/06/2009",
        message: "Chào cô gái của nắng vàng tháng Sáu rực rỡ! Năng lượng và sự nhiệt huyết của mùa hè dường như luôn chảy trong huyết quản của Huyền Mai vậy. Chúc cậu ngày 8/3 luôn xinh đẹp như đóa hoa mai sớm mai, mãi giữ được sự trẻ trung và khao khát chinh phục những đỉnh cao mới. Cảm ơn cậu đã luôn mang lại không khí sôi nổi và nguồn năng lượng tích cực cho tập thể lớp mình."
    },
    {
        name: "Nguyễn Trà My",
        dob: "19/03/2009",
        message: "Trà My à, cậu sinh ra vào những ngày tháng Ba nồng nàn, thời điểm đẹp nhất của phái nữ chúng mình. Cậu luôn mang lại cảm giác thanh tao của trà và ngọt ngào của hoa, một sự kết hợp thật đặc biệt. Chúc cậu một ngày 8/3 thật hạnh phúc, mong cậu luôn bình yên, giữ được sự trong trẻo vốn có và chặng đường phía trước của cậu sẽ luôn trải đầy hoa hồng."
    },
    {
        name: "Nguyễn Khánh Phương",
        dob: "11/08/2009",
        message: "Gửi lời chúc 8/3 nồng nhiệt nhất tới cô gái tháng Tám mang tên Khánh Phương! Sự chân thành và năng lượng lạc quan của cậu luôn là điều khiến mọi người xung quanh cảm thấy ấm lòng. Chúc Phương một ngày lễ thật rạng rỡ, nhận được thật nhiều lời chúc ý nghĩa và luôn tự tin vững bước trên con đường mình đã chọn. Sự tử tế của cậu chắc chắn sẽ được đáp đền bằng những điều tốt đẹp."
    },
    {
        name: "Nguyễn Thị Hoài Phương",
        dob: "21/05/2009",
        message: "Sinh ra vào tháng Năm khi sắc phượng bắt đầu thắp lửa, Hoài Phương luôn mang lại cảm giác nồng hậu và đầy hy vọng. Chúc cậu ngày 8/3 thật vui vẻ bên những người thân yêu. Mong rằng tuổi thanh xuân của cậu sẽ là một hành trình rực rỡ như nắng hè, tràn ngập tiếng cười và những kỉ niệm đẹp đẽ không bao giờ phai dấu dưới mái trường này."
    },
    {
        name: "Trần Hà Thanh",
        dob: "10/05/2009",
        message: "Người con gái họ Trần mang tên dòng sông trong xanh ơi, cậu có biết vẻ bình yên của cậu rất đáng quý không? Sinh vào đầu tháng Mười dịu mát, Hà Thanh luôn mang lại cảm giác nhẹ nhàng cho người đối diện. Chúc cậu ngày 8/3 thật hạnh phúc. Mong tâm hồn cậu luôn xanh trong như mặt hồ thu, mọi việc hanh thông và cuộc đời sẽ luôn mỉm cười với một cô gái đáng mến như cậu."
    },
    {
        name: "Lê Thị Lam",
        dob: "xx/xx/xxxx",
        message: "Gửi người con gái họ Lê. Chúc cô 8/3 thật nhiều sức khỏe, luôn vui vẻ và giữ mãi ngọn lửa nhiệt huyết với nghề giáo. (Cô hãy bấm vào vòng quay để tặng bạn Nam ngẫu nhiên 1 điểm trừ nhé 😎)",
    },
];
const boysData = [
    "Lê Trường An", "Hoàng Kỳ Anh", "Lê Ngọc Anh", "Nguyễn Tuấn Anh",
    "Âu Mạnh Bách", "Trần Lương Bằng", "Vũ Gia Bình", "Doãn Vũ Hoàng Dũng",
    "Đinh Tiến Dũng", "Nguyễn Tuấn Dũng", "Nguyễn Vũ Dũng", "Trần Quốc Dũng",
    "Trần Đoàn Trí Đức", "Nguyễn Như Hải", "Nguyễn Trung Hải", "Nguyễn Trọng Hiếu",
    "Nguyễn Danh Trí Huy", "Nguyễn Nam Khánh", "Phạm Hồng Gia Khánh", "Lý Công Hà Khoa",
    "Hứa Kin", "Đào Đại Quang Long", "Bạch Gia Minh", "Nguyễn Đức Minh",
    "Hoàng Hải Nam", "Mai Nguyễn Khoa Nam", "Nguyễn Hải Nam", "Hồ Nguyễn Đức Nghĩa",
    "Nguyễn Xuân Bảo Ngọc", "Nguyễn Hữu Phú", "Nguyễn Quang Thiên", "Bùi Minh Tiến",
    "Trương Minh Tiến", "Vũ Quốc Tiến", "Nguyễn Minh Trí", "Nguyễn Việt Trung",
    "Nguyễn Minh Tuệ"
];

const riggedPairs = {
    "trần trang linh": "Nguyễn Minh Trí", // Cặp cũ
};
