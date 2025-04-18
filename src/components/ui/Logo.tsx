// 'use client';

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Logo() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -10 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Link href="/" className="text-2xl font-bold tracking-tight text-accent">
//         G<span className="text-secondary">Web</span>
//       </Link>
//     </motion.div>
//   );
// }







// 'use client';

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Logo() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -10 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Link href="/" className="text-2xl font-bold tracking-tight text-accent">
//         <AnimatePresence mode="wait">
//           {scrolled ? (
//             <motion.span
//               key="full"
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 5 }}
//               transition={{ duration: 0.3 }}
//             >
//               G<span className="text-secondary">Web</span>
//             </motion.span>
//           ) : (
//             <motion.span
//               key="short"
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 5 }}
//               transition={{ duration: 0.3 }}
//             >
//               G
//             </motion.span>
//           )}
//         </AnimatePresence>
//       </Link>
//     </motion.div>
//   );
// }



'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Logo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-bold tracking-tight text-accent flex">
        <motion.span layout className="inline-block">
          G
        </motion.span>

        <AnimatePresence>
          {scrolled && (
            <motion.span
              key="web"
              className="text-secondary inline-block overflow-hidden"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.4 }}
            >
              Web
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
}
