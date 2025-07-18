import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeSection = () => {
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-qr-code.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-slate-100 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800">Download My QR Code</h2>

      <div
        ref={qrRef}
        className="p-2 rounded-lg border-2 border-blue-400 bg-white"
      >
        <QRCodeCanvas
          value="https://your-link-or-data.com"
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={true}
        />
      </div>

      <button
        onClick={downloadQRCode}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
      >
        Download QR
      </button>
    </div>
  );
};

export default QRCodeSection;
