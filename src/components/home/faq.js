import React from "react";

import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</h2>
          <p>GIỚI THIỆU ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Quy Định Về Xác Nhận Thông Tin Đặt Phòng" key="1">
            <p>
              Sau khi Khách hàng hoàn thành đặt phòng online trên website
              mytour.vn. Mytour sẽ gửi email cho Khách hàng để xác nhận lại toàn
              bộ thông tin đặt phòng đã được hiển thị trong đơn đặt phòng online
              của Khách hàng và phương thức thanh toán. - Đơn đặt phòng online
              mà Khách hàng đã đặt và Mytour đã xác nhận với Khách hàng qua
              email chỉ có hiệu lực trong vòng 24 giờ kể từ thời điểm Mytour gửi
              email xác nhận đơn đặt phòng online cho Khách hàng. Nếu Khách hàng
              không thanh toán đúng và đủ tiền phòng trong đơn đặt phòng trong
              24 giờ nêu trên thì Mytour không có trách nhiệm giữ và đảm bảo số
              lượng phòng và loại phòngcòn trống đúng và đủ như trong thông tin
              đơn đặt phòng Mytour đã xác nhận với Khách hàng qua email. Khi
              phát sinh trường hợp này, Khách hàng cần đặt lại một đơn đặt phòng
              online khác hoặc gọi điện thoại trực tiếp cho Mytour để xác nhận
              lại thông tin. - Sau khi Khách hàng thanh toán thành công tiền
              phòng cho đơn đặt phòng online, Mytour sẽ gửi xác nhận lần cuối
              cùng về đơn đặt phòng online của Khách hàng. Nếu cần, Khách hàng
              có thể in xác nhận lần cuối này của Mytour để cung cấp cho Khách
              sạn như là một bằng chứng cho việc đặt phòng thành công của mình.
              Gần đến ngày Khách hàng sử dụng phòng đã đặt, Mytour có thể sẽ gửi
              email đến cho Khách hàng các thông tin về điểm đến của Khách hàng,
              một số thông tin và ưu đãi cụ thể (bao gồm cả các ưu đãi của bên
              thứ 3 đến cấp độ mà Khách hàng đã đăng ký chọn cho loại thông tin
              này) liên quan đến đặt phòng và điểm đến của Khách hàng.
            </p>
          </Panel>
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p>
              Postea ceteros corrumpit ius te, eos epicuri intellegebat
              consequuntur et. Sint quot suscipiantur ea nam. Nam pericula
              evertitur ut, per et quod nostro, autem augue id has. Virtute
              epicurei quo te, pri et novum essent senserit.
            </p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>
              Eu veritus ancillae suavitate per, cum in appellantur efficiantur.
              Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii
              oblique interesset ea. Suas quidam volumus id eam, id populo
              euripidis temporibus pri. At eum quas putent iriure, fugit tritani
              sed ad. Per ad magna possim aliquam, est aeque exerci verear an,
              qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat
              omittam evertitur ad, meliore gubergren voluptatum at mel.
            </p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>
              Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia
              ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum
              neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem
              nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper
              consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea
              velit facete nec.
            </p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>
              Usu dolorem ceteros te. Veri exerci ne vix, modo ignota an qui. Ne
              oblique antiopam quo. Ex quem saepe cum, temporibus comprehensam
              qui at. Aliquip habemus fierent qui at. No facete omnesque
              argumentum sea, est tale error nihil ad.
            </p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>
              Erant vitae alterum in mel, viris rationibus argumentum eu sea.
              Per ei diceret constituto, ei qui simul intellegam, ut eos dolor
              ceteros. Altera contentiones et eam. Discere alienum intellegat te
              duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti
              nam, quo cu magna possit patrioque.
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;
