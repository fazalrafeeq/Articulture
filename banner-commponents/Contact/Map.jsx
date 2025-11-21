export default function MapSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Map Wrapper */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[350px] rounded-3xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.943302127612!2d-74.41059968459402!3d40.32634997937542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3d6c5247c3e3b%3A0x70e9b4b3dbb44de!2sMonroe%20Township%2C%20NJ!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>

        </div>

      </div>
    </section>
  );
}
