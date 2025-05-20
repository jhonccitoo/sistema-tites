import React, { useState } from 'react';

function Matricula() {
  const cardOriginalLeft = 100;
  const cardOriginalTop = 19;

  const [isMatricularButtonHovered, setIsMatricularButtonHovered] = useState(false);
  const matricularButtonBaseColor = '#0FBA1D';
  const matricularButtonHoverColor = '#0D9F1B';

  const commonTextStyle = {
    fontFamily: 'Montserrat',
    fontWeight: '600',
  };

  const inputStyle = {
    ...commonTextStyle,
    boxSizing: 'border-box',
    width: 315,
    height: 33,
    background: 'white',
    borderRadius: 4,
    border: '1px #7D7D7D solid',
    fontSize: 15,
    color: 'black',
    padding: '0 11px',
    textTransform: 'uppercase',
  };

  return (
    <div data-layer="Registro matrícula APROBADO" className="RegistroMatrCulaAprobado" style={{width: 1440, height: 900, position: 'relative', background: 'linear-gradient(90deg, #0FBA1D 0%, #29B5C3 100%)', overflow: 'hidden'}}>
      <div data-layer="Card" className="Card" style={{
          width: 1333,
          height: 863,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          background: 'white',
          boxShadow: '2px 5px 10px rgba(0, 0, 0, 0.10)',
          borderRadius: 20
        }}>

        <div data-layer="Link:" className="Link" style={{...commonTextStyle, left: 118 - cardOriginalLeft, top: 464 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 13, wordWrap: 'break-word'}}>Link: </div>
        <div data-layer="https://www.########.com" className="HttpsWwwCom" style={{...commonTextStyle, left: 155 - cardOriginalLeft, top: 464 - cardOriginalTop, position: 'absolute', color: '#7E7E7E', fontSize: 13, wordWrap: 'break-word'}}>https://www.########.com</div>

        <div data-layer="ADVERTENCIA: EL ALUMNO DEBE HABER APROBADO EL EXAMEN PARA PODER MATRICULARSE" className="AdvertenciaElAlumnoDebeHaberAprobadoElExamenParaPoderMatricularse" style={{...commonTextStyle, left: 118 - cardOriginalLeft, top: 542 - cardOriginalTop, position: 'absolute', color: 'rgba(255, 18.39, 18.39, 0.90)', fontSize: 20, wordWrap: 'break-word'}}>ADVERTENCIA: EL ALUMNO DEBE HABER APROBADO EL EXAMEN PARA PODER MATRICULARSE</div>

        <div data-layer="Fuera" className="Fuera" style={{width: 1281, height: 284, left: 118 - cardOriginalLeft, top: 167 - cardOriginalTop, position: 'absolute', background: 'white', borderRadius: 4, border: '1px #A9A9A9 solid'}} />

        <div data-layer="Nombre:" className="Nombre" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 132 - cardOriginalLeft, top: 182 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>Nombre:</div>
        <input
            type="text"
            aria-label="Nombre del alumno"
            pattern="[A-Za-zÀ-ÿ\s]+"
            title="Ingrese un nombre válido (solo letras y espacios)"
            required
            style={{
                ...inputStyle,
                position: 'absolute',
                left: 132 - cardOriginalLeft,
                top: 201 - cardOriginalTop,
            }}
        />

        <div data-layer="dni:" className="Dni" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 132 - cardOriginalLeft, top: 257 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>dni:</div>
        <input
            type="text"
            aria-label="DNI del alumno"
            pattern="\d{8}"
            title="Ingrese 8 dígitos numéricos para el DNI"
            required
            style={{
                ...inputStyle,
                position: 'absolute',
                left: 132 - cardOriginalLeft,
                top: 276 - cardOriginalTop,
            }}
        />

        <div data-layer="facultad:" className="Facultad" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 132 - cardOriginalLeft, top: 351 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>facultad:</div>
        <input
            type="text"
            aria-label="Facultad del alumno"
            pattern="[A-Za-zÀ-ÿ\s]+"
            title="Ingrese una facultad válida (solo letras y espacios)"
            required
            style={{
                ...inputStyle,
                position: 'absolute',
                left: 132 - cardOriginalLeft,
                top: 370 - cardOriginalTop,
            }}
        />

        <div data-layer="carrera:" className="Carrera" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 598 - cardOriginalLeft, top: 182 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>carrera:</div>
        <input
            type="text"
            aria-label="Carrera del alumno"
            pattern="[A-Za-zÀ-ÿ\s]+"
            title="Ingrese una carrera válida (solo letras y espacios)"
            required
            style={{
                ...inputStyle,
                position: 'absolute',
                left: 598 - cardOriginalLeft,
                top: 201 - cardOriginalTop,
            }}
        />

        <div data-layer="CELULAR:" className="Celular" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 598 - cardOriginalLeft, top: 257 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>CELULAR:</div>
        <input
            type="tel"
            aria-label="Celular del alumno"
            pattern="\d{9}"
            title="Ingrese 9 dígitos numéricos para el celular"
            required
            style={{
                ...inputStyle,
                position: 'absolute',
                left: 598 - cardOriginalLeft,
                top: 276 - cardOriginalTop,
            }}
        />

        <div data-layer="ESPECIALIDAD:" className="Especialidad" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 595 - cardOriginalLeft, top: 351 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>ESPECIALIDAD:</div>
        <input
            type="text"
            aria-label="Especialidad del alumno"
            pattern="[A-Za-zÀ-ÿ\s]*"
            title="Ingrese una especialidad (solo letras y espacios) o deje vacío"
            style={{
                ...inputStyle,
                position: 'absolute',
                left: 595 - cardOriginalLeft,
                top: 370 - cardOriginalTop,
            }}
        />

        <div data-layer="correo electrónico:" className="CorreoElectrNico" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 1064 - cardOriginalLeft, top: 182 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>correo electrónico:</div>
        <input
            type="email"
            aria-label="Correo electrónico del alumno"
            title="Ingrese un correo electrónico válido (e.g., usuario@dominio.com)"
            required
            style={{
                ...inputStyle,
                textTransform: 'none',
                position: 'absolute',
                left: 1064 - cardOriginalLeft,
                top: 201 - cardOriginalTop,
            }}
        />

        <div data-layer="ESTADO DE PAGO:" className="EstadoDePago" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 1064 - cardOriginalLeft, top: 257 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>ESTADO DE PAGO:</div>
        <input
            type="text"
            aria-label="Estado de pago"
            value="NO PAGÓ"
            readOnly
            style={{
                ...inputStyle,
                color: '#797979',
                position: 'absolute',
                left: 1064 - cardOriginalLeft,
                top: 276 - cardOriginalTop,
            }}
        />

        <div data-layer="estado de matricula:" className="EstadoDeMatricula" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 1064 - cardOriginalLeft, top: 351 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 15, textTransform: 'uppercase', wordWrap: 'break-word'}}>estado de matricula:</div>
        <input
            type="text"
            aria-label="Estado de matrícula"
            value="NO MATRICULADO"
            readOnly
            style={{
                ...inputStyle,
                color: '#797979',
                position: 'absolute',
                left: 1064 - cardOriginalLeft,
                top: 370 - cardOriginalTop,
            }}
        />

        <div data-layer="DATOS DEL ALUMNO:" className="DatosDelAlumno" style={{...commonTextStyle, width: 437.10, height: 37.21, left: 123 - cardOriginalLeft, top: 130 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 22, textTransform: 'uppercase', wordWrap: 'break-word'}}>DATOS DEL ALUMNO:</div>

        <div data-layer="MONTO POR MATRÍCULA" className="MontoPorMatrCula" style={{...commonTextStyle, width: 268, height: 23, left: 118 - cardOriginalLeft, top: 603 - cardOriginalTop, position: 'absolute', color: '#6C6C6C', fontSize: 20, wordWrap: 'break-word'}}>MONTO POR MATRÍCULA</div>
        <div data-layer="Rectangle 1 Monto BG" className="Rectangle1Monto" style={{width: 446, height: 52, left: 118 - cardOriginalLeft, top: 633 - cardOriginalTop, position: 'absolute', background: 'white', borderRadius: 4, border: '1px #E5E5E5 solid'}} />
        <div data-layer="S/. 7000" className="S7000" style={{...commonTextStyle, width: 'auto', height: 24, left: 127 - cardOriginalLeft, top: 647 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 24, wordWrap: 'break-word'}}>S/. 7000</div>

        <button
            data-layer="MATRICULAR_BUTTON"
            style={{
                position: 'absolute',
                left: 118 - cardOriginalLeft,
                top: 708 - cardOriginalTop,
                width: 164,
                height: 41,
                background: isMatricularButtonHovered ? matricularButtonHoverColor : matricularButtonBaseColor,
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseEnter={() => setIsMatricularButtonHovered(true)}
            onMouseLeave={() => setIsMatricularButtonHovered(false)}
        >
            <span data-layer="MATRICULAR_TEXT" style={{...commonTextStyle, color: 'white', fontSize: 20}}>MATRICULAR</span>
        </button>

        <div data-layer="ESTADO DE EXAMEN:" className="EstadoDeExamen" style={{...commonTextStyle, width: 'auto', height: 37.21, left: 118 - cardOriginalLeft, top: 492 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 22, textTransform: 'uppercase', wordWrap: 'break-word'}}>ESTADO DE EXAMEN:</div>
        <div data-layer="Rectangle 1 Aprobado BG" className="Rectangle1AprobadoBg" style={{width: 84, height: 30, left: 374 - cardOriginalLeft, top: 492 - cardOriginalTop, position: 'absolute', background: '#0FBA1D', borderRadius: 4}} />
        <div data-layer="Aprobado" className="Aprobado" style={{...commonTextStyle, width: 71, height: 21, left: 380 - cardOriginalLeft, top: 497 - cardOriginalTop, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, wordWrap: 'break-word'}}>Aprobado</div>

        <div data-layer="REGISTRO DE MATRÍCULA" className="RegistroDeMatrCula" style={{...commonTextStyle, width: 439, height: 54, left: 134 - cardOriginalLeft, top: 53 - cardOriginalTop, position: 'absolute', color: 'black', fontSize: 32, wordWrap: 'break-word'}}>REGISTRO DE MATRÍCULA</div>

        <img data-layer="logo urp" className="LogoUrp" style={{width: 304, height: 119, left: 1095 - cardOriginalLeft, top: 32 - cardOriginalTop, position: 'absolute', borderRadius: 76}} src="frontend/src/assets/logo-urp.png" alt="logo urp" />
      </div>
    </div>
  );
}

export default Matricula;