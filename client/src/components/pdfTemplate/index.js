import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
//import { connect } from "react-redux";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  section: {
    fontSize: 14,
    marginRight: 40,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
});

const MyDocument = (props) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Hostel For You.com</Text>
        <Text style={styles.section}>
          This is to notify that the bearer of this card {props.name} is
          interested in joining your hostel. We kindly request the hostel
          authority to provide with the information as required by the bearer of
          this card. We also request the hostel authority to provide the
          discount of Rs. XXXX on the aformentioned fee as per agreement. We
          wish for your comfortable time at hostel. Thank you!
        </Text>
      </View>
      <View style={styles.section}>
        <Text>For further information, contact: hostel@hostel.com</Text>
      </View>
    </Page>
  </Document>
);

//const mapStateToProps = state => ({
// hostels: state.retriever,
// loading: state.retriever.loading
//});

export default MyDocument;
