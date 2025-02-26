
import Component, { PageEl } from '@/frontend/components/qecomps/Component'
import Window from '@/frontend/components/qecomps/Window';
import { useEffect } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Router from 'next/router'
import Copy from '@/frontend/components/qecomps/Copy';
import FaDigits, { EnDigits } from '@/frontend/components/qecomps/FaDigits';
import TextBox from '@/frontend/components/qecomps/TextBox';
import Text from '@/frontend/components/qecomps/Text';
import AbbreviateDate from '@/frontend/components/qecomps/AbbreviateDate';
import Badge from '@/frontend/components/qecomps/Badge';
import Bold from '@/frontend/components/qecomps/Bold';
import Cap, { FAtoENRatio } from '@/frontend/components/qecomps/Cap';
import Checkbox from '@/frontend/components/qecomps/Checkbox';
import Circle from '@/frontend/components/qecomps/Circle';
import CountDown from '@/frontend/components/qecomps/CountDown';
import DropDown from '@/frontend/components/qecomps/DropDown';
import FindEmojies from '@/frontend/components/qecomps/FindEmojies';
import Flag from '@/frontend/components/qecomps/Flag';
import HandRankExplore from '@/frontend/components/qecomps/HandRankExplore';
import Icon2Titles from '@/frontend/components/qecomps/Icon2Titles';
import Icon3Titles from '@/frontend/components/qecomps/Icon3Titles';
import LinkHashtags from '@/frontend/components/qecomps/LinkHashtags';
import WindowFloat from '@/frontend/components/qecomps/WindowFloat';
import Num2EN from '@/frontend/components/qecomps/Num2EN';
import Num2FA from '@/frontend/components/qecomps/Num2FA';
import NumAbbrev from '@/frontend/components/qecomps/NumAbbrev';
import OpeningTitle from '@/frontend/components/qecomps/OpeningTitle';
import OpeningDetail from '@/frontend/components/qecomps/OpeningDetail';
import PhoneEditFloat from '@/frontend/components/qecomps/PhoneEditFloat';
import PriceTextBox from '@/frontend/components/qecomps/PriceTextBox';
import RemainingTime from '@/frontend/components/qecomps/RemainingTime';
import ReplacePro from '@/frontend/components/qecomps/ReplacePro';
import Search from '@/frontend/components/qecomps/Search';
import SerialGenerator from '@/frontend/components/qecomps/SerialGenerator';
import StarRating from '@/frontend/components/qecomps/StarRating';
import TextArea from '@/frontend/components/qecomps/TextArea';
import TextEndAbbreviation from '@/frontend/components/qecomps/TextEndAbbreviation';
import TextMidAbbreviation from '@/frontend/components/qecomps/TextMidAbbreviation';
import ToLocaleDateTime from '@/frontend/components/qecomps/ToLocaleDateTime';
import UserAvatar from '@/frontend/components/qecomps/UserAvatar';
import VItem from '@/frontend/components/qecomps/VItem';


export default p => Component(p, Page);

const Page: PageEl = (props, refresh, getProps, onConnected, dies, z) => {

  getProps(async () => {
    props.item1 = { likes: 100, dislikes: 50, liked: false, disliked: true }
    props.item2 = { likes: 50, dislikes: 20, liked: true, disliked: false }
    props.search = "قهوه"
    props.stars1 = 1.5
    props.stars2 = 4
  })

  let Lorem = <p style={{ padding: 10 }}>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
    تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
    ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
    ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
    ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
    موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با
    تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
    و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
    ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
    در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
    و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد
    و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
  </p>

  return <div style={{ direction: z.lang.dir, padding: 10 }}>


    {props.form == "phone" ? <PhoneEditFloat
      title='ورود شماره تماس'
      title2='لطفا شماره تماس خود را وارد کنید'
      explain={"۱: " + "لطفا شماره تماس خود را به دقت وارد نمایید."}
      countryitemclass={`flex min-h-[40px] rounded-md items-center bg-[#84B780] hover:bg-[#83BF7F] active:bg-[#79B075] m-1 cursor-pointer`}
      clist={{ title: z.lang.selcountry, title2: z.lang.searchccodes }}
      on={async (json) => { alerter(json) }}
      onclose={() => { props.form = null; refresh() }} /> : null}


    {props.form == "test" ? <WindowFloat title="پنجره تست" onclose={() => {
      props.form = null
      refresh()
    }} titletextcolor='#621C14' titlebgcolor='#648E6A' contentbgcolor='#BFC3D9' contentStyle={{ padding: 20 }}>
      {Lorem}
    </WindowFloat> : null}



    <Window title="کامپوننت های کیو ای">

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5", fontSize: 12 }} onClick={() => { alerter(SerialGenerator(30)) }}>
        تولید سریال / پسورد تصادفی
      </b-200>



      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => {
        alerter("my title", "my body", {
          backgroundColor: "#4C772FC2", padding: 10, borderRadius: 5,
          minHeight: 200
        }, cdn("/files/qecircular.webp"))
      }}>
        هشدار سفارشی شده (رنگ)
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
        await prompter("hiiii")
      }}>
        ورودی کاربر سفارشی شده (رنگ)
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
        await confirmer("hiiii")
      }}>
        تایید کاربر سفارشی شده (رنگ)
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
        await uploader({ text: "فایل مورد نظر را آپلود کنید", title: "آپلود فایل", maxmb: 10, max_age_sec: 3600 })
      }}>
        آپلودر سفارشی شده (رنگ و تایم)
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        زمان باقی مانده :
        <sp-3 />
        {RemainingTime(new Date(), new Date(new Date().getTime() - 3 * 3600000), z.lang.code)}
      </b-200>


      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>اختصار انتهای متن: <sp-2 />
        {TextEndAbbreviation(`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`, 30)}
      </b-200>


      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>اختصار وسط متن: <sp-2 />
        {TextMidAbbreviation(`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`, 30)}
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5", fontSize: 12 }}>
        جایگزین کننده:
        <sp-3 />
        {ReplacePro(
          "این تصویر IMAGE مربوط به کلوز است",
          "IMAGE",
          <img src={cdn("/files/close.svg")} style={{ width: 15, marginLeft: 5, marginRight: 5 }} />)}
      </b-200>


      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
        Router.push(z.root + "/examples/AbbreviateDate")
      }}>
        <f-12>نمایش تاریخ و زمان</f-12>
      </b-200>



      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => { Copy("متن کپی شود") }}>
        کپی متن
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        شمارنده معکوس
        <sp-2 />
        <CountDown expdate={new Date(new Date().getTime() + 30000)} onexpire={() => { console.log("expired!") }} />
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        شماره فارسی
        <sp-2 />
        {FaDigits("123456")}
      </b-200>


      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        شماره انگلیسی
        <sp-2 />
        {EnDigits("۱۲۳۴۵")}
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        عدد فارسی با جدا کننده
        <sp-2 />
        {(123456).toLocaleString("fa-IR")}
      </b-200>


      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        عدد انگلیسی با جدا کننده
        <sp-2 />
        {(123456).toLocaleString("en-US")}
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} >
        عدد مطابق با زبان صفحه + جدا کننده
        <sp-2 />
        {(123456).toLocaleString(z.lang.region)}
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <f-12>تاریخ و زمان کامل (لوکال): </f-12> <sp-2 />
        {ToLocaleDateTime(new Date())}
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <f-12>نشان بج مارک
          <sp-2 />
          <Badge verify="owner" /> <sp-2 />
          <Badge verify="admin" /> <sp-2 />
          <Badge verify="anythingelse.." /> <sp-2 />
        </f-12>
      </b-200>



      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <Bold><f-12> متن پررنگ از طرف فونت</f-12></Bold>
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <f-12>{Cap("capitalize")}</f-12>
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => {
        alerter([
          {
            sentence: "درود بی کران بر شما",
            ratio: FAtoENRatio("درود بی کران بر شما")
          },
          {
            sentence: "درود بی کران بر شما ۱۲۳۴",
            ratio: FAtoENRatio("درود بی کران بر شما ۱۲۳۴")
          },
          {
            sentence: "درود بی کران بر شما yoohoo",
            ratio: FAtoENRatio("درود بی کران بر شما yoohoo")
          }
        ])
      }}>
        <f-12>{"نسبت فارسی به انگلیسی در متن"}</f-12>
      </b-200>

      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <Checkbox defaultChecked color="#1FB722" on={(checked) => { }} /> <sp-2 />‌چک باکس
      </b-200>




      <br-x />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => {
        alerter({ number: 15000, persian: Num2FA(15000) })
      }}>
        عدد به حروف فارسی
      </b-200>



      <br-x />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => {
        alerter({ number: 15000, persian: Num2EN(15000) })
      }}>
        عدد به حروف انگلیسی
      </b-200>


      <br-x />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => {
        alerter({ number: 15000, persian: NumAbbrev(1532, 3, "en-US") })
      }}>
        اختصار عدد
      </b-200>




      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}
        onClick={() => {
          alerter({
            text: " این متن 😁 حاوی 😂 چند ایموجی 😅 معروف است",
            filter: FindEmojies(" این متن 😁 حاوی 😂 چند ایموجی 😅 معروف است")
          })
        }}>
        😍 یافتن ایموجی در متن
      </b-200>




      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <Flag ccode='ir' on={() => { }} style={{ width: 30 }} />‌
        <sp-2 />
        <Flag ccode='us' on={() => { }} style={{ width: 30 }} />‌
        <sp-2 />
        <Flag ccode='gb' on={() => { }} style={{ width: 30 }} />‌
        <sp-2 />
        <Flag ccode='mx' on={() => { }} style={{ width: 30 }} />‌
        <sp-2 />
        <Flag ccode='au' on={() => { }} style={{ width: 30 }} />‌
        پرچم کشور
      </b-200>


      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <HandRankExplore item={props.item1} refresh={refresh} z={z} ondislike={() => { }} onlike={() => { }} />
        <sp-2 />
        لایک و دیسلایک
      </b-200>


      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }}>
        <HandRankExplore item={props.item2} refresh={refresh} z={z} ondislike={() => { }} onlike={() => { }} />
        <sp-2 />
        لایک و دیسلایک
      </b-200>



      <br-x />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => {
        props.form = "test"
        refresh()
      }}>
        پنجره شناور
      </b-200>



      <br-xx />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={() => {
        props.form = "phone";
        refresh()
      }}>
        ورود شماره تلفن
      </b-200>


      <br-x />
      <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
        log({ text: "Progress started...", type: "ok" })
        await sleep(2000)
        log({ text: "Loading AI model...", type: "ok" })
        await sleep(1000)
        log({ text: "Loading weapons...", type: "ok" })
        await sleep(1500)
        log({ text: "The progress was successfull!", type: "ok" })
        await sleep(1000)
        closelog()
      }}>
        لاگ
      </b-200>



      <br-x />
      <Window title='هشتگ تکی و دوبل + پنجره سفارشی' contentbgcolor='#C0D2BD' titlebgcolor='#A9AB42'
        contentStyle={{ padding: 5 }} style={{ margin: 5 }}>
        {LinkHashtags(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, et 
        vero enim reprehenderit #AbbreviateDate veritatis ##AbbreviateDate, nostrum, vel commodi quasi 
        quaerat tenetur necessitatibus dolore illo harum. Harum dicta est tenetur?`, "test",
          {
            ondouble: (tag) => { console.log(`on double:${tag}`) },
            onsingle: (tag) => { console.log(`on single:${tag}`) },
            singleprelink: z.root + "/examples/",
            doubleprelink: z.root + "/examples/",
          })}
      </Window>



      <br-xx />
      <Window title="آواتار کاربر" style={{ backgroundColor: "#748EC5", minHeight: 60 }}>
        <w-cse style={{ padding: 20, rowGap: 50 }}>
          <UserAvatar image={z.user.image} imageprop={z.user.imageprop} width={50} />
          <UserAvatar image={z.user.image} imageprop={z.user.imageprop} width={45} />
          <UserAvatar image={z.user.image} imageprop={z.user.imageprop} width={40} />
          <UserAvatar image={z.user.image} imageprop={z.user.imageprop} width={35} />
          <UserAvatar image={z.user.image} imageprop={z.user.imageprop} width={30} />
          <UserAvatar image={z.user.image} imageprop={z.user.imageprop} width={25} />
        </w-cse>
      </Window>



      <br-xx />
      <Window title="پروگرس سیرکولار" contentbgcolor='#C8D3A4' contentStyle={{ padding: 15 }}>
        <w-cc style={{ gap: 10 }}>
          <Circle percent={58} width={50} /> <sp-2 />دایره درصد
          <Circle percent={58} width={50} /> <sp-2 />دایره درصد
          <Circle percent={100} width={30} /> <sp-2 />دایره درصد
          <Circle percent={58} width={30} /> <sp-2 />دایره درصد
        </w-cc>
      </Window>



      <Window title='آیتم های وی'>
        <w-cc style={{ gap: 10, padding: 20 }}>
          <VItem image={cdn("/files/app/node.webp")} title={"نود جی اس"} selected on={() => { alerter("شما آیتم نود جی اس را انتخاب کردید") }} />
          <VItem image={cdn("/files/app/reload.webp")} title={"ریلود"} on={() => { alerter("شما ریلود را انتخاب کردید") }} />
          <VItem image={cdn("/files/app/plug.webp")} title={"پلاگ"} />
          <VItem image={cdn("/files/app/start.webp")} title={"استارت"} />
          <VItem image={cdn("/files/app/sender2.webp")} title={"ارسال"} />
          <VItem image={cdn("/files/app/workers.webp")} title={"ورکرها"} />
          <VItem image={cdn("/files/app/translate.webp")} title={"ترجمه"} />
        </w-cc>
      </Window>

      <br-xx />
      <Window title='امتیاز دهی ستاره ای' contentStyle={{ minHeight: 50, padding: 10 }}>

        <f-cse>
          <c-cc>
            <StarRating stars={props.stars1 || 0} on={(num) => { refresh({ stars1: num }) }} id='star_test1' />
            <StarRating stars={props.stars1 || 0} on={(num) => { refresh({ stars1: num }) }} id='star_test2' width={20} />
            <StarRating stars={props.stars1 || 0} on={(num) => { refresh({ stars1: num }) }} id='star_test3' width={15} />
          </c-cc>

          <c-cc>
            <StarRating stars={props.stars2 || 0} on={(num) => { refresh({ stars2: num }) }} id='star_test4' />
            <StarRating stars={props.stars2 || 0} on={(num) => { refresh({ stars2: num }) }} id='star_test5' width={20} />
            <StarRating stars={props.stars2 || 0} on={(num) => { refresh({ stars2: num }) }} id='star_test6' width={15} />
          </c-cc>

        </f-cse>
      </Window>



      <br-xx />
      <DropDown id="test" title='متن باز شونده' key={"test"} state={props.isddopen} titlebgcolor='#75B058' contentbgcolor='#A7C0C4'>
        {Lorem}
      </DropDown>


      <br-x />
      <OpeningTitle name='service' id={"test"} onflip={(o) => { props.opendetail = o; refresh() }}>
        <Icon3Titles
          title1={"آیتم باز شونده"}
          title2={<f-12 style={{ marginTop: 5 }}>عنوان دوم</f-12>}
          title3={<f-12 style={{ marginTop: 5 }}>عنوان سوم</f-12>}
          icon={cdn("/files/app/accountmngr.webp")}
          roundicon
          style={{ backgroundColor: "#B2C0D2", minHeight: 75 }}
          special={"special"}
          specialcolor={"green"} />
      </OpeningTitle>
      <OpeningDetail open={props.opendetail} name='service' id={"test"} >
        <div style={{ backgroundColor: "#80B07D" }}>{Lorem}</div>
      </OpeningDetail>





      <br-xx />
      <Icon2Titles
        title1={"عنوان اول"}
        title2={"عنوان دوم"}
        icon={cdn("/files/app/close.webp")}
        style={{ backgroundColor: "#9CB99B" }}
        on={() => { alerter("Clicked on Icon2Titles") }}
      />


      <br-xx />
      <Icon2Titles
        title1={<f-13>{"عنوان سفارشی"}</f-13>}
        title2={<f-10>{"عنوان دوم سفارشی"}</f-10>}
        icon={<img src={cdn("/files/app/trader.webp")} style={{ width: 30 }} />}
        style={{ backgroundColor: "#A3D7AE" }}
        on={() => { alerter("Clicked on Icon2Titles") }} />


      <br-xx />
      <Icon3Titles
        title1={"عنوان اول"}
        title2={"عنوان دوم"}
        title3={"عنوان سوم"}
        icon={cdn("/files/app/gpt.webp")}
        style={{ backgroundColor: "#9BB3B9" }}
        on={() => { alerter("Clicked on Icon3Titles") }}
      />


      <br-xx />
      <Icon3Titles title1={"عنوان اول"}
        title2={<f-12 style={{ marginTop: 5 }}>عنوان دوم</f-12>}
        title3={"عنوان سوم"}
        icon={cdn("/files/app/qedesk.webp")}
        style={{ backgroundColor: "#A09EC9" }}
        on={() => { alerter("Clicked on Icon3Titles") }}
      />



      <br-xx />
      <Window title='متن تکه ای' contentStyle={{ minHeight: 50, padding: 10 }}>
        <Text
          title='نمره شما:'
          nospace
          value={(20).toLocaleString(z.lang.region)}
          wlink='ویرایش'
          whighlight
          onwlink={() => { alerter("قابل ویرایش نیست") }}
        />
      </Window>


      <br-xx />
      <Window title='تکست باکس قیمت' contentStyle={{ minHeight: 100, padding: 10 }}>
        <PriceTextBox fractions={0} title='لطفا مبلغ مورد نظر را وارد کنید' defaultValue='2000' unit='تومان' />
      </Window>


      <br-xx />
      <Window title='جست و جو' contentStyle={{ minHeight: 100, padding: 10 }}>
        <Search
          title='جست و جو در میان گزینه ها'
          defaultValue={props.search}
          on={(txt) => { props.search = txt; refresh(); alerter("جست و جو به دنبال:" + txt) }}
          onclose={() => { refresh({ search: "" }) }}
        />
      </Window>


      <br-xx />
      <Window title='TextArea' contentStyle={{ minHeight: 50, padding: 10 }}>
        <TextArea on={(txt) => { props.txtareamsg = txt; }} title='متن را وارد کنید:' placeholder='پیام شما' />
        <b-200 style={{ backgroundColor: "#66AE7D" }} onClick={() => { alerter(props.txtareamsg) }}>بازبینی</b-200>
      </Window>


      <br-x />
      <br-x />
      <br-x />
    </Window>

  </div>
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  (global.Startup != "OK") ? (await (await import('@/startup.ts')).Starter()) : null

  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, pageid } = session;


  let keys = ["region", "dir", "ff", "ffb", "support", "code", "textw", "txtmt"]
  let nlangs = {}
  for (let l of Object.keys(global.langs[lang])) {
    if (keys.includes(l))
      nlangs[l] = global.langs[lang][l]
  }

  let obj = await Prosper({
    props: {
      value: { v: "hiiii" },
      query: context.query,
      nlangs,
      path,
      session,
      title: "test title",
      description: "test description",
      pageid,
    },
  }, context)


  return obj

}


