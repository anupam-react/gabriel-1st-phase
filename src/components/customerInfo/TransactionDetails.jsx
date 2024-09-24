import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  pdf,
  Image,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const TransactionDetails = ({
  handleOpen,
  isButton = true,
  userData,
  brandData,
  allData,
  data,
}) => {
  const [openDownload, setOpenDownload] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [transactionData , setTransaction] = useState()

  console.log(userData)

  console.log(transactionData?.vatRegNo);

  const getTransaction = async (id)=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/user/viewTransaction/${id}`)
    setTransaction(data)
  }

  useEffect(()=>{
    if(!allData?.transactionId){
      getTransaction(allData?._id)
    }else{
      getTransaction(allData?.transactionId?._id)
    }
    
  },[allData])

  const receiptRef = useRef();

  const pdfRef = useRef();

  const styles = StyleSheet.create({
    page: {
      // padding: 30,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "left",
    },
    section: {
      marginBottom: 10,
    },
    header: {
      fontSize: 20,
      textAlign: "center",
      marginBottom: 20,
    },
    text: {
      fontSize: 12,
    },
    bold: {
      fontWeight: "bold",
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    image1: {
      width: 200,
      height: 50,
    },

    footer: {
      marginTop: 20,
      textAlign: "center",
    },
    thank: {
      textAlign: "center",
      marginBottom: 20,
    },
  });

  // Create Document Component
  const ReceiptFormat = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.image} src={brandData?.image || "../Ellipse 9.png"}></Image>
          <Text>{brandData?.name}</Text>
        </View>
        <View>
          <View style={styles.section}>
            <Text style={styles.text}>
              Address: {brandData?.firstLineAddress}
            </Text>
            <Text style={styles.text}>Contact : {brandData?.phone}</Text>
            <Text style={styles.text}>Receipt No: {data?.orderId}</Text>
            <Text style={styles.text}>
              Date & Time:{" "}
              {data?.dateUploaded ||
                getDateFromISOString(data?.createdAt) +
                  " , " +
                  formatTime2(data?.createdAt)}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>
              Name:{" "}
              {userData?.fullName ||
                userData?.firstName + " " + userData?.lastName}
            </Text>
            <Text style={styles.text}>Items: {data?.productId?.name}</Text>
            <Text style={styles.text}>
              Price: £{data?.price} * {data?.quantity}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>Total: £{data?.total}</Text>
            <Text style={styles.text}>Discount: £{data?.offerDiscount}</Text>
            <Text style={styles.text}>VAT(Registration No): {transactionData?.vatRegNo}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>Rewards Points Earned: {allData?.coupon?.rewardPoints || 0}</Text>
            <Text style={styles.text}>Rewards Stamps Earned: {allData?.coupon?.rewardStamps || 0}</Text>
            <Text style={styles.text}>Payment Method: {allData?.paymentMethod}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.thank}>Thank you!</Text>
          <Image style={styles.image1} src="../Frame 38456.png"></Image>
        </View>
      </Page>
    </Document>
  );

  const handleDownload = async () => {
    const blob = await pdf(<ReceiptFormat />).toBlob();
    saveAs(blob, "receipt.pdf");
  };

  const generatePDF = () => {
    const input = receiptRef.current;

    // Apply zoom-out using CSS transform
    // Capture the entire page content as an image
    html2canvas(input, {
      scale: 1, // Capture at 100% scale
      useCORS: true, // Allow cross-origin content
      allowTaint: true, // Allow tainted (cross-origin) content
      scrollY: -window.scrollY, // Capture full page even if scrolled
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("full-page.pdf"); // Automatically download the PDF

      // Optional: Upload the PDF and get a shareable link
      const pdfBlob = pdf.output("blob");
      sharePDF(pdfBlob);
    });
  };

  // Function to handle sharing the PDF
  const sharePDF = (pdfBlob) => {
    const formData = new FormData();
    formData.append("file", pdfBlob, "receipt.pdf");

    // Replace this URL with your server's upload endpoint
    axios
      .post("https://your-server.com/upload", formData)
      .then((response) => {
        console.log("PDF uploaded successfully", response.data);

        // Create a shareable link
        const shareLink = response.data.fileUrl;

        // You can share this link using WhatsApp, Email, etc.
        const whatsappLink = `https://wa.me/?text=Check out this PDF: ${shareLink}`;
        window.open(whatsappLink);
      })
      .catch((error) => {
        console.error("Error uploading PDF:", error);
      });
  };

  return (
    <div className="details-container" ref={receiptRef}>
      <p className="details-title pb-8">Transaction Details</p>
      <img
        src="./Mask group (2).png"
        alt=""
        className="cross-image2"
        onClick={() => handleOpen(false)}
      />
      <div className="h-[60vh] overflow-y-scroll no-scrollbar">
        <div className="flex items-center justify-center gap-2">
          <img
            src={brandData?.image || "../Ellipse 9.png"}
            alt=""
            className="w-[75px] h-[75px] rounded-full"
          />
          <div>
            <p className="text-[#121212] font-semibold text-[24px]">
              {brandData?.name}
            </p>
            <p className="text-[#121212]">{brandData?.name}</p>
          </div>
        </div>
        <p className="text-[#8F8F8F] text-center pb-2">
          Address : {brandData?.firstLineAddress}
          <p> Contact : {brandData?.phone}</p>
        </p>
        <div className="border border-[#000000] border-dashed w-[400px]"></div>
        <p className="text-[#121212] text-[24px] font-[500] text-center">
          RECEIPT
        </p>
        <div className="border border-[#000000] border-dashed w-[400px]"></div>
        <div className="details-info text-[#8F8F8F]">
          <div className="info2">
            <p>Receipt No</p>
            <p>{data?.orderId}</p>
          </div>
          <div className="info2">
            <p>Date & Time</p>
            <p>
              {data?.dateUploaded ||
                getDateFromISOString(data?.createdAt) +
                  " , " +
                  formatTime2(data?.createdAt)}
            </p>
          </div>
          <div className="border border-[#000000] border-dashed w-[400px]"></div>
          <div className="info2">
            <p className="text-[#121212] font-semibold">Name</p>
            <p className="text-[#121212] font-semibold">
              {userData?.fullName ||
                userData?.firstName + " " + userData?.lastName}
            </p>
          </div>
          <div className="info2">
            <p className="text-[#121212]">Items</p>
            <p className="text-[#121212]">Price</p>
          </div>
          <div className="info2">
            <p>{data?.productId?.name}</p>
            <p>
              £{data?.price} * {data?.quantity}
            </p>
          </div>

          <div className="border border-[#000000] border-dashed w-[400px]"></div>
          <div className="info2">
            <p className="text-[#121212] font-semibold">Total</p>
            <p className="text-[#121212] font-semibold">£{data?.total}</p>
          </div>
          <div className="info2">
            <p>Discount</p>
            <p>£{data?.offerDiscount}</p>
          </div>
          <div className="info2">
            <p>VAT(Registration No)</p>
            <p>{transactionData?.vatRegNo}</p>
          </div>
          <div className="border border-[#000000] border-dashed w-[400px]"></div>
          <div className="info2">
            <p className="text-[#121212] font-semibold">Rewards</p>
            <p className="text-[#121212] font-semibold">{(+allData?.coupon?.rewardPoints || 0) + (+allData?.coupon?.rewardStamps || 0)}</p>
          </div>
          <div className="info2">
            <p>Points</p>
            <p>{allData?.coupon?.rewardPoints || 0}</p>
          </div>
          <div className="info2">
            <p>Stamps</p>
            <p>{allData?.coupon?.rewardStamps || 0}</p>
          </div>
          <div className="border border-[#000000] border-dashed w-[400px]"></div>
          <div className="info2">
            <p>Payment Method</p>
            <p>{allData?.paymentMethod}</p>
          </div>
          <div className="border border-[#000000] border-dashed w-[400px]"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-[24px] text-[121212] font-semibold">
            THANK YOU !
          </p>
          <img src="../Frame 38456.png" alt="" />
        </div>
      </div>
      <hr className="w-full bg-[#000000] my-6" />

      {isButton && (
        <div className="button-container3">
          <button
            className="menuButton4"
            onClick={() => {
              handleDownload();
              setOpenDownload(true);

              setTimeout(() => {
                setOpenDownload(false);
              }, 2000);
            }}
          >
            Download Receipt
          </button>
          {/* <button
            className="menuButton4"
            onClick={() => {
              setOpenShare(true);
              setTimeout(() => {
                setOpenShare(false);
              }, 2000);
            }}
          >
            Share Receipt
          </button> */}
        </div>
      )}
      <DialogDefault open={openDownload} handleOpen={setOpenDownload}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
            Transaction receipt downloaded
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={openShare} handleOpen={setOpenShare}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
            Transaction receipt Shared
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default TransactionDetails;
