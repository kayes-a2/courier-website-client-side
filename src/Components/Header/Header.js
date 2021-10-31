//import component's & react external node pakage

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth/useAuth';

//header component arrow function
const Header = () => {

    //use auth context coustom hook
    const { user, logout } = useAuth();

    return (
        //full header part of html (jsx) 
        <div className="font-bold pl-3 pb-3 pt-3 py-4 bg-gray-500 flex">
            <img className="h-16 w-16 flex items-center justify-center rounded-full" src="data: image / jpeg; base64, /9j/4AAQSkZJRgABAQAAAQABAAD / 2wCEAAkGBxATEBUQExIVFhUVFxUVFRUVFxUVFRcYFRUXGBcVGBUYHSggGBolIBUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLf / AABEIAOEA4QMBIgACEQEDEQH / xAAcAAACAgMBAQAAAAAAAAAAAAAAAQYHAgQFAwj / xABEEAACAQICBgUJBgQFBAMAAAAAAQIDEQQhBRIxQVFhBiJxgZEHEzJCUqGxweEUYnKS0fAjgrLCQ6LS4vFTY3OzFiQz / 8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQMGAv / EADMRAAIBAgIHBwMFAQEBAAAAAAABAgMRBCEFEjFBUbHwEzJhcYGh0SKR4RRCUsHxIzMG / 9oADAMBAAIRAxEAPwC8TFsHIaQAkjIQwAAAAAAEAFxgIAYCOfidNYanlOvTT4aycvyq7Mxi5OyVzEmoq7djogRup00wa2SlL8MH / dY8f / nOHvZQqvuj / qNyw1Z / sfXmaf1VH + S + 5KjBsjMumtBbYVF3R / U9KXTXBva5x7Y3 / pbH6at / Fj9TR / kiSJDOVhtP4SplGvC72KT1H4SszpxaeaNMouLtJWNsZKSvF38jIAAwegABABcYCAGAAAAAJsAYCuAAJDAAAEMAAATEncAYzxxFeEIuc5KMVm23ZIg + nOmspXhhlqrZ5xrrP8MXs7XnyRto0J1XaK9dxprYiFFXm / TeyX6S0tQoK9Wajwjtk + yKzIjpLp1N5UKaS9qWcvyrJeLIhVqSlJyk3KT2tttvtbMS1pYCnDOWb9ioq6QqTyj9K9 / ubeN0piKv / wClWUuV7R / KrL3GmhjJqSSsiC25O7zYhpg0BkwDYhgAI2MHjq1J3p1JQ5RbS8NjPAA81ZhOzuiV6N6cVY5Voqovaj1ZeGx + 4lui9O4euv4c + t7MurLw391ypgTzut2ziQquApT7uT8Nn2 / wnUsfVh3s147fv83LtGV1oTplVp2hXvUh7Xrx7 / W78 + ZO8DjKdWCqU5KUXvXwa3PkVVbDzov6llxLehiadbuvPhvNoAA0m8QwEwBiAYArAMAAAQwAABAAaOltKUsPT85UfJJelJ8Eg0vpOnh6TqzfKK3ye6KKs0tpOpiKjqVHnsjFbIrgv3mS8LhXWd33efgiHi8WqKsu9y8We + nNOVsTO83aC9Gmn1VzftPn8DmABeRiorVirIoZSlN60ndgMRnCGV3 + 9v6GWzykYiHNq + SEAADAAAEAAwEMABDAARuaK0pVw89enK3tRfoyXBr57TUMTDSkrPYZTcXdbS2NB6bpYmF45SXpwe2PPmuZ1yl8Fi50qiqU5aso7H8U1vT4Fo6B0xHE0tZZTVlON9j4rk9xS4vCdl9Ue7y / HiXuDxfa / TLvc / zxR1hiQyEThDAQAwEAAxAMADxr1owg5ydoxTbb3JHqQPp7pnWl9lg8o2dS297Uu7b224G2hRdWaiukacRWVGDk / TxZwekGmJ4ms5vKCuqceC4v7z3 / AEOYAzoYxUUox2I5uc3OTlLaxACR7aijm7N7vpZ80ZbsYSuOnC1m / wB / vM8pzbCUrmIS3sN7kAwAyYABAAAWAAAGIAAGkbeitGVa89SmtnpSfoxXFv5FgaG0DRw6ulrT3zlt / lXqojV8VCjk83w + eBKw + EnWzWS4 / HEh + A6LYqoruKprjN2f5Vn42NHS + jJUKipylGV1dON921Z71deJYOkcfbqQee98PqVt02x + rWhGL60Fd575tPPPZaP + Yi4fF1alWztbrf52JeIwdKlSbV79f1ccVq5vhs / fceujdJVKFWNWDzWTW6Ud8X4fA5eDxiqRvvW1cPobBYuKeUisUmmnHKxcWjsbCtSjVg7qS7096fNG4Vp0K0z5mt5qT / h1WlyjLYn37H3cCyygxNDsZ6u7cdFha6rU9bfvAAA0EgAFcABgAAGhprHqhQnWfqrqrjJ5RXjYqKrUlKTlJ3lJttve27tkv8omPvOGHWyK1pdryiu5Xf8AMQ4usBS1aes9r5FFpCrr1dVbI89 / 9AMAZOIAJmxDA1pR11Tk096i3ex29AaCjJKrUakt0E013tfDx4Heq1ZJ2SstxX18coS1YK / Hrb1vLGho9zjrTdr7OtnpyIDUw84 + lFrtTXxPK5YSxUuQp1IS9KnF9qT + KPC0lxj7 / g2PRnCft + Svhk5lhMK9tGPdFL4HhPQuDfqtdkpfO5sWkae9P2 + TU9G1dzXv8EMbNSppBXtZtcclY3OlkIUaqpU9a2qpNtp3bbyWWzI4lChKclCEXKUnZJbWysxulp62pQyttdle / Czv1s8ej0T / APPUnT7XF532JNpJcW01nbdey8XbV7NOaklJb / 3YyOzQ6JV4QS1qbe1q8trVrbORhU6O4leon2Sj82i4o4qEqcXOSUrK6vv3nM4rByhVkqSbhd6r23V3Y5Jv6G0VUxFTUjklnOT2RXzfBGzgOjuIqVFBwcF603ayXdtfIsDR + Bp0aap01ZLxb3tvezxicZGmrQd2 / YzhcFKo7zVlz64 / YNHYGnRpqnTVktvFve297NXSWkNXqRee98OXaGksfq9SL6298OXacWUkk23ZLNt7FzbKZu7uy7SUVZI8cfjI0qcqstkVfm3uXa3kVXjMTKpUlUl6Um2 + /d2HY6Vac8/PUg / 4UHl95 + 12cPqcAu8Fh + zjrS2v2XWZR47EdpLVjsXPrI9cPWcJKS2 / HkyR4XERnHWXeuDIue + FxMoS1l3riiaQSSlqdFNKfaMNGTd5x6s + 1LKXerPtuVTQrRnFSjsfu5El6C6Q83ifNv0aq1e9ZxfxXeQsbS7Sk3vWfyTcDV7Oqk9jy + CzBAhlEdAAAAACYHP09iPN4arNbVCSXbJWj72jMVrNJbzDkoq73FW6YxfncRUq + 03b8Kyj7kjUM6dNb9n / AB + opyudMrLJbjlm283tYhDAyeTPDYmdOWtCTi + K39vHvJBgelD9GtG69pbe + O / u8CNgaqtGFXvL13 / f5N1KvUpdx + m77fBP8POjVWtTmnxS3dsXmjGpSa2rvIHTm4vWi2mtjTs / FHcwPSarHKolNcdj / R / vMrauj5LOm7 + G / wCORZUdIxeVRW8d3yvc7oDwmLw9b0JWl7Lyfhv7jOpRa7OJAlFxdmrFjGSkrxd0cfTOg6eItJtxmlZSVnlwa3hofQdLD3avKbycnbZwS3I6gGvs462tbMkfqKvZ9lrPV4dZ + mzwGpvi / E3cFSnJ3byPPBYRyd3sO1CCSsj2aAhBJWRz9JaQ1epD0t74fUekcfq3hF573w + pxtrM2BjKSSbbslm29na2QLpR0idZulTdqS2vfP8A28jc6eY + rGosNsjqxk7bZX3PkrbCHltgsKklUl6ddWKfG4p3dKPr8eXMYgGWRWCABgGxgsW6cr7ntX73kkwmJs41YPNNSi + cXde9ESNzR + NdN2fovauHNBoH0RhaynTjUjslFSXZJX + Z7kf6D4tVMDTd76utG / JO8fc4kgOYqQ1JuPBnVUp68FLirgAgPB7GR3pvVSwjWzWlCPv1v7Tv3It5RJWw0Fxqr + mRuwyvWivE0Yp2oy8iAVKjb + RgIyOiObYAAAwAhiABWAAAA7mh9Pzg9Sq3KDyu85R + bXI4gjxUpxqR1ZI2U6kqctaLJ / OmmlODTi88s1biuR64LCOTu9hHuh0q8qnm4q9LbO + yN99 + L9 / vJ3CKSsihr0eynq3v1vOgw9btoKVrdbghBJWRz9IY / V6sXnvfDl2j0jj9XqRee98PqcbaakbrhmzYglDnL4fUIrU / F / T9TzMAhXlNpWxNOftQt + WUv9SIaWB5TKDaw81 / 3I7eKi18GQKpCUfS + Ny / wc4ujGN87bN + 17tpQ42lJVZT1Xq3Wdsti38fAwABkohDsrGIDAEAADBbPkdr3w9anf0ZqS / njb + wsIq / yLy62KXKi / 8A2FntnP41Wry9OSOkwTvQj682MDHWAikoyIn5RV / 9eH / lX9MiWEa6fU74Nv2ZxfjeP9xvwrtWj5mjFf8AjPyZWwxDOhOaEMBAAMAAAAEAB0dC6JqYipqxyivTnuivm + CFoXRNTEVNWOUV6c90V83wRZGBwVOjTVOmrJeLe9t72Q8VilSWrHvcuty9WTcJhHVetLu8 / wAcX6IMBgqdGmqcFaK8W97b3s1dJY / V6kdu98PqLSOP1epF9be + H1ONOaScm0ks23kkt7bKXNu7LzJKyGbMVqfi / p + pDY9NoxxKtG9BXjJ26zv6y4W4b1fumMtWUVUg1KEldNZrPeuRtq0Z07aytc10q1OpfVd7GJr47FwpU5VJuyj4vckubPc5 + ncC61CVOLtLJxvsbT2PtI8m1F22kmkoucVN2V1fyINpnS1TET1p5JZQgtiXzb3s5tb0H8 + 46dbQmJhCVSdKSjBXk3ktqWWfPccSc7v4cb8TOi8JUqVlWlkov1b4e + fhlvJ + nNI4ehhXhadm5KyS2JcXuvw33zfjgIAOqOBAAAGAABqwMlk + RddbFPlR + NQtCxXnkco2o16nGcY / ljf + 8sQ5 / Gu9eXpyR0eCVqEet7AAAikoDl9I8P5zCVo79RyXbDrL3xOmJpNW3GYycWpLceZRUk4vfkUmM2NI4V0q06XsNx7k8n4WNc6e6eaOVaadmIAOpoTRXnpOUsoR9K21 / dX6nic4wi5S2HunTlUkox2nKGTOpgMNLJ0Y / wAt4vxW01amgcO9jnHsakverkSOkKT2pr0 + CZLR1VbGn69L3Isb + hdFTxFTUjklnOW6K / V7kdKXRlt2hWTb2KUWverkw0Po2NCkqcc3tlL2pb32cBWx0FD / AJu75dbvEUMDNz / 6Ky81n9vfwPfAYOnRpqnTVkvFve297NXSWP1epF9be + HLtDSOP1epB573w5dpxZzSTk2klm29iS2tsp827sulZKyFUmknJuyWbbyS4tsgPSbpE67dKm7Uk9uxza3vlwX7R0m6Quu3Sptqku5za3vlwXjyjpcYTCav1zWe5cOvbz2U2MxmteENm98fxz8toSnoX0kdCfmajvRm9 / 8Aht + svuveu / jeLiJtSnGpHVlsINOpKnJSjtLrxFPVfLceZodFtI / aMHFt3nT6k + PVWT74270zfObnBwk4vcdNCanFSWxnlpenrYKvH7kn4RuvgU6XbTp61OcPai1 + ZNFJotNGP6ZLy97lVpRfVB + f9AIBlmVYgMowb2K5sRioJN7eHg + 7 / ngYbMpXNYByld3HSpuUlGKvKTSS4tuyR6MMuryYYTU0dB2s6kpz9 + qn4QRLTU0Xg1RoU6K2U4Rh + WKVzcOXqT15uXFnU0oakFHgrAArAeDYMQDAK88oOj9WrGullNWl2x / VW8CKFs9ItHefw86frelH8Udnjmu8qdrc8msmuHIu8DV16Wrvjl6bih0hS1Kutuln67 + vERnQrzhLWhJxa3p2 / wCTACaQdmwkeC6QxfVrRs / +ol / VH9PA7EbNa0WpReyUc19CCxWdjbw + KlRd6cmn7nykn2lfWwMHnDJ8N34LGhj5xynmvf8APWZYGiaG2b7F83++ZlpHH6vUg8974cu052D07GdGnCMo + dkutFZNPO9o7dzZ4KJVSg4tplvGSkk0eOKxMKcXOclGK2t / vNkC6SdIpV35uF40l4z5y5cv2u / 5QaCeHp1PZnKL / mjfP8pAC1wGHhqqq83ysVWkMRNS7JZLn + PAAACyKoDLKwhAySboDpTzOKVNvqVrQf4vUfjdfzFiVoWk14FLRbTusmthb + iNIfacLTr + tbVn + JZS + T7GVOkaVmqi35P + uvAuNG1rp03uzX9m / gnmym9J0tSvVh7M5R / LJr5Fw4R9buZVfS2lq46uvv635kpfM86Nf1yXh1zM6TX / ADi / HrkcczhBt2QUYXdvht2e896k4xTjHbxt + q23Rbt8CnS4mTcYbNtuT8fH3Lu1WzEZlKwbuIlvk00V5 / HQm11KH8SX4llBdutn / KRIu7ycaD + zYNOStUrWnLio26ke5Z9smRcbV7Ok + LyRKwNLtKq4LP4JaAAc + dEACzAAYAAAFddOtD + bq / aIrqVH1vuy3 / m29tyxTVx + EhVpypTV4yVn8mua2m / D1nSmpbt / kaMTQ7am4793mU2BuaW0bPD1XSnuzjLdKO6S / e002dBFqSuthzbi02ntAAGZMGOalGpF2nBqUJcGtz4p7GidUqyqQjVjkpq9uD9aPcyDHe6MYzN0G8pdaHKSWa718CDjqOvDXW1ct / 22 / cn6Prak9R7Hz / Oz7Ht0toa + Bq8Y6k13SSfubKuLjxVDzlGrT9ulUj2NxdveU6jGjZXhKPB8 / wDD1pONpxfFcv8ARDEwLErQAABgCY + TnSepWlhpPq1VeP4orZ3q / giHHrh68oTjOLtKLUovmndGutT7SDhxNtGq6VRT4dMuijBqduFyten2r9uqarTyhrW3PVSs + eSJfpjpZThhIVqdvOVo9SOT1WspN8ou65vvKwqTcpOTbbbu28229rbK / R9CSk5vLcWWka8XFU159dcOJiIALQqQADb0ZgKlerGjSjrTm7Jbubb3JbWw2krsJNuyO70A6Pfa8UnJfwaVpVOEn6tPvtnyTLyRyejmhaeEw8aEM7ZzlvnN7ZP5cEkdZnPYqv207rYtnXidJhKHY07b3t68BiBDIxJAAAAAEFwBiuJsaQBydPaGhiaWq8prOEuD58U96 / Qq7G4SpSm6dSOrKO1fBp71zLoOPp7QdPEwtLqzXozW1cnxjyJmFxfZfTLu8vxxRAxmEVX6o97n + eDKpGbWk9HVaFTzdSNnufqyXGL3moXaaauthRtNOz2gOE2mpJ2aaafBrYxAZMHS6R6YnWo + apdTWSdT7ztnBPcvj2bYC1bJksOfpPAa3Xj6W9cfqeKVONOOrFGyrVlVlrSZwhiA2moAGOEW3ZbQBDa3Gwkoq7zb2bP199jwnNt3ZhO5lqxi2IAPR5GIDb0bo + rXqKjSg5zlsS4b23uS4sw2krsyk27I8cPQnUnGnCLlKTSjFZtt7kXV0H6KRwdPWnaVea68tqitupF8OL3tckHQzofTwUdeVp15LrT3RT9WN93F7Xy2ErKTGYztPoh3eZeYPB9n9c + 9y / IDACAWICGAAAKwADMNoWMwBIYgAGAAAamPwNKtB06kVKPvT4p7mV / p3olWo3nTvVp8l1ornFbe1eCLLEb6GInR7uzgR6 + Fp1l9W3iUkmItTS / RrD4i8nHVm / XjZN9q2S7yH6S6G4mnnC1WP3cn3xfybLaljaU9rs / H5 / wp62Bq080rrw + P9I4BlVpSi9WcZRfCScX4MxJZD8Dl6VwF71IrP1lx5o4xLTk6Q0etbXisr9ZcOaMpixyoxv8AuxtOUYZLbyvt55 + 79M1OpGK1Y35vnv35 / I1TG3aZ2DbMRmVKnKTUYpyk9iSbb7Ej2eTACW6H8n + Or2coeZh7VTKXdTXWv22LB0B0CweGtNrz1RZ600tVP7tPYu + 75kSrjaVPfd8ES6WBq1N1l4 / G0rnoz0JxWLtNrzdF / wCJJZyX3I + t25LmW5oHQOHwdPzdKNr21pvOc3xlL5bEdYCor4qdbJ5Lh1tLnD4SnR2Zvj1sAYCIxJGAAAAAK4AwEAAwAAAAAAEMTFFADGAAAAAAeGIw8JrVnCMlwkk17zj4volgp / 4bi + MJNf5c17jviPcKk4d1teR4nThPvJPzRD6vQKl6tWS / Eoy + FjWl5P5bsQu + n / uJyhm5Yyuv3ey + DQ8Dh3 + 33fyVjU8lLcrrFJLh5q9v85tUPJVRXp4ib / DGMfjcsQDLxtd / u9l8GFgaC / b7v5IlgvJ5o6nZunOo1vnN / CNk / AkOC0dQorVpUoU19yMY / BZm4BonUnPvtskQpQh3UkIYmCPB7AYAAAAAACGYMAbY0gSGAAAAAAAAAAAAJBIAAGAAAAAAACQAADGAAAAAAAAAAogwAAYAAAAAACkKIAANjAAAAAAP / 9k =" alt="" />
            <h1 className="text-4xl ml-6 mt-2 text-white">Medications  </h1>
            {/* <input className="my-4 ml-10 w-80  rounded p-1" type="text" placeholder="search your medicine" /> */}

            <div className=" ml-96 mt-3">
                <NavLink to="/home">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Home</button>
                </NavLink>

                <NavLink to="/service">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Service</button>
                </NavLink>

                <NavLink to="/contact">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Contact</button>
                </NavLink>

                <NavHashLink to="/home#medicine">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Medicine</button>
                </NavHashLink>

                {/* < NavLink to="/register">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Register</button>
                </NavLink> */}

                <NavLink to="/login">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Login</button>
                </NavLink>
                <div className="flex mt-4 ml-4">
                    <img className="rounded-full w-10" src={user.photoURL} alt="" />
                    <p className="mt-2 ml-2">{user.displayName} </p>

                    {user?.email && <button className="mx-4 text-xl bg-black text-white rounded-lg p-1" onClick={logout}>log out</button>}
                </div>
            </div>
        </div >
    );
};

//export header components
export default Header;

