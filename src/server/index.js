const express = require('express');
const soapRequest = require('easy-soap-request');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static('_dist'));

app.get('/soap', async (req, res) => {
  const response = await soap2();
  res.send(response);
});

const soap2 = async () => {
  const url = 'http://dbdsrvmsys2.dbdffm.db.de:81/belege.asmx';
  const sampleHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    // 'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
  };

  const xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\
  <soapenv:Header/>\
  <soapenv:Body>\
     <tem:Anmelden>\
        <tem:pin>2019</tem:pin>\
     </tem:Anmelden>\
  </soapenv:Body>\
</soapenv:Envelope>';

  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { body } = response;
  return body;
};

const soap = async () => {
  const url = 'http://www.holidaywebservice.com/HolidayService_v2/HolidayService2.asmx';
  const sampleHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    //'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
  };

  const xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hs="http://www.holidaywebservice.com/HolidayService_v2/"> \
    <soapenv:Body>\
        <hs:GetHolidaysForMonth>\
          <hs:year>2018</hs:year>\
          <hs:countryCode>UnitedStates</hs:countryCode>\
          <hs:month>11</hs:month>\
        </hs:GetHolidaysForMonth>\
    </soapenv:Body>\
    </soapenv:Envelope>';

  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { body } = response;
  return body;
};

app.listen(PORT, () => console.log('SERVER STARTED in port ' + PORT));