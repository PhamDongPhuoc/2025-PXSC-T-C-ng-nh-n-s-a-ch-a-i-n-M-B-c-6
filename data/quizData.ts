import type { Question } from '../types';

const rawPart1 = `Câu 1: Thiết bị khởi động mềm là gì?
a. Là thiết bị điện tử dùng để khởi động động cơ không đồng bộ 3 pha
b. Là khí cụ điện diện dùng để hổ trợ quá trình khởi động động cơ không đồng bộ 3 pha có công suất trung bình và lớn
c. Là khí cụ cơ điện dùng để khởi động động cơ không đồng bộ 3 pha công suất lớn
d. Là thiết bị khởi động động cơ không đồng bộ 3 pha có công suất lớn hơn 100Kw
Đáp án đúng là: Là khí cụ điện diện dùng để hổ trợ quá trình khởi động động cơ không đồng bộ 3 pha có công suất trung bình và lớn
Câu 2: Cấu tạo của thiết bị khởi động mềm bao gồm các phần chính nào?
a. Cấu tạo của khởi động mềm gồm 3 cặp thyristor (SCR) đấu nối tiếp nhau; bộ vi xử lý điều khiển Thyristor; contactor bypass
b. Cấu tạo của khởi động mềm gồm 3 cặp thyristor (SCR) đấu song song ngược nhau; bộ vi xử lý điều khiển Thyristor
c. Cấu tạo của khởi động mềm gồm 3 cặp thyristor (SCR) đấu song song ngược nhau, contactor bypass
d. Cấu tạo của khởi động mềm gồm 3 cặp thyristor (SCR) đấu song song ngược nhau; bộ vi xử lý điều khiển Thyristor; contactor bupass
Đáp án đúng là: Cấu tạo của khởi động mềm gồm 3 cặp thyristor (SCR) đấu song song ngược nhau; bộ vi xử lý điều khiển Thyristor; contactor bupass
Câu 3: Biến tần là gì?
a. Biến tần sử dụng các linh kiện bán dẫn để đóng ngắt tuần tự dòng điện đặt vào các cuộn dây của động cơ để làm sinh ra từ trường xoay làm quay động cơ
b. Các bộ phận chính của biến tần bao gồm bộ chỉnh lưu, bộ lọc, bộ nghịch lưu IGBT, mạch điều khiển
c. Biến tần là thiết bị biến đổi dòng điện xoay chiều ở tần số này thành dòng điện xoay chiều ở tần số khác có thể điều chỉnh được
d. Là thiết bị thay đổi tốc đô ̣ của đông cơ dễ dàng giúp đáp ứng các yêu cầu công nghê ̣ của thiết bị và hê ̣thống khác nhau
Đáp án đúng là: Biến tần là thiết bị biến đổi dòng điện xoay chiều ở tần số này thành dòng điện xoay chiều ở tần số khác có thể điều chỉnh được
Câu 4: Các bộ phận chính của biến tần bao gồm các bộ phận nào?
a. Bên trong biến tần là các bộ phận có chức năng nhận điện áp đầu vào có tần số cố định để biến đổi thành điện áp có tần số thay đổi để điều khiển tốc độ động cơ
b. Các bộ phận chính của biến tần bao gồm bộ chỉnh lưu, bộ lọc, bộ nghịch lưu IGBT, mạch điều khiển
c. Các bộ phận chính của biến tần bao gồm bộ chỉnh lưu, bộ lọc, bộ nghịch lưu IGBT.
d. Cấu tạo của biến tần gồm 3 cặp thyristor (SCR) đấu song song ngược nhau; bộ vi xử lý điều khiển Thyristor; contactor bupass
Đáp án đúng là: Các bộ phận chính của biến tần bao gồm bộ chỉnh lưu, bộ lọc, bộ nghịch lưu IGBT, mạch điều khiển
Câu 5: Đơn vị đo biên độ vận tốc rung là gì?
a. μm, mm/s
b. mm/s, in/s
c. in/s
d. in/s, μm
Đáp án đúng là: mm/s, in/s
Câu 6: Thông thường các cảm biến rung được lắp
đặt ở vị trí nào của thiết bị?
a. Vị trí Ổ đở, Gối đở của thiết bị
b. Vị trí giửa của thiết bị
c. Không qui định
d. Do nhà thiết kế chọn
Đáp án đúng là: Vị trí Ổ đở, Gối đở của thiết bị
Câu 7: Cách điều khiển của khởi động mểm khởi động và dừng động cơ như thế nào?
a. Có thể thay đổi tốc đô ̣ đông cơ linh hoạt, đảo chiều đông cơ không chỉ khi khởi động, dừng động cơ mà suốt quá trình hoạt động của thiết bị
b. Có thể khởi động bao nhiêu lần tùy ý trong ngày và trong vòng đời thiết bị mà không ảnh hƣởng đến động cơ và hê ̣thống cơ khí
c. Chỉ có tác dụng tăng tốc hoặc giảm tốc trong quá trình khởi động và dừng động cơ để làm khởi động hoặc dừ ng “mềm”, không thể đảo chiều động cơ
d. Nhiều chức năng bảo vê ̣động cơ và hê ̣ thống cơ khí hơn
Đáp án đúng là: Chỉ có tác dụng tăng tốc hoặc giảm tốc trong quá trình khởi động và dừng động cơ để làm khởi động hoặc dừ ng “mềm”, không thể đảo chiều động cơ
Câu 8: Cách điều khiển của biến tần khởi động và dừng động cơ như thế nào?
a. Chỉ có tác dụng tăng tốc hoặc giảm tốc trong quá trình khởi động và dừng động cơ để làm khởi động hoặc dừ ng “mềm”, không thể đảo chiều động cơ
b. Có thể thay đổi tốc đô ̣ đông cơ linh hoạt, đảo chiều đông cơ không chỉ khi khởi động, dừng động cơ mà suốt quá trình hoạt động của thiết bị
c. Ít chức năng bảo vê ̣động cơ, chỉ có các chứcc năng bảo vê ̣cơ bản
d. Tùy công suất động cơ và tùy nhà máy có thể bị giới hạn số lần khởi động
Đáp án đúng là: Có thể thay đổi tốc đô ̣ đông cơ linh hoạt, đảo chiều đông cơ không chỉ khi khởi động, dừng động cơ mà suốt quá trình hoạt động của thiết bị
Câu 9: Qui định cách điện cho các động cơ điện là
a. 1000Ω/V
b. 10000 Ω/V
c. 100 Ω/V
d. 10 Ω/V
Đáp án đúng là: 1000Ω/V
Câu 10: Đối với các động cơ xoay chiều 3Φ cao thế (6600Vac), thì cách điện đạt bao nhiêu mới cho phép vận hành?
a. R15 ≥ 6000Ω; R60/R15 ≥ 1,3
b. R15 ≥ 7000Ω; R60/R15 ≥ 1,3
c. R15 ≥ 7500Ω; R60/R15 ≥ 1,3
d. R15 ≥ 6600Ω; R60/R15 ≥ 1,3
Đáp án đúng là: R15 ≥ 7000Ω; R60/R15 ≥ 1,3
Câu 11: ST500 là gì?
a. Máy cắt
b. Bộ chỉ thị thông số động cơ
c. Bộ điều khiển động cơ thông minh
d. Máy ngắt điều khiển động cơ
Đáp án đúng là: Bộ điều khiển động cơ thông minh
Câu 12: Bộ điều khiển động cơ thông minh ST500 có bao nhiêu chức năng?
a. Hai
b. Ba
c. Năm
d. Bốn
Đáp án đúng là: Bốn
Câu 13: Các chức năng của bộ điều khiển ST500 là gì?
a. Chức năng bảo vệ, Chức năng đo lường, chức năng bảo vệ
b. Chức năng đo lường, chức năng bảo vệ, chức năng quản lý bảo dưỡng
c. Chức năng bảo vệ, chức năng đo lường, chức năng điều khiển & vận hành động cơ
d. Chức năng bảo vệ, chức năng đo lường, chức năng điều khiển & vận hành động cơ, chức năng quản lý bảo dưỡng
Đáp án đúng là: Chức năng bảo vệ, chức năng đo lường, chức năng điều khiển & vận hành động cơ, chức năng quản lý bảo dưỡng
Câu 14: Khi khởi động bằng cuộn kháng phụ động cơ không đồng bộ 3 pha thì dòng khởi động của động cơ sẽ thế nào?
a. Sẽ tăng từ 1,7 đến 4 lần Dòng định mức
b. Sẽ tăng từ 1 đến 4 lần dòng định mức
c. Sẽ tăng từ 2 đến 4 lần dòng định mức
d. Sẽ tăng từ 1 đến 3 lần dòng định mức
Đáp án đúng là: Sẽ tăng từ 1,7 đến 4 lần Dòng định mức
Câu 15: Về cấu tạo Contactor bao gồm những thành phần chính nào?
a. Cơ cấu điện từ (nam châm điện), tiếp điểm chính
b. Cơ cấu Điện từ (nam châm điện), hệ thống dập hồ quang, hệ thống tiếp điểm (tiếp điểm chính và phụ)
c. Cơ cấu điện từ (nam châm điện), hệ thống tiếp điểm (tiếp điểm chính và phụ)
d. Cơ cấu điện từ (nam châm điện), hệ thống dập hồ quang, các tiếp điểm
Đáp án đúng là: Cơ cấu Điện từ (nam châm điện), hệ thống dập hồ quang, hệ thống tiếp điểm (tiếp điểm chính và phụ)
Câu 16: Khi khởi động bằng cuộn kháng phụ động cơ không đồng bộ 3 pha thì moment khởi động của động cơ sẽ thế nào?
a. Nhỏ hơn 0,5 đến 0,85 lần Moment định mức
b. Nhỏ hơn 0,5 đến 1 lần moment định mức
c. Nhỏ hơn 2 đến 3 lần moment định mức
d. Nhỏ hơn 1 đến 3 lần moment định mức
Đáp án đúng là: Nhỏ hơn 0,5 đến 0,85 lần Moment định mức
Câu 17: Có mấy bước đẻ xem thông số cài đặt hệ thống của bộ điều khiển động cơ ST500?
a. Ba
b. Hai
c. Bốn
d. Năm
Đáp án đúng là: Bốn
Câu 18: Bộ điều khiển động cơ thông minh ST500, có bao nhiêu thông số cài đặt?
a. Ba
b. Hai
c. Bốn
d. Sáu
Đáp án đúng là: Bốn
Câu 19: Trong qua trình hoạt động màn hình biến tần INVT CHV190 báo OC1 là lỗi:
a. Lỗi quá dòng pha 1
b. Lỗi quá tốc độ
c. Lỗi chạm đất
d. Quá tải bơm làm mát bình ngưng
Đáp án đúng là: Lỗi quá dòng pha 1
Câu 20: Trong qua trình hoạt động màn hình biến tần INVT CHV190 báo OC2 là lỗi:
a. Lỗi quá dòng pha 2
b. Lỗi quá tốc độ
c. Lỗi chạm đất
d.  Lỗi chưa đấu động cơ
Đáp án đúng là: Lỗi quá dòng pha 2
Câu 21: Trong qua trình hoạt động màn hình biến tần INVT CHV190 báo OC3 là lỗi:
a. Lỗi quá dòng pha 3
b. Lỗi quá tốc độ
c. Lỗi chạm đất
d.  Lỗi chưa đấu động cơ
Đáp án đúng là: Lỗi quá dòng pha 3
Câu 22: Trong qua trình hoạt động màn hình biến tần INVT CHV190 báo OV1 là lỗi:
a. Lỗi quá dòng pha 1
b. Lỗi quá áp pha 1
c. Lỗi chạm đất
d.  Lỗi chưa đấu động cơ
Đáp án đúng là: Lỗi quá áp pha 1
Câu 23: Trong qua trình hoạt động màn hình biến tần INVT CHV190 báo OV2 là lỗi:
a. Lỗi quá dòng pha 3
b. Lỗi quá áp pha 2
c. Lỗi chạm đất
d.  Lỗi chưa đấu động cơ
Đáp án đúng là: Lỗi quá áp pha 2
Câu 24: Trong qua trình hoạt động màn hình biến tần INVT CHV190 báo OV3 là lỗi:
a. Lỗi quá dòng pha 3
b. Lỗi quá áp pha 3
c. Lỗi chạm đất
d.  Lỗi chưa đấu động cơ
Đáp án đúng là: Lỗi quá dòng pha 3
Câu 25: Phần mềm dùng để kết nối máy tính với biến tần Micromaster 430 là gì ?
a. Autocad
b. Ordcad
c. Step7 microwin
d. Drive monitor
Đáp án đúng là: Drive monitor
Câu 26: Cáp dùng kết nối biến tần Micromaster 430 với máy tính là gì ?
a. RJ45
b. RS485
c. profilebus
d. RS232 đấu ngược
Đáp án đúng là: RS232 đấu ngược
Câu 27: Card dùng để kết nối biến tần Micromaster 430 với máy tính là gì ?
a. Card 6SE6400-1PC00-0AA0
b. . PJ card
c. Card profibus
d. Card RS232
Đáp án đúng là: Card 6SE6400-1PC00-0AA0
Câu 28: Trong các phần mềm sau phần mềm nào kết nối được biến tần Siemen với máy tính?
a. Starter
b. Protus
c. Step7 mỉcrowin
d. Orcad
Đáp án đúng là: Starter
Câu 29: . Lỗi F0001 trên biến tần Micrometer 430 là lỗi gì?
a. Quá tải
b. Ngắn mạch
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Quá dòng
Câu 30: Lỗi F0002 trên biến tần Micrometer 430 là lỗi gì?
a. Quá tải
b. Ngắn mạch
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Quá điện áp thanh cái DC
Câu 31: Lỗi F0003 trên biến tần Micrometer 430 là lỗi gì?
a. Quá tải
b. Điện áp nguồn vào thấp
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Điện áp nguồn vào thấp
Câu 32: Lỗi F0004 trên biến tần Micrometer 430 là lỗi gì?
a. Inverter quá nhiệt
b. Điện áp nguồn vào thấp
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Inverter quá nhiệt
Câu 33: Lỗi F0005 trên biến tần Micrometer 430 là lỗi gì?
a. Biến tần quá tải
b. Điện áp nguồn vào thấp
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Biến tần quá tải
Câu 34: Lỗi F0011 trên biến tần Micrometer 430 là lỗi gì?
a. Động cơ quá nhiệt
b. Điện áp nguồn vào thấp
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Động cơ quá nhiệt
Câu 35: Lỗi F0012 trên biến tần Micrometer 430 là lỗi gì?
a. Mất kết nối tín hiệu nhiệt độ IGBT
b. Điện áp nguồn vào thấp
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Mất kết nối tín hiệu nhiệt độ IGBT
Câu 36: Lỗi F0015 trên biến tần Micrometer 430 là lỗi gì?
a. Mất kết nối tín hiệu nhiệt độ động cơ
b. Điện áp nguồn vào thấp
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Mất kết nối tín hiệu nhiệt độ động cơ
Câu 37: Lỗi F0020 trên biến tần Micrometer 430 là lỗi gì?
a. Mất kết nối tín hiệu nhiệt độ động cơ
b. Điện áp đầu vào mất phase
c. Quá điện áp thanh cái DC
d. Quá dòng
Đáp án đúng là: Điện áp đầu vào mất phase
Câu 38: Lỗi F0021 trên biến tần Micrometer 430 là lỗi gì?
a. Mất kết nối tín hiệu nhiệt độ động cơ
b. Điện áp nguồn vào thấp
c. Chạm đất đầu ra biến tần
d. Quá dòng
Đáp án đúng là: Chạm đất đầu ra biến tần
Câu 39: Lỗi F0023 trên biến tần Micrometer 430 là lỗi gì?
a. Mất kết nối tín hiệu nhiệt độ động cơ
b. Mất kết nối 1 pha với động cơ
c. Chạm đất đầu ra biến tần
d. Quá dòng
Đáp án đúng là: Mất kết nối 1 pha với động cơ
Câu 40: Lỗi F0030 trên biến tần Micrometer 430 là lỗi gì?
a. Mất kết nối tín hiệu nhiệt độ động cơ
b. Điện áp nguồn vào thấp
c. Chạm đất đầu ra biến tần
d. Quạt làm mát biến tần không hoạt động
Đáp án đúng là: Quạt làm mát biến tần không hoạt động
Câu 41: Lỗi F0080 trên biến tần Micrometer 430 là lỗi gì?
a. Mất kết nối tín hiệu nhiệt độ động cơ
b. Điện áp nguồn vào thấp
c. Chạm đất đầu ra biến tần
d. Mất tín hiệu đầu vào ADC
Đáp án đúng là: Mất tín hiệu đầu vào ADC
Câu 42: Điện áp 3 pha đầu vào biến tần 380VAC thì điện áp trên thanh cái DC biến tần khoảng bao nhiêu ?
a. 220VDC đến 380VDC
b. 380VDC đến 480VDC
c. 532VDC đến 600VDC
d. 600VDC đến 750VDC
Đáp án đúng là: 532VDC đến 600VDC
Câu 43: Dùng thang đo nào trên đồng hồ VOM để kiểm tra IGBT biến tần khi không còn điện?
a. Thang đo Ohm
b. Thang đo tụ điện
c. Thang đo Diode
d. Thang đo điện áp
Đáp án đúng là: Thang đo Diode
Câu 44: Dùng thang đo nào trên đồng hồ VOM để kiểm tra bộ chỉnh lưu biến tần khi không còn điện?
a. Thang đo Ohm
b. Thang đo tụ điện
c. Thang đo Diode
d. Thang đo điện áp
Đáp án đúng là: Thang đo Diode
Câu 45: Điện áp khi đo kiểm tra IGBT của biến tần không mang điện là bao nhiêu?
a. 0.3V đến 0.4V
b. 1V
c. 0.7V
d. 1.5V
Đáp án đúng là: 0.3V đến 0.4V
Câu 46: Khi biến tần báo quá tải thường do các nguyên nhân nào sau đây?
a. Điện áp đầu vào biến tần lớn hơn định ; Động cơ có công suất nhỏ hơn biến tần.
b. Điện áp đầu vào biến tần nhỏ hơn định mức; Động cơ có công suất nhỏ hơn biến tần
c. Điện áp đầu vào biến tần lớn hơn định mức; Động cơ có công suất nhỏ hơn biến tần; Động cơ bị hỏng vòng bi
d. Động cơ bị kẹt trục; Động cơ mang tải lớn hơn công suất định mức; Động cơ động cơ bị hỏng vòng bi
Đáp án đúng là: Động cơ bị kẹt trục; Động cơ mang tải lớn hơn công suất định mức; Động cơ động cơ bị hỏng vòng bi
Câu 47: Khi biến tần báo mất nguồn thường do các nguyên nhân nào sau đây?
a. Điện áp đầu ra biến tần thấp; Biến tần bảo vệ khi phát hiện quá tải; Biến tần bảo vệ do điện áp đầu vào thấp
b. Không có nguồn điện cấp đến biến tần; Hỏng board nguồn 24VDC; Hỏng Contactor nội trong biến tần; Hỏng điện trở sạc trong biến tần
c. Điện áp đầu ra biến tần thấp; Biến tần bảo vệ khi phát hiện quá tải; Biến tần bảo vệ do điện áp đầu vào thấp; hỏng board nguồn 24VDC
d. Điện áp đầu ra biến tần thấp; Biến tần bảo vệ khi phát hiện quá tải; Không có nguồn cấp cho biến tần
Đáp án đúng là: Không có nguồn điện cấp đến biến tần; Hỏng board nguồn 24VDC; Hỏng Contactor nội trong biến tần; Hỏng điện trở sạc trong biến tần
Câu 48: Khi biến tần báo ỗi chạm đất, ta cần phải kiểm tra gì?
a. Kiểm tra cáp kết nối tín hiệu điều khiển; Kiểm ta encoder; Kiểm tra cáp đầu vào biến tần
b. Kiểm tra cáp kết nối tín hiệu điều khiển; Kiểm ta encoder; Kiểm tra cáp động lực đầu ra; Kiểm tra bộ chỉnh lưu
c. Kiểm tra động cơ kết nối với biến tần; Kiểm tra cáp động lực đầu ra biến tần; Kiểm tra IGBT; Kiểm tra bộ chỉnh lưu
d. Kiểm tra cáp kết nối tín hiệu điều khiển; Kiểm ta encoder; Kiểm tra IGBT
Đáp án đúng là: Kiểm tra động cơ kết nối với biến tần; Kiểm tra cáp động lực đầu ra biến tần; Kiểm tra IGBT; Kiểm tra bộ chỉnh lưu
Câu 49: Đối với 2 biến tần điều khiển 1 tải đồng tốc báo quá tải thường do nguyên nhân gì?
a. Điện áp đầu vào biến tần lớn hơn định mức
b. Điện áp đầu vào nhỏ hơn định mức
c. Động cơ có công suất nhỏ hơn biến tần
d. Hỏng encoder
Đáp án đúng là: Hỏng encoder
Câu 50: Đối với 2 biến tần điều khiển 1 tải đồng tốc bị lệch dòng cao giữa 2 biến tần do nguyên nhân gì?
a. Điện áp đầu vào biến tần lớn hơn định mức
b. Điện áp đầu vào nhỏ hơn định mức
c. Động cơ có công suất nhỏ hơn biến tần
d. Không đồng bộ được 2 biến tần với nhau
Đáp án đúng là: Không đồng bộ được 2 biến tần với nhau`;
const rawPart2 = `Câu 51: Biến tần báo lỗi quá điện áp DC thường do nguyên nhân gì?
a. Do hỏng bộ chỉnh lưu
b. Do mất 1 pha nguồn vào
c. Do mất pha đầu ra
d. Do điện trở xả bị hỏng
Đáp án đúng là: Do điện trở xả bị hỏng
Câu 52: Cách khắc phục lỗi báo quá điện áp DC trên biến tần bằng cách nào?
a. Thay đổi điện áp đầu ra biến tần
b. Giảm tải cho biến tần
c. Thay điện trở xả mới
d. Cô lặp nguồn biến tần khởi động lại
Đáp án đúng là: Thay điện trở xả mới
Câu 53: Biến tần là gì
a. Là thiết bị biến đổi dòng điện
b. Là thiết bị biến đổi điện áp
c. Là thiết bị biến đổi công suất
d. Là thiết bị biến đổi tần số
Đáp án đúng là: Là thiết bị biến đổi tần số
Câu 54: Cấu tạo của biến tần gồm mấy phần chính
a. Ba
b. Bốn
c. Năm
d. Hai
Đáp án đúng là: Ba
Câu 55: Ứng dụng của biến tần
a. Dùng điều khiển động cơ xoay chiều
b. Dùng điều khiển động cơ DC
c. Dùng điều khiển động cơ bước
d. Dùng để khởi động động cơ
Đáp án đúng là: Dùng điều khiển động cơ xoay chiều
Câu 56: Ký hiệu "AI" trên boad điều khiển có nghĩa là gì
a. Tín hiệu tương tự đầu ra của biến tần
b. Tín hiệu số đầu vào của biến tần
c. Tín hiệu tương tự đầu vào của biến tần
d. Tín hiệu số đầu ra của biến tần
Đáp án đúng là: Tín hiệu tương tự đầu vào của biến tần
Câu 57: Ký hiệu "AO" trên boad điều khiển có nghĩa là gì
a. Tín hiệu tương tự đầu ra của biến tần
b. Tín hiệu số đầu vào của biến tần
c. Tín hiệu tương tự đầu vào của biến tần
d. Tín hiệu số đầu ra của biến tần.
Đáp án đúng là: Tín hiệu tương tự đầu ra của biến tần
Câu 58: Ký hiệu "DI" trên boad điều khiển có nghĩa là gì
a. Tín hiệu tương tự đầu ra của biến tần
b. Tín hiệu số đầu vào của biến tần
c. Tín hiệu tương tự đầu vào của biến tần
d. Tín hiệu số đầu ra của biến tần
Đáp án đúng là: Tín hiệu số đầu vào của biến tần
Câu 59: Ký hiệu "RO" trên boad điều khiển có nghĩa là gì
a. Tín hiệu tương tự đầu ra của biến tần
b. Tín hiệu số đầu vào của biến tần
c. Tín hiệu tương tự đầu vào của biến tần
d. Tín hiệu relay đầu ra của biến tần
Đáp án đúng là: Tín hiệu relay đầu ra của biến tần
Câu 60: Ký hiệu "BRK+", "BRK" trên biến tần ABB là gì
a. Đấu dây nguồn cấp đầu vào
b. Đấu dây đầu ra đến động cơ
c. Đấu dây điện trở xả
d. Đấu dây điều khiển
Đáp án đúng là: Đấu dây điện trở xả
Câu 61: Trên biến tần Schneider ATV71, mã lỗi OCF nghĩa là gì?
a. Lỗi quá dòng
b. Lỗi ngắn mạch motor
c. Lỗi vượt tốc.
d. Lỗi quá áp
Đáp án đúng là: Lỗi quá dòng
Câu 62: Trên biến tần Schneider ATV71, mã lỗi SOF nghĩa là gì?
a. Lỗi quá dòng
b. Lỗi ngắn mạch motor
c. Lỗi vượt tốc
d. Lỗi quá áp
Đáp án đúng là: Lỗi vượt tốc
Câu 63: Trên biến tần Schneider ATV71, mã lỗi SCF1 nghĩa là gì?
a. Lỗi quá dòng
b. Lỗi ngắn mạch motor
c. Lỗi vượt tốc.
d. Lỗi quá áp
Đáp án đúng là: Lỗi ngắn mạch motor
Câu 64: Trên biến tần Schneider ATV71, mã lỗi ObF nghĩa là gì?
a. Lỗi quá điện áp trong khi giảm tốc
b. Lỗi quá nhiệt
c. Lỗi quá tải
d. Lỗi mất ngõ ra
Đáp án đúng là: Lỗi quá điện áp trong khi giảm tốc
Câu 65: Trên biến tần Schneider ATV71, mã lỗi OLF nghĩa là gì?
a. Lỗi quá điện áp trong khi giảm tốc
b. Lỗi quá nhiệt
c. Lỗi quá tải
d. Lỗi mất ngõ ra.
Đáp án đúng là: Lỗi quá tải
Câu 66: Trên biến tần Schneider ATV71, mã lỗi OPF1 nghĩa là gì?
a. Lỗi quá điện áp trong khi giảm tốc
b. Lỗi quá nhiệt
c. Lỗi quá tải
d. Lỗi mất ngõ ra
Đáp án đúng là: Lỗi mất ngõ ra
Câu 67: Trên biến tần Schneider ATV71, mã lỗi OHF nghĩa là gì?
a. Lỗi quá điện áp trong khi giảm tốc
b. Lỗi quá nhiệt
c. Lỗi quá tải
d. Lỗi mất ngõ ra.
Đáp án đúng là: Lỗi quá nhiệt
Câu 68: Trên biến tần Schneider ATV71, mã lỗi OSF nghĩa là gì?
a. Lỗi quá điện áp nguồn vào
b. Lỗi mất pha nguồn
c. Lỗi mất tín hiệu điều khiển 4-20mA ngõ vào
d. Lỗi quá nhiệt IGBT.
Đáp án đúng là: Lỗi quá điện áp nguồn vào
Câu 69: Trên biến tần Schneider ATV71, mã lỗi PHF nghĩa là gì?
a. Lỗi quá điện áp nguồn vào
b. Lỗi mất pha nguồn
c. Lỗi mất tín hiệu điều khiển 4-20mA ngõ vào
d. Lỗi quá nhiệt IGBT
Đáp án đúng là: Lỗi mất pha nguồn
Câu 70: Trên biến tần Schneider ATV71, mã lỗi LFF nghĩa là gì?
a. Lỗi quá điện áp nguồn vào
b. Lỗi mất pha nguồn
c. Lỗi mất tín hiệu điều khiển 4 - 20 mA ngõ vào
d. Lỗi quá nhiệt IGBT
Đáp án đúng là: Lỗi mất tín hiệu điều khiển 4 - 20 mA ngõ vào
Câu 71: Trên biến tần Schneider ATV71, mã lỗi tJF nghĩa là gì?
a. Lỗi quá điện áp nguồn vào
b. Lỗi mất pha nguồn
c. Lỗi mất tín hiệu điều khiển 4-20mA ngõ vào
d. Lỗi quá nhiệt IGBT
Đáp án đúng là: Lỗi quá nhiệt IGBT
Câu 72: ACCU chì là gì?
a. Là loại accu sử dụng các bản cực bằng chì hoặc các vật liệu có nguồn gốc từ chì
b. Là loại accu sử dụng các bản cự từ kẽm và các vật liệu có nguồn gốc từ kẽm
c. Là loại accu sử dụng các bản cự từ sắt và các vật liệu có nguồn gốc từ sắt
d. Là loại accu sử dụng các bản cự từ đồng và các vật liệu có nguồn gốc từ đồng
Đáp án đúng là: Là loại accu sử dụng các bản cực bằng chì hoặc các vật liệu có nguồn gốc từ chì
Câu 73: Đối với bình ACCU đang sử dụng cho hệ thống DC DH1 là loại bình gì?
a. ACCU accid chì kín khí
b. ACCU Accid chì hở khí
c. ACCU kềm kín khí
d. ACCU kềm hở khí
Đáp án đúng là: ACCU accid chì kín khí
Câu 74: Đối với bình ACCU đang sử dụng cho hệ thống DC DH3 là loại bình gì?
a. ACCU accid chì kín khí
b. ACCU Accid chì hở khí
c. ACCU kềm kín khí
d. ACCU kềm hở khí
Đáp án đúng là: ACCU Accid chì hở khí
Câu 75: Đối với bình ACCU đang sử dụng cho hệ thống DC NL1 là loại bình gì?
a. ACCU accid chì kín khí
b. ACCU Accid chì hở khí
c. ACCU kềm kín khí
d. ACCU kềm hở khí
Đáp án đúng là: ACCU accid chì kín khí
Câu 76: Đối với bình ACCU đang sử dụng cho hệ thống DC NL2 là loại bình gì?
a. ACCU accid chì kín khí
b. ACCU Accid chì hở khí
c. ACCU kềm kín khí
d. ACCU kềm hở khí
Đáp án đúng là: ACCU Accid chì hở khí
Câu 77: Có mấy chế độ sạc cho bình accu hệ thống DC DH1
a. Có 4 chế độ
b. Có 3 chế độ
c. Có 2 chế độ
d. Có 1 chế độ
Đáp án đúng là: Có 2 chế độ
Câu 78: Có mấy chế độ sạc cho bình accu hệ thống DC DH3
a. Có 4 chế độ
b. Có 3 chế độ
c. Có 2 chế độ
d. Có 1 chế độ
Đáp án đúng là: Có 2 chế độ
Câu 79: Hệ thống DC DH1 đang sử dụng loại bình accu điện áp bao nhiêu volt?
a. 2V
b. 5V
c. 12V
d. 24V
Đáp án đúng là: 2V
Câu 80: Hệ thống DC DH3 đang sử dụng loại bình accu điện áp bao nhiêu volt?
a. 2V
b. 5V
c. 12V
d. 24V
Đáp án đúng là: 2V
Câu 81: Hệ thống DC TTNL1 đang sử dụng loại bình accu điện áp bao nhiêu volt?
a. 2V
b. 5V
c. 12V
d. 24V
Đáp án đúng là: 2V
Câu 82: Đối với bình accu 2V, 2000AH, C10 thì C10 có ý nghĩa là gì
a. Dòng điện phóng xã là 10A trong 10h liên tục
b. Dòng điện phóng xã là 100A trong 10h liên tục
c. Dòng điện phóng xã là 1000A trong 10h liên tục
d. Dòng điện phóng xã là 200A trong 10h liên tục
Đáp án đúng là: Dòng điện phóng xã là 200A trong 10h liên tục
Câu 83: Đối với bình accu 2V, 1000AH, C10 thì C10 có ý nghĩa là gì
a. Dòng điện phóng xã là 10A trong 10h liên tục
b. Dòng điện phóng xã là 100A trong 10h liên tục
c. Dòng điện phóng xã là 1000A trong 10h liên tục
d. Dòng điện phóng xã là 200A trong 10h liên tục
Đáp án đúng là: Dòng điện phóng xã là 100A trong 10h liên tục
Câu 84: Đối với bình accu 2V, 200AH, C10 thì C10 có ý nghĩa là gì
a. Dòng điện phóng xã là 10A trong 10h liên tục
b. Dòng điện phóng xã là 20A trong 10h liên tục
c. Dòng điện phóng xã là 1000A trong 10h liên tục
d. Dòng điện phóng xã là 200A trong 10h liên tục
Đáp án đúng là: Dòng điện phóng xã là 20A trong 10h liên tục
Câu 85: Khi thực hiện phóng xả bình accu thì thời gian phóng xã phải như thế nào
a. Thực hiện phóng xả có thời gian không liên tục
b. Thự hiện phỏng xả có thòi gian 12h không liên tục
c. Có thời gian phóng xả liên tục theo tài liệu OM bình
d. Phóng xả liên tục trong 24h
Đáp án đúng là: Có thời gian phóng xả liên tục theo tài liệu OM bình
Câu 86: Khi thực hiện phóng xả accu phải ở trạng thái nào là đúng?
a. Bình đang ở trạng thái sạc
b. Bình đang ở trạng thái hết gần hết dung lượng
c. Bình đang ở trạng thái đầy dung lượng
d. Tất cả đều sai
Đáp án đúng là: Bình đang ở trạng thái đầy dung lượng
Câu 87: Đối với bình accu 2V thì điện áp sau khi xả theo chế độ tiêu chuẩn phải đạt điện áp bao nhiêu nhiêu
a. Lớn hơn 1.9V
b. Nhở hơn 1.8V
c. Lớn hơn 1.7V
d. Lớn hơn 1.6V
Đáp án đúng là: Lớn hơn 1.9V
Câu 88: Bình accu hệ thống DC DH1 có 2 chế độ nạp nào
a. Nạp thả nổi và cân bằng
b. Nạp trục tiếp và gián tiếp
c. Nạp điện áp cao và thấp
d. Tất cả đều sai
Đáp án đúng là: Nạp thả nổi và cân bằng
Câu 89: Bình accu có chế độ xả C5 nghĩa là gì?
a. Thời gian phóng xả trong 10h
b. Thời gian phóng xả trong 20h
c. Thời gian phóng xã trong 5h
d. Thời gian phóng xả trong 24h
Đáp án đúng là: Thời gian phóng xã trong 5h
Câu 90: Đối với bình accu kính 2V của hệ thống DC DH1 thì điện áp khi sạc thả nổi là bao nhiêu?
a. Điện áp 2V
b. 2.2V đến 2.3V
c. 2.25V đến 3.8V
d. trên 3.8V
Đáp án đúng là: 2.2V đến 2.3V
Câu 91: Đối với bình accu kính 2V của hệ thống DC DH1 thì điện áp khi sạc cân bằng là bao nhiêu?
a. Điện áp 2V
b. 2.2V đến 2.3V
c. 2.25V đến 3.8V
d. trên 3.8V
Đáp án đúng là: 2.25V đến 3.8V
Câu 92: Trong quá trình kiểm tra bảo dưỡng điện áp bình accu 2V thì mức điện áp bao nhiêu là bất thường
a. 2V
b. 2.2V đến 2.3V
c. 2.25V đến 3.8V
d. 1.9V
Đáp án đúng là: 2.25V đến 3.8V
Câu 93: Điện áp nạp thả nổi 1 nhánh 104 bình là bao nhiêu
a. 220V
b. 230V
c. 234V
d. 245V
Đáp án đúng là: 234V
Câu 94: Điện áp nạp cân bằng 1 nhánh 104 bình là bao nhiêu
a. 220V
b. 230V
c. 234V
d. 245V
Đáp án đúng là: 245V
Câu 95: Đối với bình accu acid chì hở khí DH3 khi bảo dưỡng phát hiện mực nước thấp thì cần phải làm gì
a. bổ sung acid
b. bổ dung acid và nước cất
c. bổ dung nước uống
d. không là gì
Đáp án đúng là: bổ dung nước uống
Câu 96: Nước dùng để bổ sung cho bình acid chì hở khí là loại nước nào
a. Loại nước khoáng
b. Nước cất
c. Nước phun tên
d. Nước muối
Đáp án đúng là: Nước cất
Câu 97: Khi kiểm tra bảo dưỡng accu acid chì hở khí cần bổ sung nước cất ở mức nào
a. Đúng ngay mức thấp
b. Cao hơn mức cao
c. Không được vượt mức thấp
d. Nằm trong khoảng mức cao và thấp
Đáp án đúng là: Nằm trong khoảng mức cao và thấp
Câu 98: Loại dung dịch bổ sung cho bình accu acid chì là loại nòa sau đây
a. H2S04 đậm đặc
b. H2SO4 pha loãng
c. NaoH đậm đặc
d. NaOH pha loãng
Đáp án đúng là: H2SO4 pha loãng
Câu 99: nồng độ acid bình accu acid chì hỏ khí khi đầy là bao nhiêu?
a. 1.250 - 1.270
b. 1.210 - 1.230
c. 1.170 - 1.200
d. 1.130 - 1.160
Đáp án đúng là: 1.250 - 1.270
Câu 100: Đối với bình accu acid chì thì bao lâu cần phóng xả điện 1 lần
a. 12 đến 18 tháng
b. 20 tháng đến 24 tháng
c. 24 tháng đén 30 tháng
d. 30 tháng đến 26 tháng
Đáp án đúng là: 12 đến 18 tháng`;
const rawPart3 = `Câu 101: Trong đều khiển PLC 1 bit gồm bao nhiêu trạng thái
a. 1
b. 2
c. 3
d. 4
Đáp án đúng là: 2
Câu 102: Một PLC gồm có các khối nào ?
a. Khối nguồn, khối CPU, Khối input, khối ouput
b. Khối nguồn, khối CPU, Khối input
c. Khối nguồn,Khối input, khối ouput
d. Khối nguồn, khối CPU, khối ouput
Đáp án đúng là: Khối nguồn, khối CPU, Khối input, khối ouput
Câu 103: Trong đều khiển PLC thì khối Input có chức năng gì?
a. Xuất tín hiệu điều khiển
b. Xử lý tín hiệu điều khiển
c. Cung cấp nguồn điều khiển
d. Nhận tín hiệu từ thiết bị ngoại vi đến
Đáp án đúng là: Nhận tín hiệu từ thiết bị ngoại vi đến
Câu 104: Trong đều khiển PLC thì khối Output có chức năng gì?
a. Xuất tín hiệu điều khiển ra thiết bị bên ngoài
b. Xử lý tín hiệu điều khiển
c. Cung cấp nguồn điều khiển
d. Nhận tín hiệu từ thiết bị ngoại vi đến
Đáp án đúng là: Xuất tín hiệu điều khiển ra thiết bị bên ngoài
Câu 105: Trong đều khiển PLC thì khối CPU có chức năng gì?
a. Trung tâm điều khiển của PLC
b. Xử lý tín hiệu điều khiển
c. Cung cấp nguồn điều khiển
d. Nhận tín hiệu từ thiết bị ngoại vi đến
Đáp án đúng là: Trung tâm điều khiển của PLC
Câu 106: Trong đều khiển PLC thì khối nguồn có chức năng gì?
a. Trung tâm điều khiển của PLC
b. Xử lý tín hiệu điều khiển
c. Cung cấp nguồn điều khiển
d. Nhận tín hiệu từ thiết bị ngoại vi đến
Đáp án đúng là: Cung cấp nguồn điều khiển
Câu 107: Có các loại tín hiệu vào ra nào trên PLC?
a. Tín hiệu đều khiển số và tín hiệu đều khiển tương tự
b. Tín hiệu sóng vô tuyến
c. Tín hiệu sóng âm
d. Tín hiệu sóng hài
Đáp án đúng là: Tín hiệu đều khiển số và tín hiệu khiển đều tương tự
Câu 108: Phần kích từ của máy phát điện đồng bộ có nhiệm vụ như thế nào?
a. Có nhiệm vụ tạo ra dòng điện một chiều cung cấp cho dây quấn phần cảm để tạo ra từ trường kích từ
b. Có nhiệm vụ tạo ra dòng điện xoay chiều cung cấp cho dây quấn phần cảm để tạo ra từ trường kích từ
c. Có nhiệm vụ tạo ra dòng điện một chiều cung cấp cho dây quấn phần cảm để tạo ra từ trường quay
d. Có nhiệm vụ tạo ra dòng điện một chiều cung cấp cho dây quấn phần cảm để tạo ra dòng điện
Đáp án đúng là: Có nhiệm vụ tạo ra dòng điện một chiều cung cấp cho dây quấn phần cảm để tạo ra từ trường kích từ
Câu 109: Nguyên lý làm việc của máy phát điện đồng bộ?.
a. Khi động cơ sơ cấp quay roto, cuộn kích từ của phần cảm có dòng một chiều sẽ biến thành một nam châm điện quay với tốc độ n. Từ trường của roto quét qua dây quấn phần ứng trên stator và cảm ứng trên nó sức điện động xoay chiều hình sin
b. Nếu phần cảm có p cặp cực, tốc độ quay của roto là n thì dòng cảm ứng sẽ có tần số: f = p.n/60 hoặc n = 60f/p (v/ph). Tương tự như máy điện không đồng bộ, sức điện động cảm ứng trong mỗi pha dây quấn có trị hiệu dụng: E= 4,44.f.W.kdq.Fo ; Trong đó Fo là từ thông dưới mỗi cực từ; W là số vòng dây một pha, kdq là hệ số dây quấn
c. Khi động cơ sơ cấp quay roto, cuộn kích từ của phần cảm có dòng xoay chiều sẽ biến thành một nam châm điện quay với tốc độ n. Từ trường của roto quét qua dây quấn phần ứng trên stator và cảm ứng trên nó sức điện động xoay chiều hình sin
d. Câu a, b đúng
Đáp án đúng là: Câu a, b đúng
Câu 110: Những vấn đề cần lưu ý khi kiểm tra cách điện cáp lực 0,4kV và cáp 6,6kV? Tìm phương án sai
a. Các cáp hạ thế Uđm<1000V sử dụng mêgôm mét có điện áp 500÷1000V. Giá trị điện trở đo được ≥ 1 MΩ
b. Các cáp trung thế sử dụng mêgôm mét có điện áp 2500÷5000V. Giá trị điện trở đo được không tiêu chuẩn, tùy thuộc vào nhà sản xuất (cáp hạ thế ). Hệ số hấp thụ cáp Kht ≥ 1.3. Tuy nhiên để đánh giá chất lượng cáp tốt hoặc xấu ngoài việc đo sơ bộ điện trở cách điện bằng mêgômmét còn tiến hành thử cao thế cáp
c. Đối với cáp một lõi có màn chắn điện áp được đặt vào giữa ruột dẫn điện và màn chắn kim loại. Đối với cáp nhiều lõi mà các lõi có màn chắn riêng, thì điện áp được đặt giữa từng ruột dẫn điện và màn chắn kim loại. Đối với cáp nhiều lõi mà các lõi không có màn chắn riêng, thì điện áp được đặt giữa từng ruột dẫn điện và tất cả các ruột dẫn còn lại cùng với vỏ kim loại
d. Các cáp trung thế sử dụng megommet có điện áp 500÷1000V. Giá trị điện trở đo được không tiêu chuẩn, tùy thuộc vào nhà sản xuất (cáp hạ thế ). Hệ số hấp thụ cáp Kht ≥ 1.3. Tuy nhiên để đánh giá chất lượng cáp tốt hoặc xấu ngoài việc đo sơ bộ điện trở cách điện bằng mêgômmét còn tiến hành thử cao thế cáp
Đáp án đúng là: Các cáp trung thế sử dụng megommet có điện áp 500÷1000V. Giá trị điện trở đo được không tiêu chuẩn, tùy thuộc vào nhà sản xuất (cáp hạ thế ). Hệ số hấp thụ cáp Kht ≥ 1.3. Tuy nhiên để đánh giá chất lượng cáp tốt hoặc xấu ngoài việc đo sơ bộ điện trở cách điện bằng mêgômmét còn tiến hành thử cao thế cáp
Câu 111: Trên các megomet (Ví dụ: megomet KYORITSU 3121), ngoài các cực LINE và EARTH còn có cực GUARD. Cực đấu dây này được sử dụng để làm gì?
a. Sử dụng khi đo điện trở có cách điện lớn
b. Sử dụng khi đo điện trở có cách điện nhỏ
c. Tách không cho trị số điện trở rò rỉ bề mặt tham gia vào khi cần phép đo điện trở cách điện chính xác
d. Bảo vệ an toàn cho thiết bị tránh hư hỏng đồng hồ đo
Đáp án đúng là: Tách không cho trị số điện trở rò rỉ bề mặt tham gia vào khi cần phép đo điện trở cách điện chính xác
Câu 112: Roto của máy điện không đồng bộ xoay chiều 3 pha roto dây quấn thường được đấu như thế nào?
a. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
b. Dây quấn ba pha của roto thường được đấu tam giác, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
c. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối ngắn mạch vào vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để để nối với mạch điện bên ngoài
d. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào hai vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
Đáp án đúng là: Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
Câu 113: Trên các megomet (Ví dụ: megomet KYORITSU 3121), ngoài các cực LINE và EARTH còn có cực GUARCực đấu dây này được sử dụng để làm gì?
a. Sử dụng khi đo điện trở có cách điện lớn
b. Sử dụng khi đo điện trở có cách điện nhỏ
c. Tách không cho trị số điện trở rò rỉ bề mặt tham gia vào khi cần phép đo điện trở cách điện chính xác
d. Bảo vệ an toàn cho thiết bị tránh hư hỏng đồng hồ đo
Đáp án đúng là: Tách không cho trị số điện trở rò rỉ bề mặt tham gia vào khi cần phép đo điện trở cách điện chính xác
Câu 114: Trong hệ số hấp thụ hay còn gọi là hằng số hấp thụ trị số R60, R15 là trị số gì?
a. Là trị số điện trở đo được bằng megommet, khi đo liên tục trong khoảng thời gian là 15s và 60s
b. Là trị số điện trở đo được bằng megommet, khi đo liên tục trong khoảng thời gian là 15p và 60p
c. Là trị số điện trở đo được bằng megommet, khi đo liên tục trong khoảng thời gian là 1,5s và 6,0s
d. Là trị số điện trở đo được bằng đồng hồ vạn năng, khi đo liên tục trong khoảng thời gian là 15s và 60s
Đáp án đúng là: Là trị số điện trở đo được bằng megommet, khi đo liên tục trong khoảng thời gian là 15s và 60s
Câu 115: Yêu cầu nào không đúng khi đánh giá tình trạng vòng bi động cơ sau khi đưa động cơ ra sửa chữa?
a. Đánh giá mức độ hư hỏng vòng bi, sự làm việc của máy, mức độ quan trọng của máy, điều kiện vận hành, tần suất kiểm tra bảo dưỡng
b. Khi kiểm tra phát hiện vòng bi có những hư hỏng bất thường thì cố gắng xác định được nguyên nhân và cách khắc phục và tiến hành khắc phục
c. Khi kiểm tra phát hiện bất cứ hư hỏng nào mà thấy không thể sử dụng lại thì vòng bi cần phải thay mới ngay
d. Khi kiểm tra phát hiện bất cứ hư hỏng nào mà thấy không thể sử dụng lại thì tiếp tục sử dụng đến khi có vòng bi mới thì thay thế
Đáp án đúng là: Khi kiểm tra phát hiện bất cứ hư hỏng nào mà thấy không thể sử dụng lại thì tiếp tục sử dụng đến khi có vòng bi mới thì thay thế
Câu 116: Khi vòng trong và vòng ngoài của vòng bi bị xoay trên thân ổ mà không thể thay mới trục hoặc ổ ta phải làm gì?
a. Có thể sử dụng phương pháp hàn đắp và gia công lại cho đúng dung sai lắp ghép. Tuy nhiên phải rất lưu ý trong khi gia công để tránh không bị hiện tượng lệch trục
b. Sử dụng phương pháp băm trục hoặc ổ và gia công lại cho đúng dung sai lắp ghép. Tuy nhiên phải rất lưu ý trong khi gia công để tránh không bị hiện tượng lệch trục
c. Sử dụng phương pháp băm trục và gia công lại cho đúng dung sai lắp ghép. Tuy nhiên phải rất lưu ý trong khi gia công để tránh không bị hiện tượng lệch trục
d. Có thể sử dụng phương pháp băm ổ và gia công lại cho đúng dung sai lắp ghép. Tuy nhiên phải rất lưu ý trong khi gia công để tránh không bị hiện tượng lệch trục
Đáp án đúng là: Có thể sử dụng phương pháp hàn đắp và gia công lại cho đúng dung sai lắp ghép. Tuy nhiên phải rất lưu ý trong khi gia công để tránh không bị hiện tượng lệch trục
Câu 117: Các bước tiến hành tháo nắp và rút roto ra khỏi động cơ khi sửa chữa bảo dưỡng?
a. Đánh dấu nắp động cơ, nắp mỡ. Tháo nắp động cơ và nắp mỡ. Đánh dấu và rút roto ra khỏi stator
b. Tháo nắp động cơ và nắp mỡ. Đánh dấu và rút roto ra khỏi stator
c. Đánh dấu nắp động cơ, nắp mỡ. Tháo nắp động cơ. Đánh dấu và rút roto ra khỏi stator
d. Đánh dấu nắp động cơ, nắp mỡ. Tháo nắp động cơ và nắp mỡ. Rút roto ra khỏi stator
Đáp án đúng là: Đánh dấu nắp động cơ, nắp mỡ. Tháo nắp động cơ và nắp mỡ. Đánh dấu và rút roto ra khỏi stator
Câu 118: Công việc nào cần thực hiện khi tiến hành kiểm tra, bảo dưỡng sửa chữa stator động cơ điện?
a. Kiểm tra độ sạch bối dây stator, làm sạch bằng cách thổi bụi, nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng chất tẩy và xăng nguyên chất
b. Kiểm tra độ sạch bối dây stator, làm sạch bằng cách thổi bụi, nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng nước và xăng nguyên chất
c. Kiểm tra độ sạch bối dây stator, làm sạch bằng cách phun nước, nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng chất tẩy và xăng nguyên chất
d. Đo trị số điện trở cuộn dây, trị số điện trở nối đất đối chiếu với biên bản kiểm tra lần trước
Đáp án đúng là: Kiểm tra độ sạch bối dây stator, làm sạch bằng cách thổi bụi, nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng chất tẩy và xăng nguyên chất
Câu 119: Sau khi lắp ráp trở lại động cơ điện xong cần chạy thử không tải để làm gì?
a. Chạy thử không tải để kiểm tra độ trơn trượt của vòng bi đã đúng với yêu cầu công nghệ chưa và ghi nhận các thông số chạy không tải
b. Chạy thử không tải để kiểm tra chiều quay của động cơ điện đã đúng với yêu cầu công nghệ chưa và ghi nhận các thông số chạy không tải
c. Chạy thử không tải để kiểm tra sự làm việc của động cơ đã đúng với yêu cầu công nghệ chưa và ghi nhận các thông số chạy không tải
d. Chạy thử không tải để kiểm tra dòng điện vào động cơ đã đúng với yêu cầu công nghệ chưa và ghi nhận các thông số chạy không tải
Đáp án đúng là: Chạy thử không tải để kiểm tra chiều quay của động cơ điện đã đúng với yêu cầu công nghệ chưa và ghi nhận các thông số chạy không tải
Câu 120: Nêu yêu cầu khi vệ sinh làm sạch stator động cơ điện trong quá trình trung tu, sửa chữa sau khi rút roto ra ngoài?
a. Làm sạch roto với việc loại bỏ bụi và rỉ dầu. Nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép roto, chùi và làm sạch chúng bằng chất tẩy và xăng nguyên chất
b. Làm sạch stator với việc loại bỏ cách điện và rỉ dầu. Nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng dầu nguyên chất
c. Làm sạch stator with việc loại bỏ bụi và rỉ mỡ. Nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng chất tẩy và xăng nguyên chất
d. Làm sạch stator với việc loại bỏ bụi và rỉ dầu. Nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng chất tẩy và xăng nguyên chất
Đáp án đúng là: Làm sạch stator với việc loại bỏ bụi và rỉ dầu. Nếu xuất hiện nhiều rỉ dầu trên đầu cuối cuộn dây và lõi thép stator, chùi và làm sạch chúng bằng chất tẩy và xăng nguyên chất
Câu 121: Nêu yêu cầu khi tiến hành hạng mục kiểm tra, bảo dưỡng sửa chữa lõi thép stator động cơ điện trong trung, đại tu?
a. a. Kiểm tra, vệ sinh toàn bộ lõi thép stator; Kiểm tra vệ sinh, bảo dưỡng toàn bộ các nêm chèn, ống thông gió
b. b. Thay thế những nêm không đảm bảo. Bảo đảm nêm rãnh của khối đúng vị trí, các ống dẫn thông gió không bị tắc, cuối cuộn dây được chèn chặt và lõi thép chắc chắn, không bị quá nhiệt và hao mòn
c. c. Bảo đảm các sứ còn nguyên vẹn, các đầu cáp ra đảm bảo cách điện đúng quy định. Các đầu cốt được xử lý đảm bảo tiếp xúc tốt
d. Câu a, b đúng
Đáp án đúng là: Câu a, b đúng
Câu 122: Khi tiến hành công đoạn sấy chuẩn bị của hạng mục sơn tẩm và sấy cách điện khoang stator động cơ điện (6,6kV) trong trung, đại tu phải cần có thời gian và nhiệt độ sấy chuẩn bị là bao nhiêu?
a. Thời gian sấy từ (4h÷12h) tuỳ theo loại máy nhỏ hoặc lớn, nhiệt độ từ 100÷110 °C
b. Thời gian sấy từ (1h÷2h) tuỳ theo loại máy nhỏ hoặc lớn, nhiệt độ từ 70÷100 °C
c. Thời gian sấy từ (2h÷10h) tuỳ theo loại máy nhỏ hoặc lớn, nhiệt độ từ 100÷110 °C
d. Thời gian sấy từ (4h÷12h) tuỳ theo loại máy nhỏ hoặc lớn, nhiệt độ từ 120÷140 °C
Đáp án đúng là: Thời gian sấy từ (4h÷12h) tuỳ theo loại máy nhỏ hoặc lớn, nhiệt độ từ 100÷110 °C
Câu 123: Khi tiến hành công đoạn tẩm sơn cách điện của hạng mục sơn tẩm và sấy cách điện khoang stator động cơ điện (6,6kV) trong trung, đại tu cần lưu ý những điều gì?
a. Sau khi sấy chuẩn bị xong, lấy động cơ ra ngoài để cho nhiệt độ hạ xuống khoảng (80 °C÷85 °C) rồi mới được tẩm sơn cách điện
b. Sau khi sấy chuẩn bị xong, lấy động cơ ra ngoài để cho nhiệt độ hạ xuống khoảng (85 °C÷90 °C) rồi mới được tẩm sơn cách điện
c. Sau khi sấy chuẩn bị xong, lấy động cơ ra ngoài để cho nhiệt độ hạ xuống khoảng (85 °C÷90 °C) rồi mới được tẩm sơn cách điện
d. Sau khi sấy chuẩn bị xong, lấy động cơ ra ngoài để cho nhiệt độ hạ xuống khoảng (65 °C÷70 °C) rồi mới được tẩm sơn cách điện
Đáp án đúng là: Sau khi sấy chuẩn bị xong, lấy động cơ ra ngoài để cho nhiệt độ hạ xuống khoảng (65 °C÷70 °C) rồi mới được tẩm sơn cách điện
Câu 124: Phương pháp nào không đúng khi tiến hành công đoạn sấy khô cách điện của hạng mục sơn tẩm và sấy cách điện khoang stator động cơ điện (6,6kV) trong trung, đại tú?
a. Sấy sau khi tẩm sơn cách điện là một giai đoạn rất quan trọng, phải đảm bảo sấy đúng nhiệt độ và thời gian quy định. Nếu không tuân thủ được hai điều kiện này thì sơn không khô tốt, cách điện của động cơ điện sẽ kém
b. Thông thường sấy ở nhiệt độ (110 °C ÷ 115 °C) thời gian sấy vào khoảng (12 giờ ÷ 24 giờ) kiểm tra độ cách điện ổn định trong khoảng (2 giờ ÷ 4 giờ), sờ tay vào màng sơn không còn dính mới coi là xong đợt nhất
c. Lúc bắt đầu sấy cần tăng nhiệt độ lên từ từ và sấy ở mức độ (60 0 C ÷ 70 0 C) trong (3 giờ ÷ 4 giờ), sau đó mới tăng lên (110 °C ÷ 115 °C) để tránh hiện tượng lớp sơn mặt ngoài khô nhanh tạo thành màng kín, cản trở lớp trong không khô hết được. Phải sử dụng vải bạt đậy kín lại, nhiệt độ phải đạt khoảng 110 °C và sau (10 giờ ÷ 20 giờ), thì dây quấn mới khô tốt được
d. Sấy sau khi tẩm sơn là một giai đoạn rất quan trọng, phải đảm bảo sơn đúng độ ẩm và thời gian. Nếu không tuân thủ được hai điều kiện này thì sơn sẽ được khô tốt, cách điện của máy điện sẽ kém
Đáp án đúng là: Sấy sau khi tẩm sơn là một giai đoạn rất quan trọng, phải đảm bảo sơn đúng độ ẩm và thời gian. Nếu không tuân thủ được hai điều kiện này thì sơn sẽ được khô tốt, cách điện của máy điện sẽ kém
Câu 125: Khi bảo dưỡng, sửa chữa động cơ điện 6,6kV, những vấn đế gì cần lưu ý trước và trong khi tháo các chi tiết của động cơ?
a. Trước khi tháo phải đánh dấu vị trí lắp ráp giữa thân máy và trục; Trong khi tháo phải làm dấu vị trí các bulong, chốt chặn, các miếng đệm,... để khi ráp lại tất cả các bộ phận đều nằm đúng vị trí của nó; Các bulong, đai ốc, ốc vít,... bị khô rỉ phải được xử lý và bơm dầu chống rỉ và để vài phút trước khi tháo
b. Trước khi tháo phải đánh dấu vị trí lắp ráp giữa nắp máy và thân máy; Trong khi tháo phải làm dấu vị trí các bulong, chốt chặn, các miếng đệm,... để khi ráp lại tất cả các bộ phận đều nằm đúng vị trí của nó; Các bulong, đai ốc, ốc vít,... bị khô rỉ phải được xử lý và bơm dầu chống rỉ và để vài phút trước khi tháo
c. Trước khi tháo phải đánh dấu vị trí lắp ráp giữa trục máy và vòng bi; Trong khi tháo phải làm dấu vị trí các bulong, chốt chặn, các miếng đệm,... để khi ráp lại tất cả các bộ phận đều nằm đúng vị trí của nó; Các bulong, đai ốc, ốc vít,... bị khô rỉ phải được xử lý và bơm dầu chống rỉ và để vài phút trước khi tháo
d. Trước khi tháo phải đánh dấu vị trí lắp ráp giữa nắp máy và thân máy; Trong khi tháo phải làm dấu vị trí các bulong, chốt chặn, các miếng đệm,... để khi ráp lại tất cả các bộ phận đều nằm đúng vị trí của nó; Các bulong, đai ốc, ốc vít,... bị khô rỉ phải được xử lý và bơm sơn chống rỉ và để vài phút trước khi tháo
Đáp án đúng là: Trước khi tháo phải đánh dấu vị trí lắp ráp giữa nắp máy và thân máy; Trong khi tháo phải làm dấu vị trí các bulong, chốt chặn, các miếng đệm,... để khi ráp lại tất cả các bộ phận đều nằm đúng vị trí của nó; Các bulong, đai ốc, ốc vít,... bị khô rỉ phải được xử lý và bơm dầu chống rỉ và để vài phút trước khi tháo
Câu 126: Cần chú ý những điểm gì khi thực hiện tháo và lắp các động cơ 6,6kV để sửa chữa bảo dưỡng ?
a. Khi tháo các động cơ, tất cả các ốc vít, các gioăng và các thiết bị khác phải được đánh dấu và bảo quản cho việc lắp lại; Trước khi lắp đặt rotor, cần kiểm tra bên trong thân stator cẩn thận và chắc chắn không còn các vật kim loại, các gioăng, hoặc các dị vật khác
b. Khi tháo các động cơ, tất cả các ốc vít, các gioăng và các thiết bị khác phải được đánh dấu; Trước khi lắp đặt rotor, cần kiểm tra bên trong thân stator cẩn thận và chắc chắn không còn các vật kim loại, các gioăng, hoặc các dị vật khác
c. Khi tháo các động cơ, tất cả các ốc vít, các gioăng và các thiết bị khác phải được đánh dấu và bảo quản cho việc lắp lại; Trước khi lắp đặt rotor, cần kiểm tra bên trong bộ phận làm mát cẩn thận và chắc chắn không còn các vật kim loại, các gioăng, hoặc các dị vật khác
d. Khi tháo các động cơ, tất cả các ốc vít, các gioăng và các thiết bị khác phải được đánh dấu và bảo quản cho việc lắp lại; Sau khi lắp đặt rotor, cần kiểm tra bên trong thân stator cẩn thận và chắc chắn không còn các vật kim loại, các gioăng, hoặc các dị vật khác
Đáp án đúng là: Khi tháo các động cơ, tất cả các ốc vít, các gioăng và các thiết bị khác phải được đánh dấu và bảo quản cho việc lắp lại; Trước khi lắp đặt rotor, cần kiểm tra bên trong thân stator cẩn thận và chắc chắn không còn các vật kim loại, các gioăng, hoặc các dị vật khác
Câu 127: Trước khi đưa các động cơ điện dự phòng vào vận hành cần thực hiện công việc gì?
a. Trước khi đưa các động cơ điện dự phòng vào vận hành cần đo điện trở cuộn dây stato động cơ, trị số cách điện phải đạt yêu cầu kỹ thuật
b. Trước khi đưa các động cơ điện dự phòng vào vận hành cần đo điện trở cách điện cuộn dây stato động cơ, trị số cách điện phải đạt yêu cầu kỹ thuật
c. Trước khi đưa các động cơ điện dự phòng vào vận hành cần đo điện trở cách điện cuộn dây roto động cơ, trị số cách điện phải đạt yêu cầu kỹ thuật
d. Trước khi đưa các động cơ điện dự phòng vào vận hành cần đo điện trở thuần cuộn dây stato động cơ, trị số cách điện phải đạt yêu cầu kỹ thuật
Đáp án đúng là: Trước khi đưa các động cơ điện dự phòng vào vận hành cần đo điện trở cách điện cuộn dây stato động cơ, trị số cách điện phải đạt yêu cầu kỹ thuật
Câu 128: Khi kiểm tra hoặc thay chổi than cho máy phát điện đang vận hành cần chú ý những gì?
a. Phải mang găng tay cách điện và cài chặt vào cổ tay. Không được dùng tay tiếp xúc đồng thời với hai cực tính khác nhau của chổi than
b. Phải mang găng tay cách điện và xắn tay áo gọn gàng. Không được dùng tay tiếp xúc đồng thời với hai cực tính khác nhau của chổi than
c. Phải mang găng tay cách điện và cài chặt vào cổ tay. Được dùng tay tiếp xúc đồng thời với hai cực tính khác nhau của chổi than
d. Phải mang găng tay cách nhiệt và cài chặt vào cổ tay. Không được dùng tay tiếp xúc đồng thời với hai cực tính khác nhau của chổi than
Đáp án đúng là: Phải mang găng tay cách điện và cài chặt vào cổ tay. Không được dùng tay tiếp xúc đồng thời với hai cực tính khác nhau của chổi than
Câu 129: Máy điện đồng bộ là loại máy điện như thế nào?
a. Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto không đổi bằng tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f/p
b. Máy điện đồng bộ là các máy điện một chiều có tốc độ quay n của roto không đổi bằng tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f/p
c. Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto không đổi khác tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f / p
d. Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto biến đổi khác tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f / p
Đáp án đúng là: Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto không đổi bằng tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f/p
Câu 130: Máy phát điện đồng bộ được cấu tạo bỏi các bộ phận chính nào?
a. Máy phát điện đồng bộ được cấu tạo từ 3 bộ phận chính là phần cảm, phần ứng và phần kích từ
b. Máy phát điện đồng bộ được cấu tạo từ 2 bộ phận chính là phần cảm, phần ứng
c. Máy phát điện đồng bộ được cấu tạo từ 4 bộ phận chính là phần cảm, phần ứng, phần kích từ và phần chổi than
d. Máy phát điện đồng bộ được cấu tạo từ 3 bộ phận chính là roto, stator và phần chổi than
Đáp án đúng là: Máy phát điện đồng bộ được cấu tạo từ 3 bộ phận chính là phần cảm, phần ứng và phần kích từ
Câu 131: Phần cảm của máy phát điện đồng bộ thường được cấu tạo như thế nào?
a. Thường đặt trên stator của máy điện. Trên roto có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
b. Thường đặt trên roto của máy điện. Trên stator có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
c. Thường đặt trên roto của máy điện. Trên roto có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
d. Thường đặt trên roto của máy điện. Trên roto có hệ thống dây quấn có dòng điện xoay chiều chạy qua để tạo thành một nam châm điện
Đáp án đúng là: Thường đặt trên roto của máy điện. Trên roto có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
Câu 132: Hệ số hấp thụ Kht với trị số R60/ R15 là gì?
a. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 phút kể từ lúc đưa điện áp vào và Rcđ đo sau 15 phút : Kht = R60' / R15'
b. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 1, 5 phút: Kht = R60' / R1,5'
c. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 1,5 s: Kht = R60" / R1,5"
d. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 15 s: Kht = R60" / R15"
Đáp án đúng là: Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 15 s: Kht = R60" / R15"
Câu 133: Giải thích khi đo điện trở cách điện, trị số dòng diện trong vật liệu cách điện thay dổi theo thời gian?
a. Kích thước hình học nhất định của cách điện được coi như một tụ điện hình học Chh . Khi đặt điện áp vào cách điện đương nhiên không có điện trở nạp. Chh được nạp đầy nhanh và tiêu thụ 1 dòng điện lớn sau đó tắt ngay. Dòng này biểu diễn Ihh
b. Dù tinh khiết bao nhiêu, cách điện vẫn có tạp chất. Các tạp chất tạo thành phân cực và coi như các tụ này nằm trong bề dày cách điện được nối tiếp với một điện trở. Khi đặt điện áp, các tụ nội bộ này tiêu thụ một dòng nạp có tính chất hấp thụ mà không cho qua cách diện. Vì vậy biểu diễn tụ, và dòng này bằng Cht và Iht. Trong bề dày cách diện có nhiều tạp chất (tức nhiều Cht nối tiếp) thì phần cách điện còn lại Rht sẽ nhỏ nên Iht tắt nhanh, nếu Rht lớn Iht tắt chậm. Ðiều này tương ứng với cách điện ẩm hay khô
c. Khi các tụ Chh và Cht đã nạp xong, dòng qua cách diện chỉ còn là dòng rò và được đặc trưng bởi Rcđ và Ir
d. Tất cả đều đúng
Đáp án đúng là: Tất cả đều đúng
Câu 134: Tại sao khi kiểm tra cách điện động cơ điện ta cần tách riêng từng pha cuộn dây động cơ kể cả đấu Y và đấu D.
a. Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
b. Để kiểm tra được trị số điện trở thuần một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
c. Để kiểm tra được trị số điện trở thuần một cách chính xác của các bối dây so với nhau
d. Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với đất và của từng bối dây với nhau
Đáp án đúng là: Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
Câu 135: Roto của máy điện không đồng bộ xoay chiều 3 pha roto dây quấn có cấu tạo như thế nào?
a. Dây quấn 3 pha nối ngắn mạch với nhau
b. Nối ngắn mạch hai đầu các cuộn dây
c. Nối vào chổi than bên ngoài
d. Nối với điện trở phụ
Đáp án đúng là: Nối vào chổi than bên ngoài
Câu 136: Ưu điểm của động cơ điện không đồng bộ xoay chiều roto dây quấn?
a. Mô men mở máy nhỏ, dòng mở máy nhỏ, điều chỉnh tốc độ dễ dàng
b. Mô men mở máy lớn, dòng mở máy lớn, điều chỉnh tốc độ dễ dàng
c. Mô men mở máy lớn, dòng mở máy nhỏ, điều chỉnh tốc độ dễ dàng
d. Mô men mở máy lớn, dòng mở máy nhỏ, không điều chỉnh được tốc độ
Đáp án đúng là: Mô men mở máy lớn, dòng mở máy nhỏ, điều chỉnh tốc độ dễ dàng
Câu 137: Roto của máy điện không đồng bộ xoay chiều 3 pha roto dây quấn thường được đấu như thế nào?
a. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
b. Dây quấn ba pha của roto thường được đấu tam giác, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
c. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối ngắn mạch vào vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để để nối với mạch điện bên ngoài
d. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào hai vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
Đáp án đúng là: Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
Câu 138: Động cơ điện không đồng bộ là loại máy điện có nguyên lý làm việc như thế nào?
a. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto khác với tốc độ quay của từ trường
b. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto nhỏ hơn với tốc độ quay của từ trường
c. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto lớn hơn với tốc độ quay của từ trường
d. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto bằng với tốc độ quay của từ trường
Đáp án đúng là: Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto khác với tốc độ quay của từ trường
Câu 139: Dây quấn roto của động cơ điện không đồng bộ xoay chiều roto lồng sóc sử dụng tại nhà máy Nhiệt điện Uông Bí được cấu tạo như thế nào?.
a. Gồm những thanh cách nhiệt dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép
b. Gồm những thanh dẫn dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch đặt bên ngoài lõi thép
c. Gồm những thanh dẫn dày đặt tại các đường rãnh soắn. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép
d. Gồm những thanh dẫn dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép
Đáp án đúng là: Gồm những thanh dẫn dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép
Câu 140: Nguyên lý hoạt động của động cơ điện không đồng bộ xoay chiều roto lồng sóc?
a. Muốn cho động cơ làm việc, stator cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
b. Muốn cho động cơ làm việc, stator cần được cấp dòng điện một chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
c. Muốn cho động cơ làm việc, roto cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
d. Muốn cho động cơ làm việc, stator cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn roto sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
Đáp án đúng là: Muốn cho động cơ làm việc, stator cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
Câu 141: Khái niệm chung về máy điện 1 chiều?
a. Máy điện một chiều là loại máy điện sử dụng với mạng điện xoay chiều, máy có thể vận hành ở chế độ máy phát hoặc chế độ động cơ
b. Máy điện một chiều là loại máy điện sử dụng với mạng điện một chiều, máy có thể vận hành ở chế độ máy phát hoặc chế độ động cơ
c. Máy điện một chiều là loại máy điện sử dụng với mạng điện một chiều, máy chỉ có thể vận hành ở chế độ động cơ
d. Máy điện một chiều là loại máy điện sử dụng với mạng điện một chiều, máy chỉ có thể vận hành ở chế độ máy phát
Đáp án đúng là: Máy điện một chiều là loại máy điện sử dụng với mạng điện một chiều, máy có thể vận hành ở chế độ máy phát hoặc chế độ động cơ
Câu 142: Cấu tạo phần tĩnh (stator) của máy điện một chiều gồm các bộ phận nào? Tìm phương án sai.
a. Cực từ chính bao gồm: Lõi cực từ; Dây quấn cực từ chính; Cực từ phụ: Dùng để cải thiện đổi chiều. Bao gồm: Lõi cực có thể làm bằng thép khối ; Dây quấn cực từ phụ, đặt trên cực từ phụ và nối nối tiếp với dây quấn phần ứng qua các chổi than
b. Gông từ: Làm mạch dẫn từ, nối liền các cực từ chính và phụ, đồng thời làm vỏ máy. Máy nhỏ và vừa gông từ làm bằng thép tấm, máy lớn làm bằng thép đúc
c. Các bộ phận khác. Bao gồm: Nắp máy; Cơ cấu chổi than
d. Gông từ: Làm mạch dẫn từ, nối liền các cực từ chính và phụ, đồng thời làm trục máy; Máy nhỏ và vừa gông từ làm bằng thép cacbon, máy lớn làm bằng thép gió
Đáp án đúng là: Gông từ: Làm mạch dẫn từ, nối liền các cực từ chính và phụ, đồng thời làm trục máy; Máy nhỏ và vừa gông từ làm bằng thép cacbon, máy lớn làm bằng thép gió
Câu 143: Cấu tạo phần quay (roto) của máy điện một chiều gồm các bộ phận nào?
a. Lõi thép phần cảm và dây quấn phần ứng; Cổ góp; Các bộ phận khác. Bao gồm: Trục máy; Quạt làm mát
b. Lõi thép phần ứng và dây quấn phần ứng; Cổ góp; Các bộ phận khác. Bao gồm: Trục máy; Quạt làm mát
c. Lõi thép phần ứng và dây quấn phần cảm; Cổ góp; Các bộ phận khác. Bao gồm: Trục máy; Quạt làm mát
d. Lõi thép phần ứng và dây quấn phần ứng; Cổ góp; Các bộ phận khác. Bao gồm: Vỏ máy; Quạt làm mát
Đáp án đúng là: Lõi thép phần ứng và dây quấn phần ứng; Cổ góp; Các bộ phận khác. Bao gồm: Trục máy; Quạt làm mát
Câu 144: Anh, chị hãy cho biết thế nào là điện áp định mức của thiết bị điện ?
a. Là giá trị điện áp do nhà chế tạo ấn định cho điều kiện vận hành quy định đối với một phần tử, một thiết bị hoặc dụng cụ
b. Là giá trị điện áp danh định của hệ thống mà các một phần tử, thiết bị hoặc dụng cụ điện được đặt vào
c. Là giá trị điện áp cao nhất do nhà chế tạo ấn định cho điều kiện vận hành quy định đối với một phần tử, một thiết bị hoặc dụng cụ
d. Là giá trị dòng điện do nhà chế tạo ấn định cho điều kiện vận hành quy định đối với một phần tử, một thiết bị hoặc dụng cụ
Đáp án đúng là: Là giá trị điện áp do nhà chế tạo ấn định cho điều kiện vận hành quy định đối với một phần tử, một thiết bị hoặc dụng cụ
Câu 145: Khi chọn aptomat đóng, cắt và bảo vệ cho mạch điện (thiết bị) cần chú ý điều nào?
a. Chế độ làm việc ở định mức của aptomat phải là chế độ làm việc dài hạn, nghĩa là trị số dòng điện định mức chạy qua aptomat lâu tùy ý
b. Mạch dòng điện của aptomat phải chịu được dòng điện lớn (khi có ngắn mạch) lúc các tiếp điểm của nó đã đóng hay đang đóng
c. Mạch điện áp của aptomat phải chịu được điện áp lớn (khi có ngắn mạch) lúc các tiếp điểm của nó đã đóng hay đang đóng
d. Câu a, b đúng.
Đáp án đúng là: Câu a, b đúng.
Câu 146: Cần chú ý điều nào khi chọn aptomat đóng, cắt và bảo vệ cho mạch điện (thiết bị)?
a. Aptomat phải ngắt được trị số dòng điện ngắn mạch định mức; Sau khi ngắt dòng điện ngắn mạch aptomat đảm bảo vẫn làm việc tốt ở trị số điện áp định mức
b. Aptomat phải ngắt được trị số dòng điện ngắn mạch lớn; Sau khi ngắt dòng điện ngắn mạch aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức
c. Aptomat phải ngắt được trị số dòng điện ngắn mạch lớn; Sau khi ngắt dòng điện ngắn mạch aptomat đảm bảo vẫn làm việc tốt ở trị số điện áp định mức
d. Aptomat phải ngắt được trị số điện áp ngắn mạch lớn; Sau khi ngắt dòng điện ngắn mạch aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức
Đáp án đúng là: Aptomat phải ngắt được trị số dòng điện ngắn mạch lớn; Sau khi ngắt dòng điện ngắn mạch aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức
Câu 147: Để nâng cao tính ổn định cho các thiết bị điện cần chú ý điều gì khi chọn aptomat đóng, cắt, bảo vệ cho mạch điện?
a. Để nâng cao tính ổn định nhiệt và điện động của các thiết bị điện, hạn chế sự phá hoại do dòng điện ngắn mạch gây ra, aptomat phải có thời gian cắt lớn. Muốn vậy thường phải kết hợp lực thao tác cơ học với thiết bị dập hồ quang bên trong aptomat
b. Để nâng cao tính ổn định nhiệt và điện động của các thiết bị điện, hạn chế sự phá hoại do dòng điện ngắn mạch gây ra, aptomat phải có tiếp điểm lớn
c. Để nâng cao tính ổn định nhiệt và điện động của các thiết bị điện, hạn chế sự phá hoại do dòng điện ngắn mạch gây ra, aptomat phải có thời gian cắt bé. Muốn vậy thường phải kết hợp lực thao tác cơ học với thiết bị dập hồ quang bên trong aptomat
d. Để nâng cao tính ổn định nhiệt và điện động của các thiết bị điện, hạn chế sự phá hoại do dòng điện ngắn mạch gây ra, aptomat phải có thời gian cắt bé. Muốn vậy thường phải kết hợp lực thao tác cơ học với thiết bị dập hồ quang bên trong aptomat
Đáp án đúng là: Để nâng cao tính ổn định nhiệt và điện động của các thiết bị điện, hạn chế sự phá hoại do dòng điện ngắn mạch gây ra, aptomat phải có thời gian cắt bé. Muốn vậy thường phải kết hợp lực thao tác cơ học với thiết bị dập hồ quang bên trong aptomat
Câu 148: Nêu tính năng tác dụng của aptomat khi làm việc ở chế độ định mức?
a. Chế độ làm việc ở định mức của aptomat phải là chế độ làm việc dài hạn. Mạch dòng điện của aptomat phải chịu được dòng điện lớn (khi chưa tới giới hạn ngắt) lúc các tiếp điểm của nó đã đóng hay đang đóng
b. Chế độ làm việc ở định mức của aptomat là chế độ làm việc ngắn hạn. Mạch dòng điện của aptomat phải chịu được dòng điện lớn (khi chưa tới giới hạn ngắt) lúc các tiếp điểm của nó đã đóng hay đang đóng
c. Chế độ làm việc ở định mức của aptomat là chế độ làm việc dài hạn. Mạch dòng điện của aptomat chỉ chịu được dòng điện định mức (khi chưa tới giới hạn ngắt) lúc các tiếp điểm của nó đã đóng hay đang đóng
d. Chế độ làm việc ở định mức của aptomat là chế độ làm việc dài hạn. Mạch điện áp của aptomat phải chịu được điện áp lớn (khi chưa tới giới hạn ngắt) lúc các tiếp điểm của nó đã đóng hay đang đóng
Đáp án đúng là: Chế độ làm việc ở định mức của aptomat phải là chế độ làm việc dài hạn. Mạch dòng điện của aptomat phải chịu được dòng điện lớn (khi chưa tới giới hạn ngắt) lúc các tiếp điểm của nó đã đóng hay đang đóng
Câu 149: Nêu tính năng tác dụng của aptomat khi làm việc ở chế độ sự cố quá tải?
a. Aptomat ngắt được khi trị số điện áp quá tải (cắt quá dòng nhờ rơle nhiệt) sau thời gian định mức (khi tới giới hạn ngắt). Sau khi ngắt, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
b. Aptomat ngắt được khi trị số dòng điện quá tải (cắt quá dòng nhờ rơle nhiệt) sau thời gian định mức (khi tới giới hạn ngắt) . Sau khi ngắt, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
c. Aptomat ngắt được khi trị số dòng điện quá tải (cắt quá dòng nhờ rơle nhiệt) sau thời gian định mức (khi tới giới hạn ngắt) . Sau khi ngắt, aptomat không làm việc lại được ở trị số dòng điện định mức
d. Aptomat ngắt được khi trị số dòng điện định mức (cắt quá dòng nhờ rơle nhiệt) sau thời gian định mức (khi tới giới hạn ngắt) . Sau khi ngắt, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
Đáp án đúng là: Aptomat ngắt được khi trị số dòng điện quá tải (cắt quá dòng nhờ rơle nhiệt) sau thời gian định mức (khi tới giới hạn ngắt) . Sau khi ngắt, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
Câu 150: Nêu tính năng tác dụng của aptomat khi làm việc ở chế độ sự cố ngắn mạch?
a. Aptomat ngắt được khi trị số dòng điện ngắn mạch lớn (cắt nhanh nhờ rơle từ, khi tới giới hạn ngắt). Sau khi ngắt dòng điện ngắn mạch, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
b. Aptomat ngắt được khi trị số điện áp ngắn mạch lớn (cắt nhanh nhờ rơle từ, khi tới giới hạn ngắt). Sau khi ngắt dòng điện ngắn mạch, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
c. Aptomat ngắt được khi trị số dòng điện ngắn mạch lớn (cắt nhanh nhờ rơle nhiệt, khi tới giới hạn ngắt). Sau khi ngắt dòng điện ngắn mạch, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
d. Aptomat ngắt được khi trị số dòng điện ngắn mạch lớn (cắt nhanh nhờ rơle từ, khi tới giới hạn ngắt). Sau khi ngắt điện áp ngắn mạch, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
Đáp án đúng là: Aptomat ngắt được khi trị số dòng điện ngắn mạch lớn (cắt nhanh nhờ rơle từ, khi tới giới hạn ngắt). Sau khi ngắt dòng điện ngắn mạch, aptomat đảm bảo vẫn làm việc tốt ở trị số dòng điện định mức khi làm việc trở lại
Câu 151: Nêu tính năng tác dụng của aptomat khi làm việc ở chế độ sự cố giảm điện áp?
a. Aptomat ngắt được khi trị số điện áp bị sụt giảm (mất pha, khi tới giới hạn ngắt) . Sau khi ngắt aptomat đảm bảo vẫn làm việc tốt ở trị số điện áp định mức khi làm việc trở lại
b. Aptomat ngắt được khi trị số dòng điện bị sụt giảm (mất pha, khi tới giới hạn ngắt) . Sau khi ngắt aptomat đảm bảo vẫn làm việc tốt ở trị số điện áp định mức khi làm việc trở lại
c. Aptomat ngắt được khi trị số điện áp bị sụt giảm (mất pha, khi tới giới hạn ngắt) . Sau khi ngắt aptomat không làm việc được ở trị số điện áp định mức khi làm việc trở lại
d. Aptomat ngắt được khi trị số điện từ bị sụt giảm (mất pha, khi tới giới hạn ngắt) . Sau khi ngắt aptomat đảm bảo vẫn làm việc tốt ở trị số điện áp định mức khi làm việc trở lại
Đáp án đúng là: Aptomat ngắt được khi trị số điện áp bị sụt giảm (mất pha, khi tới giới hạn ngắt) . Sau khi ngắt aptomat đảm bảo vẫn làm việc tốt ở trị số điện áp định mức khi làm việc trở lại
Câu 152: Để phân loại aptomat người ta có thể dựa theo yếu tố nào sau?
a. Theo thời gian thao tác, người ta chia aptomat ra loại tác động có thời gian trễ lớn và loại tác động có thời gian định mức; Theo công dụng bảo vệ, người ta chia aptomat ra các loại: aptomat cực đại theo dòng điện, aptomat cực tiểu theo điện áp, Aptomat dòng điện ngược v.v...
b. Theo thời gian thao tác, người ta chia aptomat ra loại tác động không tức thời và loại tác động tức thời (nhanh); Theo công dụng bảo vệ, người ta chia aptomat ra các loại: aptomat cực đại theo dòng điện, aptomat cực tiểu theo điện áp, aptomat dòng điện ngược v.v...
c. Theo thời gian thao tác, người ta chia aptomat ra loại tác động không tức thời và loại tác động tức thời (nhanh); Theo công dụng bảo vệ, người ta chia aptomat ra các loại: aptomat cực đại theo điện áp, aptomat cực tiểu theo dòng điện, aptomat dòng điện định mức v.v...
d. Theo thời gian thao tác, người ta chia aptomat ra loại tác động không tức thời và loại tác động tức thời (nhanh); Theo công dụng bảo vệ, người ta chia aptomat ra các loại: aptomat cực tiểu theo dòng điện, aptomat cực đại theo điện áp, aptomat dòng điện ngược v.v...
Đáp án đúng là: Theo thời gian thao tác, người ta chia aptomat ra loại tác động không tức thời và loại tác động tức thời (nhanh); Theo công dụng bảo vệ, người ta chia aptomat ra các loại: aptomat cực đại theo dòng điện, aptomat cực tiểu theo điện áp, aptomat dòng điện ngược v.v...
Câu 153: Khái quát và công dụng của khởi động từ trong mạch điện?
a. Khởi động từ là một loại thiết bị điện dùng để điều khiển từ xa việc đóng thường xuyên các mạch điện động lực, có dòng điện ngắt không vượt quá giới hạn dòng điện quá tải của mạch điện, bảo vệ quá tải, ngắn mạch (nếu được lắp thêm các thiết bị bảo vệ) cho các thiết bị điện, mạch điện
b. Khởi động từ là một loại thiết bị điện dùng để điều khiển từ xa việc đóng/cắt, thường xuyên các mạch điện động lực, có dòng điện ngắt vượt quá giới hạn dòng điện quá tải của mạch điện, bảo vệ quá tải, ngắn mạch (nếu được lắp thêm các thiết bị bảo vệ) cho các thiết bị điện, mạch điện
c. Khởi động từ là một loại thiết bị điện dùng để điều khiển từ xa việc đóng/cắt, thường xuyên các mạch điện động lực, có dòng điện ngắt không vượt quá giới hạn dòng điện quá tải của mạch điện, bảo vệ quá tải, ngắn mạch (nếu được lắp thêm các thiết bị bảo vệ) cho các thiết bị điện, mạch điện
d. Câu 1, 2 đúng
Đáp án đúng là: Khởi động từ là một loại thiết bị điện dùng để điều khiển từ xa việc đóng/cắt, thường xuyên các mạch điện động lực, có dòng điện ngắt không vượt quá giới hạn dòng điện quá tải của mạch điện, bảo vệ quá tải, ngắn mạch (nếu được lắp thêm các thiết bị bảo vệ) cho các thiết bị điện, mạch điện
Câu 154: Những vấn đề cần lưu ý khi kiểm tra cách điện cáp lực 0,4kV và cáp 6,6kV? Tìm phương án sai.
a. Các cáp hạ thế Uđm<1000V sử dụng megomet có điện áp 500÷1000V. Giá trị điện trở đo được ≥ 1 MΩ
b. Các cáp trung thế sử dụng megomet có điện áp 2500÷5000V. Giá trị điện trở đo được không tiêu chuẩn, tùy thuộc vào nhà sản xuất (cáp hạ thế ). Hệ số hấp thụ cáp Kht ≥ 1.3. Tuy nhiên để đánh giá chất lượng cáp tốt hoặc xấu ngoài việc đo sơ bộ điện trở cách điện bằng mêgômmét còn tiến hành thử cao thế cáp
c. Đối với cáp một lõi có màn chắn điện áp được đặt vào giữa ruột dẫn điện và màn chắn kim loại. Đối với cáp nhiều lõi mà các lõi có màn chắn riêng, thì điện áp được đặt giữa từng ruột dẫn điện và màn chắn kim loại. Đối với cáp nhiều lõi mà các lõi không có màn chắn riêng, thì điện áp được đặt giữa từng ruột dẫn điện và tất cả các ruột dẫn còn lại cùng với vỏ kim loại
d. Các cáp trung thế sử dụng megomet có điện áp 500÷1000V. Giá trị điện trở đo được không tiêu chuẩn, tùy thuộc vào nhà sản xuất (cáp hạ thế ). Hệ số hấp thụ cáp Kht ≥ 1.3. Tuy nhiên để đánh giá chất lượng cáp tốt hoặc xấu ngoài việc đo sơ bộ điện trở cách điện bằng mêgômmét còn tiến hành thử cao thế cáp
Đáp án đúng là: Các cáp trung thế sử dụng megomet có điện áp 500÷1000V. Giá trị điện trở đo được không tiêu chuẩn, tùy thuộc vào nhà sản xuất (cáp hạ thế ). Hệ số hấp thụ cáp Kht ≥ 1.3. Tuy nhiên để đánh giá chất lượng cáp tốt hoặc xấu ngoài việc đo sơ bộ điện trở cách điện bằng mêgômmét còn tiến hành thử cao thế cáp
Câu 155: Mục đích của việc đo điện trở cách điện động cơ điện 6,6kV nói riêng và các loại động cơ nói chung?
a. Để kiểm tra đánh tình trạng cách điện của động cơ trước khi đưa động cơ vào vận hành hoặc kiểm tra cách điện động cơ sau khi sửa chữa, bảo dưỡng và trung đại tu... Vv
b. Để kiểm tra đánh tình trạng điện trở của bối dây động cơ trước khi đưa động cơ vào vận hành hoặc kiểm tra cách điện động cơ sau khi sửa chữa, bảo dưỡng và trung đại tu... vv
c. Để kiểm tra đánh tình trạng bảo vệ của động cơ trước khi đưa động cơ vào vận hành hoặc kiểm tra cách điện động cơ sau khi sửa chữa, bảo dưỡng và trung đại tu. vv
d. Để kiểm tra đánh tình trạng độ ẩm của động cơ trước khi đưa động cơ vào vận hành hoặc kiểm tra cách điện động cơ sau khi sửa chữa, bảo dưỡng và trung đại tu... vv
Đáp án đúng là: Để kiểm tra đánh tình trạng cách điện của động cơ trước khi đưa động cơ vào vận hành hoặc kiểm tra cách điện động cơ sau khi sửa chữa, bảo dưỡng và trung đại tu... Vv
Câu 156: Ý nghĩa của việc đo điện trở cách điện động cơ điện 6,6kV nói riêng và các loại động cơ nói chung?
a. Đo điện trở cách điện là hạng mục kiểm tra đầu tiên để đánh giá sơ bộ về tình trạng độ ẩm của động cơ điện và để đánh giá sự biển đổi của dòng điện rò qua cách điện theo thời gian
b. Đo điện trở cách điện là hạng mục kiểm tra cuối cùng để đánh giá sơ bộ về tình trạng cách điện của động cơ điện và để đánh giá sự biển đổi của dòng điện rò qua cách điện theo thời gian
c. Đo điện trở cách điện là hạng mục kiểm tra đầu tiên để đánh giá sơ bộ về tình trạng điện trở các bối dây của động cơ điện và để đánh giá sự biển đổi của dòng điện rò qua cách điện theo thời gian
d. Đo điện trở cách điện là hạng mục kiểm tra đầu tiên để đánh giá sơ bộ về tình trạng cách điện của động cơ điện và để đánh giá sự biển đổi của dòng điện rò qua cách điện theo thời gian
Đáp án đúng là: Đo điện trở cách điện là hạng mục kiểm tra đầu tiên để đánh giá sơ bộ về tình trạng cách điện của động cơ điện và để đánh giá sự biển đổi của dòng điện rò qua cách điện theo thời gian gian
Câu 157: Tại sao khi kiểm tra cách điện động cơ điện ta cần tách riêng từng pha cuộn dây động cơ kể cả đấu Y và đấu D.
a. Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
b. Để kiểm tra được trị số điện trở thuần một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
c. Để kiểm tra được trị số cách điện một cách chính xác của các bối dây so với nhau
d. Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với đất
Đáp án đúng là: Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
Câu 158: Ngoài các tính năng, tác dụng chính của đồng hồ vạn năng như: Đo điện trở, đo điện áp một chiều, xoay chiều, đo dòng điện, đồng hồ vạn năng còn có thêm các chức năng nào khác?
a. Đo tần số, điện cảm, tụ điện, diot...
b. Đo điện trở cách điện, điện trường
c. Đo điện dẫn, nồng độ
d. Đo từ trường, điện trường
Đáp án đúng là: Đo tần số, điện cảm, tụ điện, diot...
Câu 159: Nêu mục đích của việc nối đất cho các thiết bị điện (mạng điện) nói chung?
a. Mục đích chính của việc nối đất trong mạng điện là vấn đề chống điện áp cao. Khi tất cả các bộ phận bằng kim loại trong thiết bị điện được nối đất thì khi chúng bị nhiễm điện hoặc rò điện cũng không gây ra nguy hiểm cho người sử dụng cũng như không có khả năng gây hư hỏng thiết bị điện.
b. Mục đích chính của việc nối đất trong mạng điện là vấn đề an toàn. Khi tất cả các bộ phận bằng kim loại trong thiết bị điện được nối đất thì khi chúng bị nhiễm điện hoặc rò điện cũng không gây ra nguy hiểm cho người sử dụng cũng như không có khả năng gây hư hỏng thiết bị điện
c. Mục đích chính của việc nối đất trong mạng điện là vấn đề bảo vệ thiết bị. Khi tất cả các bộ phận bằng kim loại trong thiết bị điện được nối đất thì khi chúng bị nhiễm điện hoặc rò điện cũng không gây ra nguy hiểm cho người sử dụng cũng như không có khả năng gây hư hỏng thiết bị điện.
d. Mục đích chính của việc nối đất trong mạng điện là vấn đề chống dòng điện cao. Khi tất cả các bộ phận bằng kim loại trong thiết bị điện được nối đất thì khi chúng bị nhiễm điện hoặc rò điện cũng không gây ra nguy hiểm cho người sử dụng cũng như không có khả năng gây hư hỏng thiết bị điện.
Đáp án đúng là: Mục đích chính của việc nối đất trong mạng điện là vấn đề an toàn. Khi tất cả các bộ phận bằng kim loại trong thiết bị điện được nối đất thì khi chúng bị nhiễm điện hoặc rò điện cũng không gây ra nguy hiểm cho người sử dụng cũng như không có khả năng gây hư hỏng thiết bị điện
Câu 160: Các động cơ điện cao hạ thế trong nhà máy cần được nối đất như thế nào?
a. Các động cơ điện cao hạ thế cần được nối đất tại vỏ của động cơ với hệ thống chống sét chung của nhà máy
b. Các động cơ điện cao hạ thế cần được nối đất tại tải của động cơ với hệ thống tiếp địa chung của nhà máy
c. Các động cơ điện cao hạ thế cần được nối đất tại vỏ động cơ với hệ thống tiếp địa chung của nhà máy
d. Các động cơ điện cao hạ thế cần được nối đất tại vỏ động cơ với hệ thống tiếp địa riêng rẽ của từng động cơ
Đáp án đúng là: Các động cơ điện cao hạ thế cần được nối đất tại vỏ động cơ với hệ thống tiếp địa chung của nhà máy
Câu 161: Trình bày phương pháp rút roto ra ngoài khi tháo động cơ cao thế (6,6kV) phục vụ bảo dưỡng, sửa chữa?
a. a. Dùng một đòn khuỷu được sử dụng bắt chặt xung quanh ngõng roto động cơ về phía tải, cân bằng roto và rút roto đều đặn về phía tải
b. b. Nếu không có tay đòn thì sử dụng một trục giả đi qua. Chú ý: Khi làm điều này, lót gỗ dưới roto hoặc dây thừng và lõi cánh quạt với các vật liệu như cao su để tránh thiệt hại cho lõi roto
c. Câu a, b sai
d. Câu a, b đúng
Đáp án đúng là: Câu a, b đúng
Câu 162: Ký hiệu ghi trên mác động cơ điện 3 pha xoay chiều roto lồng sóc: Δ /Y-380/660V có ý nghĩa gì?
a. Khi nguồn cấp 3 pha xoay chiều cho động cơ có điện áp là: 660V thì động cơ đấu tam giác (Δ); 380V thì động cơ đấu sao (Y)
b. Khi nguồn cấp 3 pha xoay chiều cho động cơ có điện áp là: 380V thì động cơ đấu tam giác (Δ); 660V thì động cơ đấu sao (Y)
c. Khi nguồn cấp 3 pha xoay chiều cho động cơ có điện áp là 660V thì động cơ đấu kiểu hỗn hợp tam giác sao Δ /Y-380/660V
d. Khi nguồn cấp 3 pha xoay chiều cho động cơ có điện áp là 380V thì động cơ đấu kiểu hỗn hợp sao tam giác Δ /Y-380/660V
Đáp án đúng là: Khi nguồn cấp 3 pha xoay chiều cho động cơ có điện áp là: 380V thì động cơ đấu tam giác (Δ); 660V thì động cơ đấu sao (Y)
Câu 163: Ký hiệu ghi trên mác động cơ điện 3 pha xoay chiều roto lồng sóc: Δ /Y-13,6/7,8 A có ý nghĩa gì?
a. Khi động cơ đấu tam giác (Δ) thì dòng điện đi qua động cơ là: 7,8 A. Khi động cơ đấu sao (Y) thì dòng điện đi qua động cơ là: 13,6 A
b. Khi động cơ đấu tam giác (Δ) thì dòng điện đi qua động cơ là: 13,6 A. Khi động cơ đấu sao (Y) thì dòng điện đi qua động cơ là: 7,8 A
c. Khi động cơ đấu tam giác (Y) thì dòng điện đi qua động cơ là: 13,6A. Khi động cơ đấu sao (Δ) thì dòng điện đi qua động cơ là: 7,8 A
d. Khi động cơ đấu tam giác (Δ) thì điện áp đi qua động cơ là: 13,6A. Khi động cơ đấu sao (Y) thì điện áp đi qua động cơ là: 7,8 Ampe
Đáp án đúng là: Khi động cơ đấu tam giác (Δ) thì dòng điện đi qua động cơ là: 13,6 A. Khi động cơ đấu sao (Y) thì dòng điện đi qua động cơ là: 7,8 A
Câu 164: Phương pháp điều chỉnh tốc độ động cơ không đồng bộ bằng cách mắc thêm điện trở phụ mạch roto được dùng cho loại động cơ nào?
a. Dùng điều chỉnh tốc độ động cơ không đồng bộ roto lồng sóc. Đấu biến trở 3 pha có thể điều chỉnh được vào dây quấn roto thông qua vành trượt
b. Dùng điều chỉnh tốc độ động cơ không đồng bộ roto dây quấn. Đấu biến trở 3 pha có thể điều chỉnh được vào dây quấn roto thông qua vành trượt
c. Dùng điều chỉnh tốc độ động cơ đồng bộ roto dây quấn. Đấu biến trở 3 pha có thể điều chỉnh được vào dây quấn roto thông qua vành trượt
d. Dùng điều chỉnh tốc độ động cơ không đồng bộ roto dây quấn. Đấu biến trở 3 pha có thể điều chỉnh được vào dây quấn stator thông qua vành trượt
Đáp án đúng là: Dùng điều chỉnh tốc độ động cơ không đồng bộ roto dây quấn. Đấu biến trở 3 pha có thể điều chỉnh được vào dây quấn roto thông qua vành trượt
Câu 165: Nối thêm điện trở phụ vào mạch roto để điều chỉnh tốc độ động cơ không đồng bộ roto dây quấn bằng cách nào?
a. Thông qua vành trượt ta nối biến trở 3 pha điều chỉnh được vào dây quấn của roto
b. Thông qua vành trượt và chổi than ta nối biến trở 3 pha điều chỉnh được vào dây quấn của roto
c. Thông qua vành trượt và chổi than ta nối biến trở 2 pha điều chỉnh được vào dây quấn của roto
d. Thông qua vành trượt và chổi than ta nối biến trở 1 pha điều chỉnh được vào dây quấn của roto
Đáp án đúng là: Thông qua vành trượt và chổi than ta nối biến trở 3 pha điều chỉnh được vào dây quấn của roto
Câu 166: Phương pháp kiểm tra chạy thử sau khi lắp đăt xong vòng bi đối với động cơ công suất lớn?
a. Vận hành không tải: mở điện và cho máy chạy chậm. Tắt máy để máy chạy quán tính cho đến khi ngừng hẳn. Nếu không có vấn đề bất thường xảy ra thì cho chạy thử có tải
b. Kiểm tra sự rung động, tiếng ồn, sự phát nhiệt v.v... của động cơ
c. Vận hành không tải: mở điện và cho máy chạy chậm. Tắt máy để máy chạy quán tính cho đến khi ngừng hẳn. Nếu không có vấn đề bất thường xảy ra thì cho chạy thử có tải. Kiểm tra sự rung động, tiếng ồn, sự phát nhiệt v.v... của động cơ
d. Vận hành không tải: mở điện và cho máy chạy đạt tốc độ định mức. Tắt máy để máy chạy quán tính cho đến khi ngừng hẳn. Nếu không có vấn đề bất thường xảy ra thì cho chạy thử có tải. Kiểm tra sự rung động, tiếng ồn, sự phát nhiệt v.v... của động cơ
Đáp án đúng là: Vận hành không tải: mở điện và cho máy chạy chậm. Tắt máy để máy chạy quán tính cho đến khi ngừng hẳn. Nếu không có vấn đề bất thường xảy ra thì cho chạy thử có tải. Kiểm tra sự rung động, tiếng ồn, sự phát nhiệt v.v... của động cơ
Câu 167: Các công việc cần tiến hành khi sửa chữa lớn stato động cơ 6,6kV được thực hiện như thế nào?
a. a. Kiểm tra, làm sạch tất cả các thành phần của động cơ. Kiểm tra cách điện và căn chỉnh khe hở không khí. Kiểm tra phần bối dây stator chắc chắn
b. b. Kiểm tra các mối hàn, các thành phần giữ bối dây. Kiểm tra các mối nối, các đầu dây stator nối ra ngoài và hộp đấu dây
c. c. Kiểm tra độ chính xác thanh dẫn của lồng sóc đúng với rãnh sắp đặt của nó. Điều chỉnh cân bằng động bằng cách gắn thêm đối trọng
d. Câu a, b đúng
Đáp án đúng là: Câu a, b đúng
Câu 168: Công việc cần tiến hành khi sửa chữa lớn roto động cơ 6,6kV được thực hiện như thế nào?
a. a. Kiểm tra phần hoạt động chính của roto, cánh quạt và căn tâm. Kiểm tra phần lồng sóc, các quạt đồng trục, đai giữ 2 phía đầu mút (đầu cuối) của lồng sóc
b. b. Kiểm tra độ chính xác thanh dẫn của lồng sóc đúng với rãnh sắp đặt của nó. Điều chỉnh cân bằng động bằng cách gắn thêm đối trọng
c. Thay dầu và sửa các ổ đỡ. Kiểm tra hệ thống làm mát, làm sạch và nén thủy lực thử nghiệm bộ làm mát dầu
d. Câu a, b đúng
Đáp án đúng là: Câu a, b đúng
Câu 169: Trước khi tiến hành tháo động cơ 6,6kV ra khỏi vị trí để sửa chữa bảo dưỡng cần thực hiên các bước nào sau đây?
a. Cách ly động cơ ra khỏi dây chuyền sản xuất; Cắt nguồn điện động lực, tháo dây tiếp địa; Phối hợp với các đơn vị liên quan tháo: Tháo khớp nối trục, bộ phận đo lường - tự động hóa tháo và cách ly các thiết bị theo dõi và đo lường (nếu có)
b. Cách ly động cơ ra khỏi dây chuyền sản xuất; Cắt nguồn điện động lực, điều khiển và các tín hiệu liên động đến động cơ, tháo dây tiếp địa; Phối hợp với các đơn vị liên quan tháo: Các bộ phận đo lường -tự động hóa tháo và cách ly các thiết bị theo dõi và đo lường (nếu có)
c. Cách ly động cơ ra khỏi dây chuyền sản xuất; Cắt nguồn điện động lực, điều khiển và các tín hiệu liên động đến động cơ, tháo dây tiếp địa; Phối hợp với các đơn vị liên quan tháo: Tháo khớp nối trục, bộ phận đo lường -tự động hóa tháo và cách ly các thiết bị theo dõi và đo lường (nếu có)
d. Cách ly động cơ ra khỏi dây chuyền sản xuất; Cắt nguồn điện động lực, điều khiển và các tín hiệu liên động đến động cơ; Phối hợp với các đơn vị liên quan tháo: tháo khớp nối trục, bộ phận đo lường - tự động hóa tháo và cách ly các thiết bị theo dõi và đo lường (nếu có)
Đáp án đúng là: Cách ly động cơ ra khỏi dây chuyền sản xuất; Cắt nguồn điện động lực, điều khiển và các tín hiệu liên động đến động cơ, tháo dây tiếp địa; Phối hợp với các đơn vị liên quan tháo: Tháo khớp nối trục, bộ phận đo lường -tự động hóa tháo và cách ly các thiết bị theo dõi và đo lường (nếu có)
Câu 170: Nguyên nhân nào dẫn đến tốc độ quay của động cơ điện 3 pha xoay chiều không đạt tiêu chuẩn?
a. Đấu nối sai các cuộn dây stato; Tiếp xúc không tốt, hoặc mất một pha; Điện áp bị giảm trên thanh cái cung cấp cho động cơ
b. Đấu nối sai các cuộn dây roto; Tiếp xúc không tốt, hoặc mất một pha; Điện áp bị giảm trên thanh cái cung cấp cho động cơ
c. Đấu nối sai các cuộn dây stato; Tiếp xúc không tốt, hoặc mất ba pha; Điện áp bị giảm trên thanh cái cung cấp cho động cơ
d. Đấu nối sai các cuộn dây stato; Tiếp xúc không tốt, hoặc mất một pha; Điện áp bị tăng trên thanh cái cung cấp cho động cơ
Đáp án đúng là: Đấu nối sai các cuộn dây stato; Tiếp xúc không tốt, hoặc mất một pha; Điện áp bị giảm trên thanh cái cung cấp cho động cơ
Câu 171: Nguyên nhân nào dẫn đến gối đỡ động cơ điện bị quá nhiệt và có tiếng ồn từ ổ đỡ?
a. Tra quá nhiều mỡ, dầu bôi trơn hoặc quá ít trong ổ đỡ; Căn tâm giữa phần cơ cấu tải và động cơ sai lệch hoặc trục bị cong
b. Tra quá nhiều mỡ, dầu bôi trơn hoặc quá ít trong ổ đỡ; Ổ đỡ bị mòn, hỏng; Căn tâm giữa phần cơ cấu tải và động cơ sai lệch hoặc trục bị cong
c. Tra mỡ, dầu bôi trơn vừa đủ trong ổ đỡ; Ổ đỡ bị mòn, hỏng; Căn tâm giữa phần cơ cấu tải và động cơ sai lệch hoặc trục bị cong
d. Tra quá nhiều mỡ, dầu bôi trơn hoặc quá ít trong ổ đỡ; Ổ đỡ bị mòn, hỏng; Căn tâm giữa phần cơ cấu tải và động cơ sai lệch
Đáp án đúng là: Tra quá nhiều mỡ, dầu bôi trơn hoặc quá ít trong ổ đỡ; Ổ đỡ bị mòn, hỏng; Căn tâm giữa phần cơ cấu tải và động cơ sai lệch hoặc trục bị cong
Câu 172: Điện trở cách điện đối với động cơ điện dự phòng công suất ≤ 5000 kW điện áp 6,6kV khi đưa vào vận hành được quy định thế nào?
a. Cần có điện trở cách điện của cuộn dây roto không nhỏ hơn 1MΩ/1KV điện áp trung bình định mức ở nhiệt độ từ 10 ÷ 30 °C. Nghĩa là giá trị điện trở cách điện của cuộn dây stator động cơ 6,6KV là ≥ 6MΩ
b. Cần có điện trở cách điện của cuộn dây stato không nhỏ hơn 1MΩ/1KV điện áp trung bình định mức ở nhiệt độ từ 10 ÷ 30 °C. Nghĩa là giá trị điện trở cách điện của cuộn dây stator động cơ 6,6KV là ≥ 3MΩ
c. Cần có điện trở cách điện của cuộn dây stator không nhỏ hơn 1MΩ/1KV điện áp trung bình định mức ở nhiệt độ từ 10 ÷ 30 °C. Nghĩa là giá trị điện trở cách điện của cuộn dây stator động cơ 6,6KV là ≥ 6MΩ
d. Cần có điện trở cách điện của cuộn dây stator không nhỏ hơn 2MΩ/1KV điện áp trung bình định mức ở nhiệt độ từ 10 ÷ 30 °C. Nghĩa là giá trị điện trở cách điện của cuộn dây stator động cơ 6,6KV là ≥ 3MΩ
Đáp án đúng là: Cần có điện trở cách điện của cuộn dây stator không nhỏ hơn 1MΩ/1KV điện áp trung bình định mức ở nhiệt độ từ 10 ÷ 30 °C. Nghĩa là giá trị điện trở cách điện của cuộn dây stator động cơ 6,6KV là ≥ 6MΩ
Câu 173: Nguyên nhân nào sau dẫn đến khi khởi động động cơ điện bị bảo vệ tác động cắt ngay?
a. Tiếp xúc không tốt, hoặc mất một pha
b. Điện áp bị giảm trên thanh cái cung cấp cho động cơ
c. Trượt phần cơ khí của thiết bị đóng cắt
d. Câu 1, 2 đúng
Đáp án đúng là: Trượt phần cơ khí của thiết bị đóng cắt
Câu 174: Nguyên nhân nào dẫn đến tốc độ quay của động cơ điện không đạt tiêu chuẩn?
a. Đấu nối sai các cuộn dây stato
b. Đứt mạch điều khiển
c. Chạm chập mạch điều khiển
d. Vòng bi thừa mỡ bôi trơn
Đáp án đúng là: Đấu nối sai các cuộn dây stato
Câu 175: Tốc độ quay của động cơ điện 3 pha không đạt tiêu chuẩn do nguyên nhân nào sau dẫn đến ?
a. Đứt mạch điều khiển
b. Chạm chập mạch điều khiển
c. Tiếp xúc không tốt, hoặc mất một pha
d. Chạm chập giữa lõi thép và cuộn dây stato hoặc ngắn mạch giữa các pha
Đáp án đúng là: Tiếp xúc không tốt, hoặc mất một pha
Câu 176: Các bước thực hiện khi kiểm tra, bảo dưỡng định kỳ hệ thống bôi trơn động cơ 6,6kV?
a. Kiểm tra mức dầu, chất lượng dầu; Vệ sinh bộ lọc dầu; Kiểm tra rò rỉ dầu tại các đường ống và các mối nối
b. Kiểm tra mức dầu, chất lượng dầu; Thay thế bộ lọc dầu; Kiểm tra rò rỉ dầu tại các đường ống và các mối nối
c. Kiểm tra mức dầu; Vệ sinh bộ lọc dầu; Kiểm tra rò rỉ dầu tại các đường ống và các mối nối
d. Kiểm tra mức dầu, chất lượng dầu; Vệ sinh bộ lọc dầu; Kiểm tra rò rỉ dầu tại các đường ống
Đáp án đúng là: Kiểm tra mức dầu, chất lượng dầu; Vệ sinh bộ lọc dầu; Kiểm tra rò rỉ dầu tại các đường ống và các mối nối
Câu 177: Khi thực hiện kiểm tra, bảo dưỡng hệ thống làm mát động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các cánh tản nhiệt, vệ sinh bụi bẩn; Kiểm tra rò rỉ nước làm mát (nếu có); Kiểm tra hoạt động của quạt làm mát
b. Kiểm tra tình trạng các cánh tản nhiệt; Kiểm tra rò rỉ nước làm mát; Kiểm tra hoạt động của quạt làm mát
c. Kiểm tra tình trạng các cánh tản nhiệt, vệ sinh bụi bẩn; Kiểm tra rò rỉ nước làm mát; Kiểm tra hoạt động của quạt
d. Vệ sinh bụi bẩn; Kiểm tra rò rỉ nước làm mát; Kiểm tra hoạt động của quạt làm mát
Đáp án đúng là: Kiểm tra tình trạng các cánh tản nhiệt, vệ sinh bụi bẩn; Kiểm tra rò rỉ nước làm mát (nếu có); Kiểm tra hoạt động của quạt làm mát
Câu 178: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống phanh (nếu có) của động cơ 6,6kV?
a. Kiểm tra độ mòn của má phanh; Kiểm tra khe hở giữa má phanh và đĩa phanh; Kiểm tra hoạt động của cơ cấu điều khiển phanh
b. Kiểm tra độ mòn của má phanh; Kiểm tra khe hở giữa má phanh và đĩa phanh; Kiểm tra hoạt động của phanh
c. Kiểm tra độ mòn của má phanh; Kiểm tra hoạt động của cơ cấu điều khiển phanh
d. Kiểm tra khe hở giữa má phanh và đĩa phanh; Kiểm tra hoạt động của cơ cấu điều khiển phanh
Đáp án đúng là: Kiểm tra độ mòn của má phanh; Kiểm tra khe hở giữa má phanh và đĩa phanh; Kiểm tra hoạt động của cơ cấu điều khiển phanh
Câu 179: Khi thực hiện kiểm tra, bảo dưỡng hệ thống sấy (nếu có) của động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra điện trở cách điện của bộ sấy; Kiểm tra hoạt động của bộ điều khiển nhiệt độ; Kiểm tra tình trạng dây dẫn và các mối nối
b. Kiểm tra điện trở cách điện của bộ sấy; Kiểm tra hoạt động của bộ điều khiển nhiệt độ
c. Kiểm tra hoạt động của bộ điều khiển nhiệt độ; Kiểm tra tình trạng dây dẫn và các mối nối
d. Kiểm tra điện trở cách điện của bộ sấy; Kiểm tra tình trạng dây dẫn và các mối nối
Đáp án đúng là: Kiểm tra điện trở cách điện của bộ sấy; Kiểm tra hoạt động của bộ điều khiển nhiệt độ; Kiểm tra tình trạng dây dẫn và các mối nối
Câu 180: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống giám sát rung động (nếu có) của động cơ 6,6kV?
a. Kiểm tra tình trạng các cảm biến rung động; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị và cảnh báo rung động
b. Kiểm tra tình trạng các cảm biến rung động; Kiểm tra dây dẫn; Kiểm tra hoạt động của bộ hiển thị và cảnh báo rung động
c. Kiểm tra tình trạng các cảm biến rung động; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị
d. Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị và cảnh báo rung động
Đáp án đúng là: Kiểm tra tình trạng các cảm biến rung động; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị và cảnh báo rung động
Câu 181: Khi thực hiện kiểm tra, bảo dưỡng hệ thống giám sát nhiệt độ (nếu có) của động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các cảm biến nhiệt độ (RTD, Thermistor); Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị và cảnh báo nhiệt độ
b. Kiểm tra tình trạng các cảm biến nhiệt độ; Kiểm tra dây dẫn; Kiểm tra hoạt động của bộ hiển thị và cảnh báo nhiệt độ
c. Kiểm tra tình trạng các cảm biến nhiệt độ; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị
d. Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị và cảnh báo nhiệt độ
Đáp án đúng là: Kiểm tra tình trạng các cảm biến nhiệt độ (RTD, Thermistor); Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ hiển thị và cảnh báo nhiệt độ
Câu 182: Các bước thực hiện khi kiểm tra, bảo dưỡng hộp đấu dây của động cơ 6,6kV?
a. Kiểm tra tình trạng vỏ hộp, gioăng làm kín; Kiểm tra các đầu cốt, thanh cái và sứ cách điện; Vệ sinh bụi bẩn và kiểm tra độ chặt của các mối nối
b. Kiểm tra tình trạng vỏ hộp; Kiểm tra các đầu cốt, thanh cái và sứ cách điện; Vệ sinh bụi bẩn và kiểm tra độ chặt của các mối nối
c. Kiểm tra tình trạng vỏ hộp, gioăng làm kín; Kiểm tra các đầu cốt; Vệ sinh bụi bẩn và kiểm tra độ chặt của các mối nối
d. Kiểm tra tình trạng vỏ hộp, gioăng làm kín; Kiểm tra các đầu cốt, thanh cái và sứ cách điện; Vệ sinh bụi bẩn
Đáp án đúng là: Kiểm tra tình trạng vỏ hộp, gioăng làm kín; Kiểm tra các đầu cốt, thanh cái và sứ cách điện; Vệ sinh bụi bẩn và kiểm tra độ chặt của các mối nối
Câu 183: Khi thực hiện kiểm tra, bảo dưỡng hệ thống tiếp địa của động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng dây tiếp địa, các điểm đấu nối; Đo điện trở tiếp địa đảm bảo đạt yêu cầu kỹ thuật
b. Kiểm tra tình trạng dây tiếp địa; Đo điện trở tiếp địa đảm bảo đạt yêu cầu kỹ thuật
c. Kiểm tra các điểm đấu nối; Đo điện trở tiếp địa đảm bảo đạt yêu cầu kỹ thuật
d. Kiểm tra tình trạng dây tiếp địa, các điểm đấu nối; Đo điện trở tiếp địa
Đáp án đúng là: Kiểm tra tình trạng dây tiếp địa, các điểm đấu nối; Đo điện trở tiếp địa đảm bảo đạt yêu cầu kỹ thuật
Câu 184: Các bước thực hiện khi kiểm tra, bảo dưỡng khớp nối trục của động cơ 6,6kV?
a. Kiểm tra tình trạng các bu lông, đai ốc; Kiểm tra độ mòn của các chi tiết đàn hồi (nếu có); Kiểm tra độ rơ và căn chỉnh lại tâm trục nếu cần thiết
b. Kiểm tra tình trạng các bu lông; Kiểm tra độ mòn của các chi tiết đàn hồi; Kiểm tra độ rơ và căn chỉnh lại tâm trục nếu cần thiết
c. Kiểm tra tình trạng các bu lông, đai ốc; Kiểm tra độ mòn của các chi tiết đàn hồi; Kiểm tra độ rơ
d. Kiểm tra tình trạng các bu lông, đai ốc; Kiểm tra độ rơ và căn chỉnh lại tâm trục nếu cần thiết
Đáp án đúng là: Kiểm tra tình trạng các bu lông, đai ốc; Kiểm tra độ mòn của các chi tiết đàn hồi (nếu có); Kiểm tra độ rơ và căn chỉnh lại tâm trục nếu cần thiết
Câu 185: Khi thực hiện kiểm tra, bảo dưỡng quạt làm mát của động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các cánh quạt, vệ sinh bụi bẩn; Kiểm tra độ chặt của bu lông bắt quạt; Kiểm tra khe hở giữa cánh quạt và vỏ quạt
b. Kiểm tra tình trạng các cánh quạt; Kiểm tra độ chặt của bu lông bắt quạt; Kiểm tra khe hở giữa cánh quạt và vỏ quạt
c. Kiểm tra tình trạng các cánh quạt, vệ sinh bụi bẩn; Kiểm tra độ chặt của bu lông; Kiểm tra khe hở
d. Vệ sinh bụi bẩn; Kiểm tra độ chặt của bu lông bắt quạt; Kiểm tra khe hở giữa cánh quạt và vỏ quạt
Đáp án đúng là: Kiểm tra tình trạng các cánh quạt, vệ sinh bụi bẩn; Kiểm tra độ chặt của bu lông bắt quạt; Kiểm tra khe hở giữa cánh quạt và vỏ quạt
Câu 186: Các bước thực hiện khi kiểm tra, bảo dưỡng vỏ động cơ 6,6kV?
a. Vệ sinh sạch sẽ bụi bẩn, dầu mỡ bám trên vỏ; Kiểm tra tình trạng sơn, các vết nứt hoặc hư hỏng cơ học; Kiểm tra độ chặt của các bu lông chân máy
b. Vệ sinh sạch sẽ bụi bẩn; Kiểm tra tình trạng sơn, các vết nứt hoặc hư hỏng cơ học; Kiểm tra độ chặt của các bu lông chân máy
c. Vệ sinh sạch sẽ bụi bẩn, dầu mỡ bám trên vỏ; Kiểm tra tình trạng sơn; Kiểm tra độ chặt của các bu lông chân máy
d. Vệ sinh sạch sẽ bụi bẩn, dầu mỡ bám trên vỏ; Kiểm tra tình trạng sơn, các vết nứt hoặc hư hỏng cơ học; Kiểm tra độ chặt của các bu lông
Đáp án đúng là: Vệ sinh sạch sẽ bụi bẩn, dầu mỡ bám trên vỏ; Kiểm tra tình trạng sơn, các vết nứt hoặc hư hỏng cơ học; Kiểm tra độ chặt của các bu lông chân máy
Câu 187: Khi thực hiện kiểm tra, bảo dưỡng bộ phận đo lường - tự động hóa của động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các thiết bị đo, cảm biến; Kiểm tra dây dẫn và các đầu nối; Hiệu chuẩn lại các thiết bị đo nếu cần thiết
b. Kiểm tra tình trạng các thiết bị đo; Kiểm tra dây dẫn và các đầu nối; Hiệu chuẩn lại các thiết bị đo nếu cần thiết
c. Kiểm tra tình trạng các thiết bị đo, cảm biến; Kiểm tra dây dẫn; Hiệu chuẩn lại các thiết bị đo nếu cần thiết
d. Kiểm tra tình trạng các thiết bị đo, cảm biến; Kiểm tra dây dẫn và các đầu nối
Đáp án đúng là: Kiểm tra tình trạng các thiết bị đo, cảm biến; Kiểm tra dây dẫn và các đầu nối; Hiệu chuẩn lại các thiết bị đo nếu cần thiết
Câu 188: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống điều khiển và liên động của động cơ 6,6kV?
a. Kiểm tra hoạt động của các rơ le, công tắc tơ; Kiểm tra các mạch điều khiển, tín hiệu liên động; Thử nghiệm hoạt động của hệ thống đảm bảo đúng logic điều khiển
b. Kiểm tra hoạt động của các rơ le; Kiểm tra các mạch điều khiển, tín hiệu liên động; Thử nghiệm hoạt động của hệ thống đảm bảo đúng logic điều khiển
c. Kiểm tra hoạt động của các rơ le, công tắc tơ; Kiểm tra các mạch điều khiển; Thử nghiệm hoạt động của hệ thống đảm bảo đúng logic điều khiển
d. Kiểm tra hoạt động của các rơ le, công tắc tơ; Kiểm tra các mạch điều khiển, tín hiệu liên động; Thử nghiệm hoạt động của hệ thống
Đáp án đúng là: Kiểm tra hoạt động của các rơ le, công tắc tơ; Kiểm tra các mạch điều khiển, tín hiệu liên động; Thử nghiệm hoạt động của hệ thống đảm bảo đúng logic điều khiển
Câu 189: Khi thực hiện kiểm tra, bảo dưỡng các thiết bị theo dõi và đo lường (nếu có) của động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng hoạt động của các thiết bị; Kiểm tra độ chính xác của các giá trị đo; Kiểm tra việc lưu trữ và hiển thị dữ liệu
b. Kiểm tra tình trạng hoạt động của các thiết bị; Kiểm tra độ chính xác của các giá trị đo
c. Kiểm tra độ chính xác của các giá trị đo; Kiểm tra việc lưu trữ và hiển thị dữ liệu
d. Kiểm tra tình trạng hoạt động của các thiết bị; Kiểm tra việc lưu trữ và hiển thị dữ liệu
Đáp án đúng là: Kiểm tra tình trạng hoạt động của các thiết bị; Kiểm tra độ chính xác của các giá trị đo; Kiểm tra việc lưu trữ và hiển thị dữ liệu
Câu 190: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống bảo vệ của động cơ 6,6kV?
a. Kiểm tra các rơ le bảo vệ (quá dòng, chạm đất, quá nhiệt...); Kiểm tra mạch cắt, mạch đóng; Thử nghiệm tác động của hệ thống bảo vệ
b. Kiểm tra các rơ le bảo vệ; Kiểm tra mạch cắt, mạch đóng; Thử nghiệm tác động của hệ thống bảo vệ
c. Kiểm tra các rơ le bảo vệ; Kiểm tra mạch cắt; Thử nghiệm tác động của hệ thống bảo vệ
d. Kiểm tra các rơ le bảo vệ; Kiểm tra mạch cắt, mạch đóng; Thử nghiệm tác động
Đáp án đúng là: Kiểm tra các rơ le bảo vệ (quá dòng, chạm đất, quá nhiệt...); Kiểm tra mạch cắt, mạch đóng; Thử nghiệm tác động của hệ thống bảo vệ
Câu 191: Khi thực hiện kiểm tra, bảo dưỡng hệ thống cung cấp nguồn điện cho động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các máy cắt, dao cách ly; Kiểm tra thanh cái, sứ cách điện; Kiểm tra hệ thống cáp điện và các đầu nối
b. Kiểm tra tình trạng các máy cắt; Kiểm tra thanh cái, sứ cách điện; Kiểm tra hệ thống cáp điện và các đầu nối
c. Kiểm tra tình trạng các máy cắt, dao cách ly; Kiểm tra thanh cái; Kiểm tra hệ thống cáp điện và các đầu nối
d. Kiểm tra tình trạng các máy cắt, dao cách ly; Kiểm tra thanh cái, sứ cách điện; Kiểm tra hệ thống cáp điện
Đáp án đúng là: Kiểm tra tình trạng các máy cắt, dao cách ly; Kiểm tra thanh cái, sứ cách điện; Kiểm tra hệ thống cáp điện và các đầu nối
Câu 192: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống thông gió cho phòng đặt động cơ 6,6kV?
a. Kiểm tra hoạt động của các quạt thông gió; Vệ sinh các lưới lọc bụi; Kiểm tra tình trạng các cửa gió và đường ống dẫn gió
b. Kiểm tra hoạt động của các quạt thông gió; Vệ sinh các lưới lọc bụi; Kiểm tra tình trạng các cửa gió
c. Kiểm tra hoạt động của các quạt thông gió; Kiểm tra tình trạng các cửa gió và đường ống dẫn gió
d. Vệ sinh các lưới lọc bụi; Kiểm tra tình trạng các cửa gió và đường ống dẫn gió
Đáp án đúng là: Kiểm tra hoạt động của các quạt thông gió; Vệ sinh các lưới lọc bụi; Kiểm tra tình trạng các cửa gió và đường ống dẫn gió
Câu 193: Khi thực hiện kiểm tra, bảo dưỡng hệ thống chiếu sáng tại khu vực đặt động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các bóng đèn, máng đèn; Kiểm tra hệ thống dây dẫn và công tắc; Đảm bảo độ chiếu sáng đạt yêu cầu cho việc vận hành và sửa chữa
b. Kiểm tra tình trạng các bóng đèn; Kiểm tra hệ thống dây dẫn và công tắc; Đảm bảo độ chiếu sáng đạt yêu cầu
c. Kiểm tra tình trạng các bóng đèn, máng đèn; Đảm bảo độ chiếu sáng đạt yêu cầu
d. Kiểm tra hệ thống dây dẫn và công tắc; Đảm bảo độ chiếu sáng đạt yêu cầu
Đáp án đúng là: Kiểm tra tình trạng các bóng đèn, máng đèn; Kiểm tra hệ thống dây dẫn và công tắc; Đảm bảo độ chiếu sáng đạt yêu cầu cho việc vận hành và sửa chữa
Câu 194: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống phòng cháy chữa cháy tại khu vực đặt động cơ 6,6kV?
a. Kiểm tra tình trạng các bình chữa cháy; Kiểm tra hệ thống báo cháy, đầu báo khói/nhiệt; Kiểm tra hệ thống họng nước chữa cháy (nếu có)
b. Kiểm tra tình trạng các bình chữa cháy; Kiểm tra hệ thống báo cháy; Kiểm tra hệ thống họng nước chữa cháy
c. Kiểm tra tình trạng các bình chữa cháy; Kiểm tra hệ thống báo cháy, đầu báo khói/nhiệt
d. Kiểm tra hệ thống báo cháy, đầu báo khói/nhiệt; Kiểm tra hệ thống họng nước chữa cháy
Đáp án đúng là: Kiểm tra tình trạng các bình chữa cháy; Kiểm tra hệ thống báo cháy, đầu báo khói/nhiệt; Kiểm tra hệ thống họng nước chữa cháy (nếu có)
Câu 195: Khi thực hiện kiểm tra, bảo dưỡng các biển báo, chỉ dẫn an toàn tại khu vực đặt động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các biển báo, đảm bảo rõ ràng, dễ đọc; Bổ sung các biển báo còn thiếu hoặc bị hỏng; Đảm bảo các chỉ dẫn an toàn đúng quy định
b. Kiểm tra tình trạng các biển báo; Bổ sung các biển báo còn thiếu; Đảm bảo các chỉ dẫn an toàn đúng quy định
c. Kiểm tra tình trạng các biển báo, đảm bảo rõ ràng, dễ đọc; Đảm bảo các chỉ dẫn an toàn đúng quy định
d. Bổ sung các biển báo còn thiếu hoặc bị hỏng; Đảm bảo các chỉ dẫn an toàn đúng quy định
Đáp án đúng là: Kiểm tra tình trạng các biển báo, đảm bảo rõ ràng, dễ đọc; Bổ sung các biển báo còn thiếu hoặc bị hỏng; Đảm bảo các chỉ dẫn an toàn đúng quy định
Câu 196: Các bước thực hiện khi kiểm tra, bảo dưỡng sàn nhà, bệ máy tại khu vực đặt động cơ 6,6kV?
a. Vệ sinh sạch sẽ sàn nhà, bệ máy; Kiểm tra tình trạng nứt vỡ của bệ máy; Đảm bảo khu vực xung quanh động cơ thông thoáng, không có vật cản
b. Vệ sinh sạch sẽ sàn nhà; Kiểm tra tình trạng nứt vỡ của bệ máy; Đảm bảo khu vực xung quanh động cơ thông thoáng
c. Vệ sinh sạch sẽ sàn nhà, bệ máy; Đảm bảo khu vực xung quanh động cơ thông thoáng
d. Kiểm tra tình trạng nứt vỡ của bệ máy; Đảm bảo khu vực xung quanh động cơ thông thoáng
Đáp án đúng là: Vệ sinh sạch sẽ sàn nhà, bệ máy; Kiểm tra tình trạng nứt vỡ của bệ máy; Đảm bảo khu vực xung quanh động cơ thông thoáng, không có vật cản
Câu 197: Khi thực hiện kiểm tra, bảo dưỡng hệ thống thoát nước tại khu vực đặt động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các rãnh thoát nước, hố ga; Đảm bảo hệ thống thoát nước thông suốt, không bị tắc nghẽn; Vệ sinh bùn đất, rác thải trong rãnh
b. Kiểm tra tình trạng các rãnh thoát nước; Đảm bảo hệ thống thoát nước thông suốt; Vệ sinh bùn đất
c. Kiểm tra tình trạng các rãnh thoát nước, hố ga; Vệ sinh bùn đất, rác thải trong rãnh
d. Đảm bảo hệ thống thoát nước thông suốt; Vệ sinh bùn đất, rác thải trong rãnh
Đáp án đúng là: Kiểm tra tình trạng các rãnh thoát nước, hố ga; Đảm bảo hệ thống thoát nước thông suốt, không bị tắc nghẽn; Vệ sinh bùn đất, rác thải trong rãnh
Câu 198: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống chống sét cho khu vực đặt động cơ 6,6kV?
a. Kiểm tra tình trạng các kim thu sét, dây dẫn sét; Kiểm tra các điểm đấu nối tiếp địa; Đo điện trở tiếp địa hệ thống chống sét
b. Kiểm tra tình trạng các kim thu sét; Kiểm tra các điểm đấu nối tiếp địa; Đo điện trở tiếp địa
c. Kiểm tra tình trạng các kim thu sét, dây dẫn sét; Đo điện trở tiếp địa hệ thống chống sét
d. Kiểm tra các điểm đấu nối tiếp địa; Đo điện trở tiếp địa hệ thống chống sét
Đáp án đúng là: Kiểm tra tình trạng các kim thu sét, dây dẫn sét; Kiểm tra các điểm đấu nối tiếp địa; Đo điện trở tiếp địa hệ thống chống sét
Câu 199: Khi thực hiện kiểm tra, bảo dưỡng hệ thống camera giám sát (nếu có) tại khu vực đặt động cơ 6,6kV cần chú ý những gì?
a. Kiểm tra tình trạng các camera, vệ sinh ống kính; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của đầu ghi hình và màn hình hiển thị
b. Kiểm tra tình trạng các camera; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của đầu ghi hình
c. Kiểm tra tình trạng các camera, vệ sinh ống kính; Kiểm tra hoạt động của đầu ghi hình
d. Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của đầu ghi hình và màn hình hiển thị
Đáp án đúng là: Kiểm tra tình trạng các camera, vệ sinh ống kính; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của đầu ghi hình và màn hình hiển thị
Câu 200: Các bước thực hiện khi kiểm tra, bảo dưỡng hệ thống âm thanh thông báo (nếu có) tại khu vực đặt động cơ 6,6kV?
a. Kiểm tra tình trạng các loa, vệ sinh bụi bẩn; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ tăng âm và micro
b. Kiểm tra tình trạng các loa; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ tăng âm
c. Kiểm tra tình trạng các loa, vệ sinh bụi bẩn; Kiểm tra hoạt động của bộ tăng âm
d. Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ tăng âm và micro
Đáp án đúng là: Kiểm tra tình trạng các loa, vệ sinh bụi bẩn; Kiểm tra dây dẫn và các đầu nối; Kiểm tra hoạt động của bộ tăng âm và micro`;
const rawPart4 = `Câu 201: Máy điện quay được định nghĩa như thế nào?
a. Là loại máy điện làm việc theo nguyên lý cảm ứng điện từ và tương tác điện từ giữa từ trường và dòng điện trong các cuộn dây có chuyển động tương đối với nhau
b. Loại máy điện quay thường dùng để biến đổi cơ năng thành điện năng (máy phát điện) hoặc biến đổi điện năng thành cơ năng (động cơ)
c. Câu a, b sai
d. Câu a, b đúng
Đáp án đúng là: Câu a, b đúng
Câu 202: Máy điện đồng bộ là loại máy điện như thế nào?
a. Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto không đổi bằng tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f/p
b. Máy điện đồng bộ là các máy điện một chiều có tốc độ quay n của roto không đổi bằng tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f/p
c. Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto không đổi khác tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f / p
d. Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto biến đổi khác tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f / p
Đáp án đúng là: Máy điện đồng bộ là các máy điện xoay chiều có tốc độ quay n của roto không đổi bằng tốc độ quay của từ trường, được xác định theo số cặp cực p và tần số f của dòng điện: n = 60f/p
Câu 203: Máy điện đồng bộ có thể làm việc theo chế độ nào?
a. Theo nguyên lý thuận nghịch, máy điện đồng bộ chỉ có thể vận hành theo chế độ máy phát điện
b. Theo nguyên lý thuận nghịch, máy điện đồng bộ có thể vận hành theo chế độ máy phát điện hoặc chế độ động cơ 
c. Theo nguyên lý thuận nghịch, máy điện đồng bộ chỉ có thể vận hành theo chế độ động cơ
d. Máy điện đồng bộ chủ yếu được sử dụng dụng để làm động cơ điện
Đáp án đúng là: Theo nguyên lý thuận nghịch, máy điện đồng bộ có thể vận hành theo chế độ máy phát điện hoặc chế độ động cơ
Câu 204: Hiên tại máy điện đồng bộ chủ yếu được sử dụng để làm gì?
a. Máy điện đồng bộ chủ yếu được sử dụng để làm máy phát điện
b. Máy điện đồng bộ chủ yếu được sử dụng để làm động cơ điện
c. Máy điện đồng bộ chủ yếu được sử dụng để làm máy điện quay
d. Máy điện đồng bộ chủ yếu được sử dụng để làm máy điện tĩnh
Đáp án đúng là: Máy điện đồng bộ chủ yếu được sử dụng để làm máy phát điện
Câu 205: Máy phát điện đồng bộ được cấu tạo bỏi các bộ phận chính nào?
a. Máy phát điện đồng bộ được cấu tạo từ 3 bộ phận chính là phần cảm, phần ứng và phần kích từ
b. Máy phát điện đồng bộ được cấu tạo từ 2 bộ phận chính là phần cảm, phần ứng
c. Máy phát điện đồng bộ được cấu tạo từ 4 bộ phận chính là phần cảm, phần ứng, phần kích từ và phần chổi than
d. Máy phát điện đồng bộ được cấu tạo từ 3 bộ phận chính là roto, stator và phần chổi than
Đáp án đúng là: Máy phát điện đồng bộ được cấu tạo từ 3 bộ phận chính là phần cảm, phần ứng và phần kích từ
Câu 206: Phần cảm của máy phát điện đồng bộ thường được cấu tạo như thế nào?
a. Thường đặt trên stator của máy điện. Trên roto có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
b. Thường đặt trên roto của máy điện. Trên stator có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
c. Thường đặt trên roto của máy điện. Trên roto có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
d. Thường đặt trên roto của máy điện. Trên roto có hệ thống dây quấn có dòng điện xoay chiều chạy qua để tạo thành một nam châm điện
Đáp án đúng là: Thường đặt trên roto của máy điện. Trên roto có hệ thống dây quấn có dòng điện một chiều chạy qua để tạo thành một nam châm điện
Câu 207: Phần cảm của máy phát điện đồng bộ cần có yêu cầu như thế nào?
a. Từ thông của phần cảm sinh ra phải đủ mạnh và ổn định
b. Số cực từ của phần cảm sẽ quy định tốc độ quay của roto và tần số của dòng điện
c. Câu a, b đúng
d. Câu a, b sai
Đáp án đúng là: Câu a, b đúng
Câu 208: Cấu tạo máy biến áp (MBA) dầu gồm có các bộ phận chính sau :
a. Lõi thép: được ghép bằng các lá thép kĩ thuật điện dùng để dẫn từ thông chính của MBA, lõi thép gồm hai phần: trụ và gông
b. Dây quấn MBA: được chế tạo bằng dây đồng hoặc nhôm, tiết diện tròn hoặc chữ nhật, mặt ngoài dây có bọc lớp cách điện, thường có 2 hoặc nhiều dây quấn. Nhiệm vụ dây quấn MBA là nhận năng lượng vào và truyền năng lượng ra
c. Vỏ MBA làm bằng thép gồm hai bộ phận: Thùng MBA: đặt lõi thép, dây quấn và dầu biến áp, dầu biến áp dùng để tăng cường cách điện và tản nhiệt cho máy. Nắp thùng MBA: dùng để đậy thùng và trên đó có các bộ phận quan trọng như: sứ đầu ra của dây quấn cao áp và hạ áp, bình dãn dầu, ống bảo hiểm, rơ le hơi, bộ truyền động cầu dao đổi nối của bộ chuyển nấc điện áp dây quấn cao áp, lỗ nhỏ đặt nhiệt kế
d. Tất cả đáp án trên
Đáp án đúng là: Tất cả đáp án trên
Câu 209: Vỏ MBA làm bằng thép gồm hai bộ phận chính là thùng MBA và nắp thùng MBA, trong đó thùng MBA có chức năng:
a. Thùng MBA: trong thùng đặt lõi thép, dây quấn và dầu biến áp. Dầu biến áp dùng để tăng cường cách điện MBA. Lúc MBA làm việc, một phần năng lượng tiêu hao thoát ra dưới dạng nhiệt làm dây quấn, lõi thép và các bộ phận khác nóng lên, nhờ quạt mát giúp cho nhiệt độ các bộ phận bên trong MBA tản nhiệt ra môi trường xung quanh.
b. Thùng MBA: trong thùng đặt lõi thép, các sứ đầu ra cuộn dây sơ cấp -thứ cấp và dầu biến áp. Dầu biến áp dùng để tản nhiệt làm mát MBA. Lúc MBA làm việc, một phần năng lượng tiêu hao thoát ra dưới dạng nhiệt làm lõi thép và thùng MBA nóng lên, nhờ sự đối lưu trong dầu và truyền nhiệt từ các bộ phận bên trong MBA sang dầu và từ dầu qua vách thùng ra môi trường xung quanh.
c. Thùng MBA: trong thùng đặt lõi thép, dây quấn và dầu biến áp. Dầu biến áp dùng để tăng cường khả năng chuyển đổi năng lượng từ sơ cấp sang thứ cấp. Lúc MBA làm việc, một phần năng lượng tiêu hao thoát ra dưới dạng nhiệt làm dây quấn, lõi thép và các bộ phận khác nóng lên, nhờ quạt mát giúp cho nhiệt độ các bộ phận bên trong MBA tản nhiệt ra môi trường xung quanh.
d. Thùng MBA: trong thùng đặt lõi thép, dây quấn và dầu biến áp. Dầu biến áp dùng để tăng cường cách điện và tản nhiệt. Lúc MBA làm việc, một phần năng lượng tiêu hao thoát ra dưới dạng nhiệt làm dây quấn, lõi thép và các bộ phận khác nóng lên, Nhờ sự đối lưu trong dầu và truyền nhiệt từ các bộ phận bên trong MBA sang dầu và từ dầu qua vách thùng ra môi trường xung quanh
Đáp án đúng là: Thùng MBA: trong thùng đặt lõi thép, dây quấn và dầu biến áp. Dầu biến áp dùng để tăng cường cách điện và tản nhiệt. Lúc MBA làm việc, một phần năng lượng tiêu hao thoát ra dưới dạng nhiệt làm dây quấn, lõi thép và các bộ phận khác nóng lên, Nhờ sự đối lưu trong dầu và truyền nhiệt từ các bộ phận bên trong MBA sang dầu và từ dầu qua vách thùng ra môi trường xung quanh
Câu 210: Hệ số hấp thụ Kht với trị số R60/ R15 là gì?
a. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 phút kể từ lúc đưa điện áp vào và Rcđ đo sau 15 phút : Kht = R60' / R15'
b. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 1, 5 phút: Kht = R60' / R1,5'
c. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 1,5 s: Kht = R60" / R1,5"
d. Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 15 s: Kht = R60" / R15"
Đáp án đúng là: Hệ số hấp thụ Kht là tỷ số giữa Rcđ đo bằng Mê gôm mét sau 60 s kể từ lúc đưa điện áp vào và Rcđ đo sau 15 s: Kht = R60" / R15"
Câu 211: Trong quá trình sửa chữa trung đại tu động cơ điện cần phải đo điện trở cách điện động cơ và tính toán hệ số hấp thụ. Hệ số hấp thụ theo quy định là bao nhiêu để đánh giá là cách điện khô?
a. Hệ số hấp thụ: K = R60/R15 ≥ 1,1
b. Hệ số hấp thụ: K = R60/R15 ≥ 1,2
c. Hệ số hấp thụ: K = R60/R15 ≥ 1,3
d. Hệ số hấp thụ: K = R60/R15 ≥ 1,4
Đáp án đúng là: Hệ số hấp thụ: K = R60/R15 ≥ 1,3
Câu 212: Giải thích khi đo điện trở cách điện, trị số dòng diện trong vật liệu cách điện thay đổi theo thời gian?
a. Kích thước hình học nhất định của cách điện được coi như một tụ điện hình học Chh . Khi đặt điện áp vào cách điện đương nhiên không có điện trở nạp. Chh được nạp đầy nhanh và tiêu thụ 1 dòng điện lớn sau đó tắt ngay. Dòng này biểu diễn Ihh
b. Dù tinh khiết bao nhiêu, cách điện vẫn có tạp chất. Các tạp chất tạo thành phân cực và coi như các tụ này nằm trong bề dày cách điện được nối tiếp với một điện trở. Khi đặt điện áp, các tụ nội bộ này tiêu thụ một dòng nạp có tính chất hấp thụ mà không cho qua cách diện. Vì vậy biểu diễn tụ, và dòng này bằng Cht và Iht. Trong bề dày cách diện có nhiều tạp chất (tức nhiều Cht nối tiếp) thì phần cách điện còn lại Rht sẽ nhỏ nên Iht tắt nhanh, nếu Rht lớn Iht tắt chậm. Ðiều này tương ứng với cách điện ẩm hay khô
c. Khi các tụ Chh và Cht đã nạp xong, dòng qua cách diện chỉ còn là dòng rò và được đặc trưng bởi Rcđ và Ir
d. Tất cả đều đúng
Đáp án đúng là: Tất cả đều đúng
Câu 213: Quy định chung khi thực hiện đo điện trở cách điện của thiết bị điện 6kV trở lên.
a. Người thí nghiệm kiểm tra đối tượng được thí nghiệm đã được cắt điện, cách ly hoàn toàn với các nguồn điện áp
b. Vỏ của thiết bị điện phải được nối đất an toàn
c. Khu vực thí nghiệm phải có rào chắn, người không có nhiệm vụ không được vào và luôn có người trông coi ở đó. Nếu dùng dây căng thay rào chắn thì trên dây phải treo biển báo
d. Tất cả đều đúng
Đáp án đúng là: Tất cả đều đúng
Câu 214: Phương pháp đo điện trở cách điện cáp lực 0,4kV và cáp 6,6kV? Tìm phương án sai.
a. Đo cáp pha A với cáp pha B+C+Vỏ (đã được nối đất)
b. Đo cáp pha B với cáp pha A+C+Vỏ (đã được nối đất)
c. Đo cáp pha C với cáp pha A+B+Vỏ (đã được nối đất)
d. Đo cáp pha A với cáp pha B+A+Vỏ (đã được nối đất)
Đáp án đúng là: Đo cáp pha A với cáp pha B+A+Vỏ (đã được nối đất)
Câu 215: Tại sao khi kiểm tra cách điện động cơ điện ta cần tách riêng từng pha cuộn dây động cơ kể cả đấu Y và đấu D.
a. Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
b. Để kiểm tra được trị số điện trở thuần một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
c. Để kiểm tra được trị số điện trở thuần một cách chính xác của các bối dây so với nhau
d. Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với đất và của từng bối dây với nhau
Đáp án đúng là: Để kiểm tra được trị số điện trở cách điện một cách chính xác của từng bối dây so với vỏ và của từng bối dây với nhau
Câu 216: Những lưu ý khi sử dụng đồng hồ megomet? Chọn ý sai.
a. Đối với các thiết bị điện hạ thế sử dụng mê gôm 500÷1000V và chỉ cần đo trị tuyệt đối của điện trở cách điện
b. Đối với các thiết bị điện trung và cao thế sử dụng mê gôm 2500÷5000V
c. Khi đo điện trở cách điện, ta đồng thời tiến hành xác định giá trị điện trở cách điện tại thời điểm 15 giây và 60 giây sau khi đưa điện áp vào. Tính toán hệ số hấp thụ Kht = R60" / R15"
d. Đối với các thiết bị điện cao thế sử dụng mê gôm 500÷1000V và chỉ cần đo trị tuyệt đối của điện trở cách điện
Đáp án đúng là: Đối với các thiết bị điện cao thế sử dụng mê gôm 500÷1000V và chỉ cần đo trị tuyệt đối của điện trở cách điện
Câu 217: Những lưu ý về thiết bị đo khi kiểm tra cách điện cáp lực 0,4kV và cáp 6,6kV? Chọn ý sai.
a. Cần lưu ý chọn đúng megomet có điện áp thích hợp để đo. Nếu sử dụng không đúng sẽ làm hỏng cách điện cáp hoặc kết quả đo không chính xác không phản ánh đúng điện trở cách điện cáp 
b. Megomet phải được kiểm định về độ chính xác
c. Nguồn pin, các dây, que đo theo tiêu chuẩn của thiết bị
d. Dùng cùng cấp điện áp của megomet khi kiểm tra cách điện cáp lực 0,4kV và cáp 6,6kV
Đáp án đúng là: Dùng cùng cấp điện áp của megomet khi kiểm tra cách điện cáp lực 0,4kV và cáp 6,6kV
Câu 218: Từ trường quay trong động cơ không đồng bộ ba pha được tạo ra bằng cách nào?.
a. Sử dụng 3 dòng điện xoay chiều một pha
b. Sử dụng dòng điện xoay chiều ba pha
c. Sử dụng dòng điện xoay chiều một pha
d. Sử dụng dòng điện một chiều
Đáp án đúng là: Sử dụng dòng điện xoay chiều ba pha
Câu 219: Để đảo chiều quay của động cơ điện 3 pha ta làm như thế nào?
a. Đảo 3 pha với nhau
b. Đảo 2 pha với nhau
c. Đảo chiều roto
d. Đảo chiều stato
Đáp án đúng là: Đảo 2 pha with nhau
Câu 220: Roto của máy điện không đồng bộ xoay chiều 3 pha roto dây quấn có cấu tạo như thế nào?
a. Dây quấn 3 pha nối ngắn mạch với nhau
b. Nối ngắn mạch hai đầu các cuộn dây
c. Nối vào chổi than bên ngoài
d. Nối với điện trở phụ
Đáp án đúng là: Nối vào chổi than bên ngoài
Câu 221: Ưu điểm của động cơ điện không đồng bộ xoay chiều roto dây quấn?
a. Mô men mở máy nhỏ, dòng mở máy nhỏ, điều chỉnh tốc độ dễ dàng
b. Mô men mở máy lớn, dòng mở máy lớn, điều chỉnh tốc độ dễ dàng
c. Mô men mở máy lớn, dòng mở máy nhỏ, điều chỉnh tốc độ dễ dàng
d. Mô men mở máy lớn, dòng mở máy nhỏ, không điều chỉnh được tốc độ
Đáp án đúng là: Mô men mở máy lớn, dòng mở máy nhỏ, điều chỉnh tốc độ dễ dàng
Câu 222: Roto của máy điện không đồng bộ xoay chiều 3 pha roto dây quấn thường được đấu như thế nào?
a. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
b. Dây quấn ba pha của roto thường được đấu tam giác, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
c. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối ngắn mạch vào vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để để nối với mạch điện bên ngoài
d. Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào hai vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
Đáp án đúng là: Dây quấn ba pha của roto thường được đấu hình sao, còn ba đầu kia được nối vào ba vành trượt thường làm bằng đồng đặt cố định ở một đầu trục máy và thông qua chổi than để nối với mạch điện bên ngoài
Câu 223: Động cơ điện không đồng bộ là loại máy điện có nguyên lý làm việc như thế nào?
a. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto khác với tốc độ quay của từ trường
b. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto nhỏ hơn với tốc độ quay của từ trường
c. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto lớn hơn với tốc độ quay của từ trường
d. Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto bằng với tốc độ quay của từ trường
Đáp án đúng là: Làm việc theo nguyên lý cảm ứng điện từ có tốc độ quay của roto khác với tốc độ quay của từ trường
Câu 224: Cấu tạo của động cơ điện không đồng bộ xoay chiều roto lồng sóc phần lõi thép stator được cấu tạo như thế nào?.
a. Là bộ phận dẫn điện của máy có dạng hình trụ rỗng, lõi thép được làm bằng các lá thép kỹ thuật điện dày 0,15 đến 0,25 mm, được dập theo hình vành khăn, phía trong có xẻ rảnh để đặt dây quấn và được sơn phủ cách điện trước khi ghép lại
b. Là bộ phận dẫn từ của máy có dạng hình trụ đặc, lõi thép được làm bằng các lá thép kỹ thuật điện dày 0,35 đến 0,5 mm, được dập theo hình vành khăn, phía trong có xẻ rảnh để đặt dây quấn và được sơn phủ cách điện trước khi ghép lại
c. Là bộ phận dẫn từ của máy có dạng hình trụ rỗng, lõi thép được làm bằng các lá thép kỹ thuật điện dày 0,35 đến 0,5 mm, được dập theo hình vành khăn, phía trong có xẻ rảnh để đặt dây quấn và được sơn phủ cách điện trước khi ghép lại
d. Là bộ phận dẫn từ của máy có dạng hình trụ, lõi thép được làm bằng các lá thép kỹ thuật điện dày 0,35 đến 0,5 mm, được dập theo hình vành khăn, phía trong có xẻ rảnh để đặt dây quấn và được ghép lại với nhau
Đáp án đúng là: Là bộ phận dẫn từ của máy có dạng hình trụ rỗng, lõi thép được làm bằng các lá thép kỹ thuật điện dày 0,35 đến 0,5 mm, được dập theo hình vành khăn, phía trong có xẻ rảnh để đặt dây quấn và được sơn phủ cách điện trước khi ghép lại
Câu 225: Nguyên lý cấu tạo của động cơ điện không đồng bộ xoay chiều roto lồng sóc phần dây quấn của stator được cấu tạo như thế nào?.
a. Được làm bằng dây đồng hoặc dây nhôm (loại dây emay) và được đặt cách điện tốt trong các rãnh của lõi thép
b. Được làm bằng dây đồng hoặc dây nhôm (loại dây emay) và được trong các rãnh của lõi thép
c. Được làm bằng dây đồng hoặc dây nhôm và được đặt cách điện tốt trong các rãnh của lõi thép
d. Được làm bằng dây kẽm (loại dây emay) và được đặt cách điện tốt trong các rãnh của lõi thép
Đáp án đúng là: Được làm bằng dây đồng hoặc dây nhôm (loại dây emay) and được đặt cách điện tốt trong các rãnh của lõi thép
Câu 226: Nguyên lý cấu tạo của động cơ điện không đồng bộ xoay chiều roto lồng sóc phần roto bao gồm những gì?.
a. Còn được gọi là phần quay, gồm có lõi thép, dây quấn
b. Còn được gọi là phần tĩnh, gồm có lõi thép, dây quấn và trục máy
c. Còn được gọi là phần quay, gồm có lõi thép, dây quấn và trục máy
d. Còn được gọi là phần quay, gồm có dây quấn và trục máy
Đáp án đúng là: Còn được gọi là phần quay, gồm có lõi thép, dây quấn và trục máy
Câu 227: Nguyên lý cấu tạo của động cơ điện không đồng bộ xoay chiều roto lồng sóc phần lõi thép của roto được cấu tạo như thế nào?.
a. Có dạng hình trụ đặc làm bằng các lá thép kỹ thuật điện, dập thành hình đĩa và ép chặt lại, trên mặt có các đường rãnh để đặt các thanh dẫn hoặc dây quấn. Lõi thép được ghép chặt với trục quay và đặt trên hai ổ đỡ của stator
b. Có dạng hình trụ đặc làm bằng các lá thép gió, dập thành hình đĩa và ép chặt lại, trên mặt có các đường rãnh để đặt các thanh dẫn hoặc dây quấn. Lõi thép được ghép chặt với trục quay và đặt trên hai ổ đỡ của stator
c. Có dạng hình trụ đặc làm bằng các lá thép kỹ thuật điện, dập thành hình đĩa và ép chặt lại, trên mặt không có các đường rãnh để đặt các thanh dẫn hoặc dây quấn. Lõi thép được ghép chặt với trục quay và đặt trên hai ổ đỡ của stator
d. Có dạng hình trụ đặc làm bằng các lá thép kỹ thuật điện, dập thành hình đĩa và ép chặt lại, trên mặt có các đường rãnh để đặt các thanh dẫn hoặc dây quấn. Lõi thép được nối với trục quay và đặt trên hai ổ đỡ của stator
Đáp án đúng là: Có dạng hình trụ đặc làm bằng các lá thép kỹ thuật điện, dập thành hình đĩa và ép chặt lại, trên mặt có các đường rãnh để đặt các thanh dẫn hoặc dây quấn. Lõi thép được ghép chặt với trục quay và đặt trên hai ổ đỡ of stator
Câu 228: Dây quấn roto của động cơ điện không đồng bộ xoay chiều roto lồng sóc sử dụng tại nhà máy Nhiệt điện Uông Bí được cấu tạo như thế nào?.
a. Gồm những thanh cách nhiệt dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép.
b. Gồm những thanh dẫn dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch đặt bên ngoài lõi thép.
c. Gồm những thanh dẫn dày đặt tại các đường rãnh soắn. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép
d. Gồm những thanh dẫn dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép
Đáp án đúng là: Gồm những thanh dẫn dày đặt tại các đường rãnh song song. Đầu các thanh này được nối vào vòng đoản mạch ghép chặt với lõi thép
Câu 229: Nguyên lý hoạt động của động cơ điện không đồng bộ xoay chiều roto lồng sóc?
a. Muốn cho động cơ làm việc, stator cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
b. Muốn cho động cơ làm việc, stator cần được cấp dòng điện một chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
c. Muốn cho động cơ làm việc, roto cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
d. Muốn cho động cơ làm việc, stator cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn roto sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
Đáp án đúng là: Muốn cho động cơ làm việc, stator cần được cấp dòng điện xoay chiều. Dòng điện qua dây quấn stator sẽ tạo ra từ trường quay với tốc độ: n = 60f/p (vòng/phút). Trong đó: f là tần số của nguồn điện ; p là số đôi cực của dây quấn stator
Câu 230: Nguyên lý hoạt động nào không phải của động cơ điện không đồng bộ xoay chiều roto lồng sóc?
a. Trong quá trình stator được cấp dòng điện xoay chiều qua dây quấn stator sẽ tạo ra từ trường quay quét qua các thanh dẫn của roto, làm xuất hiện sức điện động cảm ứng
b. Vì dây quấn roto là kín mạch nên sức điện động này tạo ra dòng điện trong các thanh dẫn của roto
c. Các thanh dẫn có dòng điện lại nằm trong từ trường, nên sẽ tương tác với nhau, tạo ra lực điện từ đặt vào các thanh dẫn. Tổng hợp các lực này sẽ tạo ra moment quay đối với trục roto, làm cho roto quay theo chiều của từ trường
d. Vì dây quấn roto là mạch điện đưa ra bên ngoài bằng chổi than, nên sức điện động này tạo ra điện áp trong các thanh dẫn của roto
Đáp án đúng là: Vì dây quấn roto là mạch điện đưa ra bên ngoài bằng chổi than, nên sức điện động này tạo ra điện áp trong các thanh dẫn của roto
Câu 231: Nêu vật liệu dẫn từ thường được sử dụng để chế tạo các bộ phận mạch từ của máy điện.
a. 1. Thường dùng các vật liệu sắt từ để làm mạch từ: thép lá kỹ thuật điện, thép lá thường, thép đúc, thép rèn
b. 2. Ở đoạn mạch từ có từ thông biến đổi với tần số 50hz thường dùng thép lá kỹ thuật điện dày 0.35 ÷ 0.5 mm, trong thành phần thép có từ 2÷5 % Si
c. 3. Ở đoạn mạch từ có từ trường không đổi, thường dùng thép đúc, thép rèn
d. Câu 1, 2, 3 đúng
Đáp án đúng là: Câu 1, 2, 3 đúng
Câu 232: Vật liệu cách điện nào thường được sử dụng để chế tạo các bộ phận cách điện của máy điện?
a. 1. Chất hữu cơ thiên nhiên như giấy, vi lụa
b. 2. Chất vô cơ như amiăng, mica, sợi thuỷ tinh; Các chất tổng hợp
c. 3. Chất dẫn từ; Các chất tổng hợp
d. Câu 1, 2 đúng
Đáp án đúng là: Câu 1, 2 đúng
Câu 233: Nêu khái niệm cơ bản của tiếp xúc điện?
a. Tiếp xúc điện là nơi mà dòng điện đi từ vật dẫn này sang vật dẫn khác. Bề mặt tiếp xúc của hai vật dẫn được gọi là tiếp xúc điện
b. Tiếp xúc điện là nơi mà điện áp đi từ vật dẫn này sang vật dẫn khác. Bề mặt tiếp xúc của hai vật dẫn được gọi là tiếp xúc điện
c. Tiếp xúc điện là nơi mà dòng điện từ đi từ vật dẫn này sang vật dẫn khác. Bề mặt tiếp xúc của hai vật dẫn được gọi là tiếp xúc điện
d. Tiếp xúc điện là nơi mà dòng điện đi từ vật dẫn này sang vật dẫn khác. Bề mặt của hai vật dẫn được gọi là tiếp xúc điện
Đáp án đúng là: Tiếp xúc điện là nơi mà dòng điện đi từ vật dẫn này sang vật dẫn khác. Bề mặt tiếp xúc của hai vật dẫn được gọi là tiếp xúc điện
Câu 234: Yêu cầu cơ bản nào cần có của tiếp xúc điện?
a. 1. Nơi tiếp xúc điện phải chắc chắn, đảm bảo
b. 2. Mối nối tiếp xúc phải có độ bền cơ khí cao
c. 3. Nơi tiếp xúc điện phải cách nhiệt tốt
d. Câu 1, 2 đúng
Đáp án đúng là: Câu 1, 2 đúng
Câu 235: Tiếp xúc điện cần có yêu cầu cơ bản nào sau?
a. 1. Mối nối tiếp xúc điện không được phát nóng quá giá trị cho phép
b. 2. Mối nối tiếp xúc điện cần ổn định nhiệt và ổn định động khi có dòng điện cực đại đi qua
c. Câu 1, 2 đúng
d. Câu 1, 2 sai
Đáp án đúng là: Câu 1, 2 đúng
Câu 236: Nơi tiếp xúc điện cần có yêu cầu cơ bản nào?
a. Nơi tiếp xúc điện phải chịu được tác động của mội trường (nhiệt độ, chất hóa học....)
b. Nơi tiếp xúc điện phải được sơn cách điện đảm bảo
c. Nơi tiếp xúc điện yêu cầu độ bền cách nhiệt cao, chịu được điện áp lớn
d. Câu 1, 2 đúng
Đáp án đúng là: Nơi tiếp xúc điện phải chịu được tác động của mội trường (nhiệt độ, chất hóa học....)
Câu 237: Yêu cầu cơ bản nào cần có của vật liệu dùng để làm tiếp xúc điện?
a. Có điện dẫn và nhiệt dẫn cao
b. Có điện trở cách điện lớn
c. Câu 1, 2 đúng
d. Câu 1, 2 sai
Đáp án đúng là: Có điện dẫn và nhiệt dẫn cao
Câu 238: Vật liệu dùng để làm tiếp xúc điện cần có yêu cầu cơ bản nào?
a. Có độ cứng bé để giảm lực nén. Độ cứng cao để giảm hao mòn ở các bộ phận đóng ngắt
b. Có độ bền cách nhiệt cao, để giảm bớt kích thước của thiết bị
c. Nơi tiếp xúc điện phải được sơn cách điện đảm bảo
d. Câu 1, 2 sai
Đáp án đúng là: Có độ cứng bé để giảm lực nén. Độ cứng cao để giảm hao mòn ở các bộ phận đóng ngắt
Câu 239: Yêu cầu cơ bản nào cần có của vật liệu dùng để làm tiếp xúc điện?
a. 1. Độ bền chịu hồ quang cao ( nhiệt độ nóng chảy)
b. 2. Đơn giản gia công, giá thành hạ
c. Câu 1, 2 đúng
d. Câu 1, 2 sai
Đáp án đúng là: Câu 1, 2 đúng
Câu 240: Các vật liệu thường được dùng làm tiếp xúc điện?
a. Đồng, Nhôm, Bạc, Vàng, Von-fram
b. Đồng, chì, nhôm, vàng, von-fram...
c. Đồng, nhôm, kẽm, bạc, von-fram...
d. Đồng, nhôm, bạc, thiếc, von-fram...
Đáp án đúng là: Đồng, Nhôm, Bạc, Vàng, Von-fram
Câu 241: Dựa vào kết cấu của tiếp điểm, có các loại tiếp xúc điện nào?
a. 1. Tiếp xúc cố định
b. 2. Tiếp xúc đóng mở
c. 3. Tiếp xúc khóa
d. Câu 1, 2 đúng
Đáp án đúng là: Câu 1, 2 đúng
Câu 242: Tiếp xúc cố định là loại tiếp xúc điện như thế nào?
a. 1. Các tiếp điểm được nối cố định với các chi tiết dẫn dòng điện như là: thanh cái, cáp điện, chỗ nối khí cụ vào mạch
b. 2. Trong quá trình sử dụng, cả hai bề mặt tiếp xúc được gắn chặt vào nhau nhờ các bu-lông, hàn nóng hay hàn nguội
c. Câu 1, 2 sai
d. Câu 1, 2 đúng
Đáp án đúng là: Câu 1, 2 đúng
Câu 243: Tiếp xúc đóng mở là loại tiếp xúc điện như thế nào?
a. Là tiếp xúc để đóng ngắt mạch điện. Trong trường hợp này phát sinh hồ quang điện, cần xác định khoảng cách giữa tiếp điểm tĩnh và động dựa vào dòng điện định mức, điện áp định mức và chế độ làm việc của khí cụ điện
b. Là tiếp xúc nối cố định mạch điện. Trong trường hợp này phát sinh hồ quang điện, cần xác định khoảng cách giữa tiếp điểm tĩnh và động dựa vào dòng điện định mức, điện áp định mức và chế độ làm việc của khí cụ điện
c. Là tiếp xúc để đóng ngắt mạch điện. Trong trường hợp này phát sinh hồ quang điện, cần xác định khoảng cách giữa tiếp điểm tĩnh và động dựa vào dòng điện sự cố, điện áp sự cố và chế độ làm việc của khí cụ điện
d. Là tiếp xúc để đóng mạch điện. Trong trường hợp này phát sinh hồ quang điện, cần xác định khoảng cách giữa tiếp điểm tĩnh và động dựa vào dòng điện định mức, điện áp định mức và chế độ làm việc của khí cụ điện
Đáp án đúng là: Là tiếp xúc để đóng ngắt mạch điện. Trong trường hợp này phát sinh hồ quang điện, cần xác định khoảng cách giữa tiếp điểm tĩnh và động dựa vào dòng điện định mức, điện áp định mức và chế độ làm việc của khí cụ điện
Câu 244: Ảnh hưởng đến độ bền vật liệu cách điện là yếu tố nào sau?
a. Ảnh hưởng của môi chất chế tạo cách điện, công nghệ chế tạo
b. Ảnh hưởng của vật liệu chế tạo cách điện, công nghệ chế tạo
c. Ảnh hưởng của phụ gia chế tạo cách điện, công nghệ chế tạo
d. Ảnh hưởng của vật liệu chế tạo cách điện, công cụ chế tạo
Đáp án đúng là: Ảnh hưởng của vật liệu chế tạo cách điện, công nghệ chế tạo
Câu 245: Yêu cầu cơ bản nào sau ảnh hưởng đến độ bền của vật liệu cách điện?
a. Ảnh hưởng của môi chất, nhiệt độ và độ ẩm.
b. Ảnh hưởng của phụ gia chế tạo cách điện, công nghệ chế tạo.
c. Ảnh hưởng của thời gian vận hành cách điện 
d. Ảnh hưởng của vật liệu chế tạo cách điện, công cụ chế tạo
Đáp án đúng là: Ảnh hưởng của thời gian vận hành cách điện
Câu 246: Yếu tố nào sau không ảnh hưởng đến độ bền của vật liệu cách điện?
a. Ảnh hưởng của môi trường, nhiệt độ và độ ẩm
b. Ảnh hưởng của vật liệu chế tạo cách điện, công nghệ chế tạo
c. Ảnh hưởng của thời gian vận hành của cách điện
d. Ảnh hưởng của phụ gia chế tạo cách điện, công cụ chế tạo.
Đáp án đúng là: Ảnh hưởng của phụ gia chế tạo cách điện, công cụ chế tạo.
Câu 247: Vật liệu cách điện có cấp chịu nóng Y có giới hạn nhiệt độ làm việc là bao nhiêu?
a. 90 °C
b. 105 °C
c. 110 °C
d. 120 °C
Đáp án đúng là: 90 °C
Câu 248: Hãy cho biết máy điện được khái niệm chung như thế nào?
a. Máy điện là thiết bị điện từ, nguyên lý làm việc dựa vào hiện tượng cảm ứng điện từ và tương tác giữa từ trường và dòng điện
b. Máy điện là thiết bị điện cảm, nguyên lý làm việc dựa vào hiện tượng cảm ứng điện từ và tương tác giữa từ trường và dòng điện
c. Máy điện là thiết bị điện năng, nguyên lý làm việc dựa vào hiện tượng hỗ cảm và tương tác giữa từ trường và dòng điện
d. Máy điện là thiết bị điện tử, nguyên lý làm việc dựa vào hiện tượng cảm ứng điện tử và tương tác giữa điện áp và dòng điện
Đáp án đúng là: Máy điện là thiết bị điện từ, nguyên lý làm việc dựa vào hiện tượng cảm ứng điện từ và tương tác giữa từ trường và dòng điện
Câu 249: Hãy cho biết máy điện có tính năng tác dụng như thế nào?
a. Máy điện dùng để biến đổi các dạng năng lượng khác nhau thành cơ năng (máy phát điện), hoặc ngược lại biến đổi điện năng thành nhiệt năng (động cơ điện) và các dạng năng lượng khác, hoặc dùng để biến đổi các thông số điện năng như điện áp, dòng điện, tần số
b. Máy điện dùng để biến đổi các dạng năng lượng khác nhau thành điện năng (máy phát điện), hoặc ngược lại biến đổi điện năng thành cơ năng (động cơ điện) và các dạng năng lượng khác, hoặc dùng để biến đổi các thông số điện năng như điện áp, dòng điện, tần số, v.v....
c. Máy điện dùng để biến đổi các dạng năng lượng khác nhau thành điện năng (máy phát điện), hoặc ngược lại biến đổi nhiệt năng thành cơ năng (động cơ điện) and các dạng năng lượng khác, hoặc dùng để biến đổi các thông số điện năng như điện áp, dòng điện, tần số
d. Máy điện dùng để biến đổi các dạng năng lượng khác nhau thành nhiệt năng (máy phát nhiệt), hoặc ngược lại biến đổi điện năng thành nhiệt năng (động cơ điện) and các dạng năng lượng khác, hoặc dùng để biến đổi các thông số điện năng như điện áp, dòng điện, tần số
Đáp án đúng là: Máy điện dùng để biến đổi các dạng năng lượng khác nhau thành điện năng (máy phát điện), hoặc ngược lại biến đổi điện năng thành cơ năng (động cơ điện) and các dạng năng lượng khác, hoặc dùng để biến đổi các thông số điện năng như điện áp, dòng điện, tần số, v.v....
Câu 250: Hãy cho biết máy điện được sử dụng như thế nào?
a. Máy điện là thiết bị điện tử, nguyên lý làm việc dựa vào hiện tượng cảm ứng điện tử và tương tác giữa điện áp và dòng điện
b. Máy điện có rất nhiều loại khác nhau, được sử dụng rộng rãi trong công nghiệp, giao thông vận tải, trong sản xuất và đời sống
c. Máy điện có ba loại khác nhau, được sử dụng rộng rãi trong công nghiệp, giao thông vận tải, trong sản xuất và đời sống
d. Máy điện có bốn loại khác nhau, được sử dụng rộng rãi trong công nghiệp, giao thông vận tải, trong sản xuất và đời sống
Đáp án đúng là: Máy điện có rất nhiều loại khác nhau, được sử dụng rộng rãi trong công nghiệp, giao thông vận tải, trong sản xuất và đời sống`;

const rawPart5 = `Câu 251: Khẩu hiệu của EVNGENCO1 là gì?
a. EVN Thắp sáng niềm tin
b. EVN hướng đến tươi lai
c. EVN phát điện ổn định
d. EVN vì cộng đồng
Đáp án đúng là: EVN Thắp sáng niềm tin
Câu 252: Giá trị cốt lõi nào của EVNGENCO1 nhấn mạnh vào việc xây dựng niềm tin?
a. Chất lượng
b. Tiên phong
c. Sáng tạo
d. Niềm tin
Đáp án đúng là: Niềm tin
Câu 253: EVNGENCO1 cam kết với cộng đồng về điều gì?
a. Tập trung chăm lo cho lợi ích của CBCNV Tập đoàn
b. Quan tâm chăm lo đến lợi ích của cộng đồng
c. Tái đầu tư cho cộng đồng xã hội khi có lợi nhuận
d. Cả 3 ý trên đều sai
Đáp án đúng là: Quan tâm chăm lo đến lợi ích của cộng đồng
Câu 254: Điều nào sau đây không phải là giá trị cốt lõi của EVNGENCO1: Niềm tin, Chất lượng, Lợi nhuận, Sáng tạo?
a. Niềm tin
b. Chất lượng
c. Lợi nhuận
d. Sáng tạo
Đáp án đúng là: Lợi nhuận
Câu 255: EVNGENCO1 hướng tới việc trở thành doanh nghiệp hàng đầu trong lĩnh vực nào?
a. Sản xuất điện
b. Kinh doanh điện
c. Sản xuất điện và chuyển dịch năng lượng
d. Cả 3 ý trên đều sai
Đáp án đúng là: Sản xuất điện và chuyển dịch năng lượng
Câu 256: EVNGENCO1 coi trọng điều gì trong công tác quản trị chất lượng: Số hóa quy trình, Tính hệ thống hay Cải tiến liên tục?
a. Số hóa quy trình
b. Tính hệ thống
c. Cải tiến liên tục
d. Tất cả các đáp án trên.
Đáp án đúng là: Tất cả các đáp án trên.
Câu 257: Trong văn hóa EVNGENCO1, yếu tố nào được coi là nền tảng cho sự phát triển bền vững: Sự hợp tác, Đổi mới sáng tạo, An toàn hay Trách nhiệm xã hội?
a. Sự hợp tác
b. Đổi mới sáng tạo
c. An toàn
d. Trách nhiệm xã hội
Đáp án đúng là: An toàn
Câu 258: EVNGENCO1 khuyến khích điều gì trong quá trình làm việc nhóm?
a. Hợp tác và chia sẻ
b. Độc lập và tự quyết định
c. Nêu cao vai trò cá nhân
d. Cả 3 ý trên đều sai
Đáp án đúng là: Hợp tác và chia sẻ
Câu 259: Giá trị cốt lõi nào của EVNGENCO1 thúc đẩy việc đưa ra các giải pháp mới?
a. Tiên phong
b. Niềm tin
c. Trách nhiệm
d. Chất lượng
Đáp án đúng là: Tiên phong
Câu 260: EVNGENCO1 cam kết nâng cao điều gì cho người lao động?
a. Môi trường làm việc
b. Thu nhập
c. Kiến thức
d. Cả 3 ý trên đều sai
Đáp án đúng là: Môi trường làm việc
Câu 261: EVNGENCO1 cam kết đối với khách hàng về điều gì?
a. Chất lượng thấp nhất
b. Chất lượng trung bình
c. Chất lượng cao nhất
d. Cả 3 ý trên đều sai
Đáp án đúng là: Chất lượng cao nhất
Câu 262: Trong văn hóa EVNGENCO1, khái niệm "Tâm" bao gồm yếu tố nào?
a. Đổi mới
b. Trách nhiệm
c. Sáng tạo
d. Tiên phong
Đáp án đúng là: Trách nhiệm
Câu 263: Giá trị cốt lõi nào giúp EVNGENCO1 đối mặt với thách thức và sáng tạo?
a. Niềm tin
b. Chất lượng
c. Tiên phong
d. Sáng tạo
Đáp án đúng là: Sáng tạo
Câu 264: Điều nào sau đây không phải là một trong sáu nét văn hóa tiêu biểu của EVNGENCO1: Nhân, Tâm,Tôn, Đồng ?
a. Nhân
b. Tâm 
c. Đồng
d. Tôn
Đáp án đúng là: Tôn
Câu 265: Sứ mệnh của EVNGENCO1 là gì?
a. Luôn là người dẫn đầu
b. Luôn là người tiên phong
c. Kiến tạo các giá trị bền vững
d. Kiến tạo môi trường làm việc cho CBCNV
Đáp án đúng là: Kiến tạo các giá trị bền vững
Câu 266: EVNGENCO1 khuyến khích điều gì trong các hoạt động đào tạo?
a. Sự cải tiến liên tục
b. Đối tượng đa dạng nhất
c. Chương trình hấp dẫn
d. Ưu tiên giảng viên trẻ
Đáp án đúng là: Sự cải tiến liên tục
Câu 267: Giá trị nào của EVNGENCO1 liên quan đến việc đảm bảo tính trung thực và trách nhiệm trong công việc?
a. Đoàn kết
b. Hợp tác
c. Chia sẻ
d. Minh bạch
Đáp án đúng là: Minh bạch
Câu 268: EVNGENCO1 cam kết gì đối với đối tác: Hợp tác thân thiện, Cạnh tranh lành mạnh, Lợi ích đôi bên?
a. Hợp tác thân thiện
b. Cạnh tranh lành mạnh
c. Lợi ích đôi bên
d. Tất cả các yếu tố trên.
Đáp án đúng là: Tất cả các yếu tố trên.
Câu 269: Nguyên tắc nào của EVNGENCO1 nhấn mạnh vào sự lãnh đạo gương mẫu?
a. Lãnh đạo phải làm trước
b. Lãnh đạo phải làm gương
c. Lãnh đạo phải hy sinh
d. Cả 3 ý trên đều sai
Đáp án đúng là: Lãnh đạo phải làm gương
Câu 270: Trong quản trị chất lượng, EVNGENCO1 coi trọng điều gì trong 4 yếu tố sau: Tính hệ thống, Lợi nhuận, Sáng tạo hay Phát triển nhân lực?
a. Lợi nhuận
b. Tính hệ thống
c. Sáng tạo
d. Phát triển nhân lực
Đáp án đúng là: Tính hệ thống
Câu 271: EVNGENCO1 đề cao điều gì trong việc quản lý rủi ro: Đánh giá kịp thời, Tính bảo mật hay Tính linh hoạt?
a. Đánh giá kịp thời
b. Tính bảo mật
c. Tính linh hoạt
d. Tất cả các yếu tố trên.
Đáp án đúng là: Tất cả các yếu tố trên.
Câu 272: Yếu tố nào trong văn hóa EVNGENCO1 liên quan đến việc sáng tạo không ngừng?
a. Đoàn kết
b. Nghĩa tình
c. Trung thực
d. Sáng tạo
Đáp án đúng là: Sáng tạo
Câu 273: Trong văn hóa EVNGENCO1, yếu tố nào được coi là nền tảng cho sự hợp tác thành công?
a. An toàn
b. Tiên phong
c. Niềm tin
d. Nhân văn
Đáp án đúng là: Niềm tin
Câu 274: EVNGENCO1 cam kết đảm bảo điều gì trong hoạt động sản xuất kinh doanh?
a. Sản lượng tối đa
b. Doanh thu tối đa 
c. An toàn và trách nhiệm
d. Lợi nhuận tối đa
Đáp án đúng là: An toàn và trách nhiệm
Câu 275: Nguyên tắc nào của EVNGENCO1 nhấn mạnh tầm quan trọng của trí tuệ tập thể?
a. Đoàn kết
b. An toàn
c. Nhân văn
d. Trung thực
Đáp án đúng là: Đoàn kết
Câu 276: EVNGENCO1 khuyến khích sự cải tiến trong lĩnh vực nào: Sản xuất, Dịch vụ khách hàng hay Quản lý?
a. Sản xuất
b. Dịch vụ khách hàng
c. Quản lý
d. Tất cả các yếu tố trên.
Đáp án đúng là: Tất cả các yếu tố trên.
Câu 277: Văn hóa EVNGENCO1 đề cao yếu tố nào trong việc đối xử với khách hàng?
a. Tôn trọng
b. Đề cao
c. Khen ngợi
d. Biểu dương
Đáp án đúng là: Tôn trọng
Câu 278: Yếu tố nào được xem là nhân tố then chốt tạo nên sự tin tưởng trong EVNGENCO1?
a. Nghi ngờ
b. Trung thực
c. Khác biệt
d. Rộng lượng
Đáp án đúng là: Trung thực
Câu 279: EVNGENCO1 thực hiện cam kết với người lao động bằng cách nào?
a. Đảm bảo môi trường làm việc an toàn
b. Đảm bảo nơi làm việc sạch sẽ
c. Đảm bảo phương tiện đi lại
d. Đảm bảo thu nhập cao
Đáp án đúng là: Đảm bảo môi trường làm việc an toàn
Câu 280: Trong văn hóa EVNGENCO1, điều nào sau đây là một triết lý hành động quan trọng?
a. Tăng trưởng nhanh
b. Phát triển nhanh
c. Phát triển bền vững
d. Phát triển đều đặn
Đáp án đúng là: Phát triển bền vững
Câu 281: Yếu tố nào trong EVNGENCO1 được coi là nền tảng cho việc phát triển năng lượng xanh?
a. Đoàn kết
b. Trung thực
c. Nhân văn
d. Trách nhiệm
Đáp án đúng là: Trách nhiệm
Câu 282: EVNGENCO1 cam kết điều gì để góp phần vào sự phát triển bền vững của đất nước?
a. Phát điện liên tục
b. Tăng trưởng liên tục
c. Bảo vệ môi trường
d. Nâng cao năng suất
Đáp án đúng là: Bảo vệ môi trường
Câu 283: Trong quản lý chất lượng, EVNGENCO1 đề cao yếu tố nào nhất?
a. Tính an toàn
b. Tính đoàn kết
c. Tính trung thực
d. Tính tiên phong
Đáp án đúng là: Tính an toàn
Câu 284: Nguyên tắc nào của EVNGENCO1 nhấn mạnh sự quan trọng của việc lãnh đạo phải làm gương?
a. Trách nhiệm
b. Niềm tin
c. Chất lượng
d. Sáng tạo
Đáp án đúng là: Trách nhiệm
Câu 285: Trong văn hóa EVNGENCO1, điều nào sau đây được xem là yếu tố quyết định cho sự thành công?
a. Vai trò lãnh đạo
b. Trí tuệ tập thể
c. Trách nhiệm cá nhân
d. Trách nhiệm xã hội
Đáp án đúng là: Trí tuệ tập thể
Câu 286: EVNGENCO1 coi trọng điều gì trong việc xây dựng môi trường làm việc?
a. Minh bạch
b. Thân thiện
c. Hài hòa
d. Vui vẻ
Đáp án đúng là: Minh bạch
Câu 287: Yếu tố nào trong văn hóa EVNGENCO1 liên quan đến việc tạo ra giá trị lâu dài cho khách hàng?
a. Khác biệt
b. Đột phá
c. Thay đổi
d. Chất lượng
Đáp án đúng là: Chất lượng
Câu 288: Trong văn hóa EVNGENCO1, yếu tố nào là cơ sở để xây dựng lòng tin với cộng đồng?
a. Minh bạch
b. Khác biệt
c. Sáng tạo
d. Đoàn kết
Đáp án đúng là: Minh bạch
Câu 289: EVNGENCO1 nhấn mạnh điều gì trong việc phát triển nguồn nhân lực?
a. Quy môn lớn
b. Chất lượng
c. Đa dạng
d. Tinh gọn
Đáp án đúng là: Chất lượng
Câu 290: Yếu tố nào trong EVNGENCO1 được coi là nền tảng cho việc đảm bảo niềm tin của khách hàng?
a. Chất lượng sản phẩm dịch vụ
b. Trình độ nguồn nhân sự
c. Chất lượng xử lý công việc
d. Năng suất lao động
Đáp án đúng là: Chất lượng sản phẩm dịch vụ
Câu 291: EVNGENCO1 đề cao yếu tố nào trong việc xử lý các thách thức về biến đổi khí hậu?
a. Trách nhiệm với môi trường
b. Trách nhiệm với người lao động
c. Trách nhiệm với EVN
d. Trách nhiệm với Chính phủ
Đáp án đúng là: Trách nhiệm với môi trường
Câu 292: Trong văn hóa EVNGENCO1, yếu tố nào được xem là quan trọng nhất trong việc xây dựng các giải pháp sáng tạo?
a. Trí tuệ cá nhân
b. Trí tuệ tập thể
c. Trí tuệ lãnh đạo
d. Trí tuệ người đứng đầu
Đáp án đúng là: Trí tuệ tập thể
Câu 293: EVNGENCO1 cam kết điều gì đối với việc đảm bảo chất lượng trong sản xuất điện?
a. Đảm bảo lợi nhuận
b. Đảm bảo kinh tế
c. Đảm bảo an toàn
d. Đảm bảo thu nhập
Đáp án đúng là: Đảm bảo an toàn
Câu 294: Yếu tố nào trong văn hóa EVNGENCO1 được xem là nền tảng cho sự đổi mới liên tục?
a. Sáng tạo
b. Trách nhiệm
c. Tiên phong
d. Niềm tin
Đáp án đúng là: Sáng tạo
Câu 295: Sứ mệnh của EVNGENCO1 liên quan đến điều gì?
a. Tiên phong trong lĩnh vực sản xuất điện và phát triển năng lượng mới
b. Dẫn đầu trong lĩnh vực sản xuất điện và phát triển năng lượng mới
c. Đi đầu trong lĩnh vực sản xuất điện và phát triển năng lượng mới
d. Phát triển nhanh trong lĩnh vực sản xuất điện và phát triển năng lượng mới
Đáp án đúng là: Tiên phong trong lĩnh vực sản xuất điện và phát triển năng lượng mới
Câu 296: EVNGENCO1 tập trung vào lĩnh vực nào?
a. Mua bán điện
b. Phát triển thủy điện
c. Phát triển nhiệt điện
d. Sản xuất điện và phát triển năng lượng mới
Đáp án đúng là: Sản xuất điện và phát triển năng lượng mới
Câu 297: Điều nào sau đây không phải là một trong các giá trị cốt lõi của EVNGENCO1: Niềm tin, chất lượng, tiên phong, đồng lòng?
a. Niềm tin
b. Chất lượng
c. Tiên phong
d. Đồng lòng
Đáp án đúng là: Đồng lòng
Câu 298: EVNGENCO1 nhấn mạnh điều gì trong việc hợp tác với đối tác: Tôn trọng lẫn nhau, Chia sẻ lợi ích hay Minh bạch và Trách nhiệm?
a. Tôn trọng lẫn nhau
b. Chia sẻ lợi ích
c. Minh bạch và Trách nhiệm
d. Tất cả các yếu tố trên
Đáp án đúng là: Tất cả các yếu tố trên
Câu 299: EVNGENCO1 cam kết điều gì trong việc bảo vệ môi trường: Giảm thiểu khí thải, Sử dụng năng lượng tái tạo hay Phát triển công nghệ xanh?
a. Giảm thiểu khí thải
b. Sử dụng năng lượng tái tạo
c. Phát triển công nghệ xanh
d. Tất cả các yếu tố trên.
Đáp án đúng là: Tất cả các yếu tố trên.
Câu 300: EVNGENCO1 cam kết điều gì để góp phần vào sự phát triển của ngành năng lượng quốc gia?
a. Đảm bảo an ninh năng lượng
b. Nộp thuế đầy đủ
c. Giải quyết việc làm
d. Đảm bảo doanh thu và lợi nhuận
Đáp án đúng là: Đảm bảo an ninh năng lượng`;


export const parseQuizData = (): Question[] => {
  const questions: Question[] = [];
  const fullText = rawPart1 + rawPart2 + rawPart3 + rawPart4 + rawPart5;
  const questionBlocks = fullText.split(/(?=\bCâu\s+\d+:)/);

  questionBlocks.forEach((block) => {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) return;

    const lines = trimmedBlock.split(/\r?\n/);
    const firstLine = lines[0];
    const idMatch = firstLine.match(/Câu\s+(\d+):/);
    if (!idMatch) return;

    const id = parseInt(idMatch[1], 10);
    const questionText = firstLine.replace(/Câu\s+\d+:\s*/, '').trim();

    const options: string[] = [];
    let correctAnswerText = '';

    for (let i = 1; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.match(/^[a-d]\.\s/)) {
        options.push(trimmed.substring(3).trim());
      } else if (trimmed.startsWith('Đáp án đúng là:')) {
        correctAnswerText = trimmed.replace('Đáp án đúng là:', '').trim();
      }
    }

    if (!correctAnswerText) return;

    const cleanAns = correctAnswerText.toLowerCase().replace(/[.,]$/, '').trim();
    let correctAnswerIndex = options.findIndex(opt => {
        const cleanOpt = opt.toLowerCase().replace(/[.,]$/, '').trim();
        return cleanOpt === cleanAns;
    });
    
    if (correctAnswerIndex === -1) {
        correctAnswerIndex = options.findIndex(opt => {
            const cleanOpt = opt.toLowerCase().replace(/[.,]$/, '').trim();
            return cleanOpt.includes(cleanAns) || cleanAns.includes(cleanOpt);
        });
    }

    if (questionText && options.length > 0 && correctAnswerIndex !== -1) {
      questions.push({
        id,
        question: questionText,
        options,
        correctAnswerIndex,
      });
    }
  });

  return questions;
};
