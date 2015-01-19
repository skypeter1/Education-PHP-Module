-- phpMyAdmin SQL Dump
-- version 3.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 01, 2012 at 10:23 AM
-- Server version: 5.1.30
-- PHP Version: 5.2.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `benedict`
--

-- --------------------------------------------------------

--
-- Table structure for table `acuemp`
--

CREATE TABLE IF NOT EXISTS `acuemp` (
  `rp02noemp` varchar(25) NOT NULL DEFAULT '',
  `rp02concepto` varchar(4) NOT NULL DEFAULT '',
  `rp02valor1` double(18,2) DEFAULT '0.00',
  `rp02valor2` double(18,2) DEFAULT '0.00',
  `rp02cuota` double(10,2) NOT NULL DEFAULT '0.00',
  `UID` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`rp02noemp`,`rp02concepto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `anulados`
--

CREATE TABLE IF NOT EXISTS `anulados` (
  `anio` varchar(4) NOT NULL DEFAULT '',
  `mes` char(2) NOT NULL DEFAULT '',
  `tipoComprobante` varchar(2) NOT NULL,
  `establecimiento` varchar(3) NOT NULL,
  `puntoEmision` varchar(3) NOT NULL,
  `secuencialInicio` varchar(9) NOT NULL,
  `secuencialFin` varchar(9) NOT NULL,
  `autorizacion` varchar(10) NOT NULL,
  UNIQUE KEY `tipoComprobante` (`tipoComprobante`,`establecimiento`,`puntoEmision`,`secuencialInicio`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ausemp`
--

CREATE TABLE IF NOT EXISTS `ausemp` (
  `rp07noemp` varchar(25) NOT NULL DEFAULT '',
  `rp07estado` char(1) DEFAULT NULL,
  `rp07fecini` date NOT NULL DEFAULT '0000-00-00',
  `rp07fecfin` date DEFAULT NULL,
  `rp07descuento` char(1) DEFAULT NULL,
  `rp07observacion` text,
  `UID` int(4) DEFAULT NULL,
  `rp07dias` int(11) NOT NULL DEFAULT '0',
  `rp07valor` double NOT NULL DEFAULT '0',
  `rp07sec` int(11) NOT NULL,
  `rp07numdoc` varchar(40) NOT NULL,
  `rp07numsolic` varchar(40) NOT NULL,
  PRIMARY KEY (`rp07noemp`,`rp07fecini`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `autorizaciones`
--

CREATE TABLE IF NOT EXISTS `autorizaciones` (
  `numauto` bigint(20) NOT NULL AUTO_INCREMENT,
  `tipoauto` varchar(4) DEFAULT NULL,
  `codcte` varchar(15) DEFAULT NULL,
  `codprod` varchar(50) DEFAULT NULL,
  `valmaxauto` double(18,2) DEFAULT '0.00',
  `usuaauto` bigint(5) unsigned DEFAULT '0',
  `fecvenc` date DEFAULT NULL,
  `fecauto` date DEFAULT NULL,
  `usuasoli` bigint(5) unsigned DEFAULT NULL,
  `estaauto` char(1) DEFAULT 'R',
  `observacion` varchar(255) DEFAULT NULL,
  `tipodoc` varchar(4) DEFAULT NULL,
  `numdoc` varchar(20) DEFAULT NULL,
  `ocudoc` varchar(4) DEFAULT NULL,
  `codaut` varchar(20) NOT NULL DEFAULT '',
  `fechavench` date NOT NULL DEFAULT '0000-00-00',
  `cateaut` varchar(50) NOT NULL DEFAULT '',
  `histaut` varchar(255) NOT NULL DEFAULT '',
  `cantidoc` double(16,2) NOT NULL DEFAULT '0.00',
  `tip` varchar(4) NOT NULL DEFAULT '',
  `cateautc` varchar(50) DEFAULT NULL,
  `valmaxautov` double(18,2) NOT NULL DEFAULT '0.00',
  `antIva` varchar(1) NOT NULL DEFAULT 'N',
  `costoact` double(18,2) NOT NULL,
  `costoaut` double(18,2) NOT NULL,
  PRIMARY KEY (`numauto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `autosri`
--

CREATE TABLE IF NOT EXISTS `autosri` (
  `astipodoc` varchar(4) NOT NULL DEFAULT '00',
  `asdesde` varchar(20) NOT NULL DEFAULT '0',
  `ashasta` varchar(20) NOT NULL DEFAULT '0',
  `asserie` varchar(20) NOT NULL DEFAULT '000-000-',
  `asautorizacion` varchar(20) NOT NULL DEFAULT '0',
  `asfeccaducidad` date DEFAULT '0000-00-00',
  `asfecregistro` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `asmodulo` varchar(4) NOT NULL DEFAULT '00',
  `ascodigo` varchar(20) NOT NULL DEFAULT '0',
  `asuid` int(4) unsigned DEFAULT '0',
  PRIMARY KEY (`astipodoc`,`asdesde`,`ashasta`,`asserie`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bcotcred`
--

CREATE TABLE IF NOT EXISTS `bcotcred` (
  `numdoc01` varchar(20) NOT NULL,
  `ocurren01` varchar(4) NOT NULL,
  `recap01` varchar(30) NOT NULL,
  `voucher01` varchar(6) NOT NULL,
  `lote01` varchar(6) NOT NULL,
  `fmov01` date NOT NULL,
  `fpagare01` date NOT NULL,
  `idestab01` varchar(10) NOT NULL,
  `nomestab01` varchar(200) NOT NULL,
  `consumo01` double(18,2) NOT NULL,
  `valiva01` double(18,2) NOT NULL,
  `impotros01` double(18,2) NOT NULL,
  `vpropina01` double(18,2) NOT NULL,
  `vtotal01` double(18,2) NOT NULL,
  `vcomision01` double(18,2) NOT NULL,
  `retiva01` double(18,2) NOT NULL,
  `retfuente01` double(18,2) NOT NULL,
  `valorcompensa01` double(18,2) DEFAULT '0.00',
  `codemisor01` varchar(4) DEFAULT NULL,
  `empemisor01` varchar(255) NOT NULL,
  `tipintercb01` varchar(255) NOT NULL,
  `observ01` varchar(255) DEFAULT NULL,
  `fpagocomercio01` date DEFAULT NULL,
  `facredita01` date DEFAULT NULL,
  `tipoconsumo01` varchar(20) DEFAULT NULL,
  `cuotas01` smallint(6) DEFAULT NULL,
  `fecha01` datetime NOT NULL,
  `conciliado01` tinyint(4) NOT NULL DEFAULT '0',
  `fconcilia01` datetime DEFAULT NULL,
  `idbodega` varchar(4) DEFAULT NULL,
  `codcte01` varchar(20) DEFAULT NULL,
  `numdocconc01` varchar(20) DEFAULT NULL,
  `tipodocconc01` varchar(4) DEFAULT NULL,
  `ocurrendocconc01` varchar(4) DEFAULT NULL,
  `uidconc01` varchar(4) DEFAULT NULL,
  `uidarch01` varchar(4) NOT NULL,
  `status01` varchar(4) NOT NULL DEFAULT '02',
  PRIMARY KEY (`numdoc01`,`ocurren01`,`recap01`,`voucher01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='liquidacion automatica tarjetas de credito';

-- --------------------------------------------------------

--
-- Table structure for table `callcenter`
--

CREATE TABLE IF NOT EXISTS `callcenter` (
  `cliente` varchar(20) DEFAULT '0',
  `fecha` datetime DEFAULT NULL,
  `observacion` text,
  `codvend` varchar(4) DEFAULT NULL,
  `codest` varchar(4) DEFAULT NULL,
  `numero` int(10) NOT NULL AUTO_INCREMENT,
  `telefono` varchar(20) DEFAULT '0',
  `nomcli` varchar(255) DEFAULT NULL,
  `idt` int(10) unsigned DEFAULT NULL,
  `tipo` char(3) DEFAULT NULL,
  `tipocte` char(1) DEFAULT 'C',
  `noproforma` varchar(20) DEFAULT NULL,
  `tipovehiculo` varchar(4) DEFAULT NULL,
  `valorproducto` double(18,2) DEFAULT '0.00',
  `entradaproducto` double(18,2) DEFAULT '0.00',
  `productousado` char(1) DEFAULT 'N',
  PRIMARY KEY (`numero`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `callcoord`
--

CREATE TABLE IF NOT EXISTS `callcoord` (
  `codcoord` varchar(15) DEFAULT '0',
  `codvend` varchar(10) DEFAULT '0',
  `fechcord` datetime DEFAULT NULL,
  `observacion` text,
  `codcli` varchar(15) DEFAULT '0',
  `estado` varchar(10) DEFAULT '0',
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nomcli` varchar(255) DEFAULT NULL,
  `tipocte` char(1) DEFAULT 'C',
  `prioridad` char(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
  `tipocate` varchar(4) NOT NULL DEFAULT '',
  `codcate` varchar(50) NOT NULL DEFAULT '',
  `codcatep` varchar(50) DEFAULT '0',
  `desccate` varchar(255) DEFAULT NULL,
  `comentario` varchar(132) DEFAULT NULL,
  `alias` varchar(35) DEFAULT NULL,
  `orden` int(2) unsigned DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `desc2cate` text NOT NULL,
  `factorprecio` double(6,2) NOT NULL DEFAULT '0.00',
  `ad01cat` varchar(4) NOT NULL DEFAULT '',
  `ad02cat` varchar(4) NOT NULL DEFAULT '',
  `ad03cat` text,
  `ad04cat` text,
  `ad05cat` varchar(4) NOT NULL DEFAULT '',
  `ad06cat` varchar(4) NOT NULL DEFAULT '',
  `ad07cat` varchar(4) NOT NULL DEFAULT '',
  `ad08cat` varchar(4) NOT NULL DEFAULT '',
  `ad09cat` varchar(4) NOT NULL DEFAULT '',
  `ad10cat` varchar(4) NOT NULL DEFAULT '',
  `ad11cat` varchar(4) NOT NULL DEFAULT '',
  `ad12cat` varchar(4) NOT NULL DEFAULT '',
  `ad13cat` varchar(4) NOT NULL DEFAULT '',
  `hijos` char(1) NOT NULL DEFAULT 'N',
  `gasto` char(1) NOT NULL DEFAULT 'N',
  `cta1cate` varchar(15) DEFAULT NULL,
  `cta2cate` varchar(15) DEFAULT NULL,
  `cta3cate` varchar(15) DEFAULT NULL,
  `cta4cate` varchar(15) DEFAULT NULL,
  `consecutivo` varchar(4) NOT NULL DEFAULT '',
  `porcdist` float(6,2) DEFAULT '0.00',
  `porcdist1` float(6,2) DEFAULT '0.00',
  PRIMARY KEY (`codcate`,`tipocate`),
  KEY `codigo` (`codcate`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `central`
--

CREATE TABLE IF NOT EXISTS `central` (
  `fecha` date DEFAULT '0000-00-00',
  `hora` time DEFAULT '00:00:00',
  `linea` varchar(4) DEFAULT '0',
  `ext` int(4) unsigned DEFAULT '0',
  `wcos` varchar(10) DEFAULT '0',
  `ring` time DEFAULT '00:00:00',
  `duracion` time DEFAULT '00:00:00',
  `numero` int(15) unsigned DEFAULT '0',
  `tipo` int(4) unsigned DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cierres`
--

CREATE TABLE IF NOT EXISTS `cierres` (
  `codcierre` varchar(21) NOT NULL DEFAULT '',
  `tipocierre` varchar(1) NOT NULL DEFAULT '',
  `codtipopago` varchar(4) NOT NULL DEFAULT '',
  `detipopago` varchar(50) NOT NULL DEFAULT '',
  `cantidad` int(11) NOT NULL DEFAULT '0',
  `valor_sistema` double(18,2) NOT NULL DEFAULT '0.00',
  `valor_caja` double(18,2) NOT NULL DEFAULT '0.00',
  `valor_diferencia` double(18,2) NOT NULL DEFAULT '0.00',
  `fecha` datetime DEFAULT NULL,
  `UID` int(4) DEFAULT NULL,
  `IDB` varchar(5) NOT NULL DEFAULT '',
  `cierre` varchar(1) NOT NULL DEFAULT 'N',
  `codciepadre` varchar(21) NOT NULL DEFAULT '',
  KEY `cierre` (`cierre`),
  KEY `tipocierre` (`tipocierre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comisionestmp`
--

CREATE TABLE IF NOT EXISTS `comisionestmp` (
  `codvendedor` varchar(4) NOT NULL,
  `tipovendedor` varchar(4) NOT NULL,
  `nofact` varchar(20) DEFAULT NULL,
  `codcte` varchar(20) NOT NULL,
  `nomcte` varchar(255) DEFAULT NULL,
  `vneto` double(18,2) NOT NULL,
  `comision` varchar(255) NOT NULL,
  `idcomision` varchar(255) NOT NULL,
  `comigreg` double(18,2) NOT NULL DEFAULT '0.00',
  `fechpagofac` datetime NOT NULL,
  `fdesde` datetime NOT NULL,
  `fhasta` datetime NOT NULL,
  `codasesor` varchar(4) DEFAULT NULL,
  `idcurso` varchar(4) DEFAULT NULL,
  `factcurso` text NOT NULL,
  `fecliquida` datetime NOT NULL,
  `contab` int(1) NOT NULL DEFAULT '0',
  `tipodocdb` varchar(4) NOT NULL,
  `numdocdb` varchar(20) NOT NULL,
  `UID` int(11) NOT NULL,
  KEY `codvendedor` (`codvendedor`,`nofact`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='resumen de comisiones';

-- --------------------------------------------------------

--
-- Table structure for table `compras`
--

CREATE TABLE IF NOT EXISTS `compras` (
  `anio` varchar(4) NOT NULL DEFAULT '',
  `mes` char(2) NOT NULL DEFAULT '',
  `codSustento` char(2) NOT NULL DEFAULT '',
  `tpIdProv` char(2) NOT NULL DEFAULT '',
  `idProv` varchar(13) NOT NULL DEFAULT '',
  `tipoComprobante` char(2) NOT NULL DEFAULT '',
  `fechaRegistro` varchar(10) NOT NULL DEFAULT '0000-00-00',
  `establecimiento` char(3) NOT NULL DEFAULT '',
  `puntoEmision` char(3) NOT NULL DEFAULT '',
  `secuencial` varchar(7) NOT NULL DEFAULT '',
  `fechaEmision` varchar(10) NOT NULL DEFAULT '0000-00-00',
  `autorizacion` varchar(10) NOT NULL DEFAULT '',
  `baseNoGraIva` double(9,2) NOT NULL DEFAULT '0.00',
  `baseImponible` double(9,2) NOT NULL DEFAULT '0.00',
  `baseImpGrav` double(9,2) NOT NULL DEFAULT '0.00',
  `montoIce` double(9,2) NOT NULL DEFAULT '0.00',
  `montoIva` double(9,2) NOT NULL DEFAULT '0.00',
  `valorRetBienes` double(9,2) NOT NULL DEFAULT '0.00',
  `valorRetServicios` double(9,2) NOT NULL DEFAULT '0.00',
  `valRetServ100` double(9,2) NOT NULL DEFAULT '0.00',
  `codRetAir` varchar(5) NOT NULL DEFAULT '',
  `baseImpAir` double(9,2) NOT NULL DEFAULT '0.00',
  `porcentajeAir` int(1) NOT NULL DEFAULT '0',
  `valRetAir` double(9,2) NOT NULL DEFAULT '0.00',
  `estabRetencion1` char(3) NOT NULL DEFAULT '',
  `ptoEmiRetencion1` char(3) NOT NULL DEFAULT '',
  `secRetencion1` varchar(7) NOT NULL DEFAULT '',
  `autRetencion1` varchar(10) NOT NULL DEFAULT '',
  `fechaEmiRet1` varchar(10) NOT NULL DEFAULT '0000-00-00',
  `docModificado` char(2) NOT NULL DEFAULT '',
  `estabModificado` char(3) NOT NULL DEFAULT '',
  `ptoEmiModificado` char(3) NOT NULL DEFAULT '',
  `secModificado` varchar(7) NOT NULL DEFAULT '',
  `autModificado` varchar(10) NOT NULL DEFAULT '',
  KEY `anio` (`anio`,`mes`,`idProv`,`establecimiento`,`puntoEmision`,`secuencial`,`codRetAir`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `deposito_banco`
--

CREATE TABLE IF NOT EXISTS `deposito_banco` (
  `tipo_pago` varchar(4) NOT NULL DEFAULT '',
  `valor` double(18,2) NOT NULL DEFAULT '0.00',
  `banco` varchar(4) NOT NULL DEFAULT '',
  `fecha` datetime NOT NULL,
  `num_deposito` varchar(50) NOT NULL DEFAULT '',
  `pers_deposita` varchar(100) NOT NULL DEFAULT '',
  `UID` int(4) NOT NULL,
  `IDB` varchar(5) NOT NULL DEFAULT '',
  `cierre_bodega` varchar(21) NOT NULL DEFAULT '',
  `num_doc_cont` varchar(20) NOT NULL DEFAULT '',
  `tip_doc_cont` varchar(4) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detalleflujo`
--

CREATE TABLE IF NOT EXISTS `detalleflujo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idgrupo` int(11) NOT NULL,
  `cuentacont` varchar(20) NOT NULL,
  `nombrecont` varchar(100) NOT NULL,
  `operacion` varchar(2) NOT NULL DEFAULT '+',
  `mostrarse` tinyint(1) NOT NULL DEFAULT '0',
  `orden` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `estrform`
--

CREATE TABLE IF NOT EXISTS `estrform` (
  `codform01` varchar(10) NOT NULL DEFAULT '',
  `nomform01` varchar(250) DEFAULT NULL,
  `linform01` int(3) unsigned NOT NULL DEFAULT '0',
  `colform01` int(3) unsigned NOT NULL DEFAULT '0',
  `lonform01` int(3) unsigned DEFAULT NULL,
  `tipoubic01` char(1) DEFAULT 'C',
  `alincamp01` char(1) DEFAULT 'I',
  `codempr01` int(3) unsigned DEFAULT NULL,
  `tipodato01` char(1) DEFAULT 'T',
  PRIMARY KEY (`codform01`,`linform01`,`colform01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grupoflujo`
--

CREATE TABLE IF NOT EXISTS `grupoflujo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etiqueta` varchar(100) NOT NULL,
  `operacion` varchar(2) NOT NULL DEFAULT '+',
  `orden` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `hisacf`
--

CREATE TABLE IF NOT EXISTS `hisacf` (
  `codacf03` varchar(50) NOT NULL,
  `anoacf03` varchar(4) NOT NULL DEFAULT '',
  `mesacf03` char(2) NOT NULL DEFAULT '',
  `contaacf03` varchar(255) NOT NULL DEFAULT '',
  `depnor01acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor02acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor03acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor04acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor05acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor06acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor07acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor08acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor09acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor10acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor11acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `depnor12acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev01acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev02acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev03acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev04acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev05acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev06acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev07acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev08acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev09acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev10acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev11acf03` double(18,2) NOT NULL DEFAULT '0.00',
  `deprev12acf03` double(18,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`codacf03`,`anoacf03`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hisgen`
--

CREATE TABLE IF NOT EXISTS `hisgen` (
  `rpid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rpcodreg01` varchar(50) NOT NULL,
  `rptable_schema` varchar(64) NOT NULL,
  `rptable_name` varchar(64) NOT NULL,
  `rpcolumn_name` varchar(64) NOT NULL,
  `rpvalorant` varchar(499) DEFAULT NULL,
  `rpvalornuevo` varchar(499) DEFAULT NULL,
  `rpfechamod` date NOT NULL,
  `rphoramod` time NOT NULL,
  `rpuidmod` int(4) NOT NULL,
  PRIMARY KEY (`rpid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 PACK_KEYS=0 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `hismetdepacf`
--

CREATE TABLE IF NOT EXISTS `hismetdepacf` (
  `codacf04` varchar(50) NOT NULL DEFAULT '',
  `metdepniffacf04` varchar(4) NOT NULL DEFAULT '',
  `grupperacf04` smallint(1) NOT NULL DEFAULT '0',
  `porcmetacf04` double(6,2) NOT NULL DEFAULT '0.00',
  `numdepacf04` smallint(1) NOT NULL DEFAULT '0',
  `fechregmetacf04` date NOT NULL DEFAULT '0000-00-00',
  `UID` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`codacf04`,`metdepniffacf04`,`fechregmetacf04`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hisser`
--

CREATE TABLE IF NOT EXISTS `hisser` (
  `serie05` varchar(50) NOT NULL DEFAULT '',
  `fecmov05` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `tipotra05` char(4) NOT NULL DEFAULT '',
  `nocomp05` varchar(20) NOT NULL DEFAULT '',
  `ocurren05` varchar(6) NOT NULL DEFAULT '',
  `tiptran05` char(4) DEFAULT NULL,
  `numcom05` varchar(20) DEFAULT NULL,
  `ocurrec05` varchar(6) DEFAULT NULL,
  `coddest05` varchar(4) DEFAULT NULL,
  `codprod05` varchar(50) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  PRIMARY KEY (`serie05`,`fecmov05`,`tipotra05`,`nocomp05`,`ocurren05`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hissertmp`
--

CREATE TABLE IF NOT EXISTS `hissertmp` (
  `serie05` varchar(20) NOT NULL DEFAULT '',
  `fecmov05` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `tipotra05` char(2) NOT NULL DEFAULT '',
  `nocomp05` varchar(20) NOT NULL DEFAULT '',
  `ocurren05` varchar(4) NOT NULL DEFAULT '',
  `tiptran05` char(2) DEFAULT NULL,
  `numcom05` varchar(20) DEFAULT NULL,
  `ocurrec05` varchar(4) DEFAULT NULL,
  `coddest05` varchar(4) DEFAULT NULL,
  `codprod05` varchar(50) DEFAULT NULL,
  `UID` int(4) NOT NULL DEFAULT '0',
  `bodega05` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`serie05`,`fecmov05`,`tipotra05`,`nocomp05`,`ocurren05`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `histemp`
--

CREATE TABLE IF NOT EXISTS `histemp` (
  `rp08cedulaemp` varchar(13) NOT NULL DEFAULT '',
  `rp08campo` varchar(255) NOT NULL DEFAULT '',
  `rp08valorant` varchar(255) DEFAULT NULL,
  `rp08alornuevo` varchar(255) DEFAULT NULL,
  `rp08fechamodificacion` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `rp08usuariomodificacion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rp08cedulaemp`,`rp08campo`,`rp08fechamodificacion`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hisvacemp`
--

CREATE TABLE IF NOT EXISTS `hisvacemp` (
  `rp10id` int(11) NOT NULL AUTO_INCREMENT,
  `rp10sec` int(11) NOT NULL,
  `rp10noemp` varchar(25) NOT NULL,
  `rp10periodo` varchar(10) NOT NULL,
  `rp10dias` int(2) NOT NULL,
  `rp10valor` double(18,2) NOT NULL,
  `rp10fechad` date NOT NULL,
  `rp10fechah` date NOT NULL,
  `rp10tipo` varchar(2) NOT NULL DEFAULT '',
  PRIMARY KEY (`rp10id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `informante_id`
--

CREATE TABLE IF NOT EXISTS `informante_id` (
  `numeroRuc` varchar(13) DEFAULT NULL,
  `razonSocial` varchar(60) DEFAULT NULL,
  `direccionMatriz` varchar(60) DEFAULT NULL,
  `telefono` varchar(9) DEFAULT NULL,
  `fax` varchar(9) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `tpIdRepre` char(1) DEFAULT NULL,
  `idRepre` varchar(13) DEFAULT NULL,
  `rucContador` varchar(13) DEFAULT NULL,
  `anio` varchar(4) NOT NULL DEFAULT '',
  `mes` char(2) NOT NULL DEFAULT '',
  PRIMARY KEY (`anio`,`mes`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `liqimdoc32`
--

CREATE TABLE IF NOT EXISTS `liqimdoc32` (
  `codigoimp32` varchar(20) NOT NULL,
  `tipotra32` varchar(4) NOT NULL,
  `ocurren32` varchar(6) NOT NULL,
  `numdoc32` varchar(20) NOT NULL,
  `modulo32` varchar(4) NOT NULL,
  `codigoctapro32` varchar(50) NOT NULL,
  `valordoc32` double(18,2) NOT NULL,
  `codcate32` varchar(50) NOT NULL,
  `cantpro32` double(13,2) NOT NULL,
  `fob32` double(18,6) DEFAULT NULL,
  `vprorrat32` double(18,6) DEFAULT '0.000000',
  `tipoprorr32` varchar(4) NOT NULL,
  `tipogasto32` varchar(4) NOT NULL,
  `uid32` varchar(4) NOT NULL,
  KEY `codigoimp32` (`codigoimp32`,`tipotra32`,`numdoc32`,`codigoctapro32`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='documentos usados en la liq. de importacion';

-- --------------------------------------------------------

--
-- Table structure for table `liqimp31`
--

CREATE TABLE IF NOT EXISTS `liqimp31` (
  `tipodoc31` varchar(20) DEFAULT NULL,
  `nopedido31` varchar(20) DEFAULT NULL,
  `codcte31` varchar(20) DEFAULT NULL,
  `nomcte31` varchar(255) DEFAULT NULL,
  `bodega31` varchar(4) DEFAULT NULL,
  `codprod31` varchar(50) DEFAULT NULL,
  `ocurren31` varchar(4) DEFAULT NULL,
  `status31` varchar(4) DEFAULT NULL,
  `catprod31` varchar(50) DEFAULT NULL,
  `cantped31` double(14,2) DEFAULT NULL,
  `fob31` double(18,6) DEFAULT NULL,
  `cif31` double(18,6) DEFAULT NULL,
  `fecpreliq31` datetime DEFAULT NULL,
  `hisuid` text,
  `obsgen31` varchar(255) DEFAULT NULL,
  `precuni31` double(14,2) NOT NULL DEFAULT '0.00',
  `UID` int(4) DEFAULT NULL,
  `pesoneto31` double(14,4) NOT NULL DEFAULT '0.0000',
  `factorpeso31` varchar(4) DEFAULT NULL,
  KEY `index_productos` (`tipodoc31`,`nopedido31`,`codprod31`,`ocurren31`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `liqrol`
--

CREATE TABLE IF NOT EXISTS `liqrol` (
  `rp05noemp` varchar(25) NOT NULL,
  `rp05conc1` varchar(4) NOT NULL DEFAULT '',
  `rp05valor1` double(18,2) DEFAULT NULL,
  `rp05tiempo1` double(5,2) DEFAULT NULL,
  `rp05valor2` double(18,2) DEFAULT NULL,
  `rp05tiempo2` double(5,2) DEFAULT NULL,
  `rp05fechaliq` date NOT NULL DEFAULT '0000-00-00',
  `rpcvliqrol` char(1) DEFAULT NULL,
  `rp05status` char(1) NOT NULL DEFAULT 'P',
  `conta05` int(1) NOT NULL DEFAULT '0',
  `UID` int(4) NOT NULL DEFAULT '0',
  `rp05observ` varchar(60) NOT NULL,
  PRIMARY KEY (`rp05noemp`,`rp05conc1`,`rp05fechaliq`,`rp05status`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lismae`
--

CREATE TABLE IF NOT EXISTS `lismae` (
  `codprod20t` varchar(50) NOT NULL,
  `codprod20` varchar(50) NOT NULL,
  `codprod20a` varchar(50) DEFAULT NULL,
  `desprod20` varchar(40) DEFAULT NULL,
  `cve120` char(1) DEFAULT NULL,
  `cve220` char(1) DEFAULT NULL,
  `unidmed20` varchar(20) DEFAULT NULL,
  `cantidad20` double(18,6) DEFAULT '0.000000',
  `cantfalta20` double(18,2) DEFAULT '0.00',
  `costo20` double(18,2) DEFAULT '0.00',
  `fecha20` datetime DEFAULT '2006-01-01 00:00:00',
  `tipo20` varchar(4) NOT NULL DEFAULT '',
  `bodega20` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`codprod20t`,`codprod20`,`tipo20`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lismaehis`
--

CREATE TABLE IF NOT EXISTS `lismaehis` (
  `numord20` varchar(20) NOT NULL,
  `codprod20t` varchar(50) NOT NULL,
  `codprod20` varchar(50) NOT NULL,
  `ocurren20` varchar(4) NOT NULL DEFAULT '',
  `ocucomp20` varchar(4) NOT NULL DEFAULT '',
  `codprod20a` varchar(50) DEFAULT NULL,
  `desprod20` varchar(40) DEFAULT NULL,
  `cve120` char(1) DEFAULT NULL,
  `cve220` char(1) DEFAULT NULL,
  `unidmed20` varchar(20) DEFAULT NULL,
  `cantidad20` double(18,6) DEFAULT '0.000000',
  `cantfalta20` double(18,2) DEFAULT '0.00',
  `costo20` double(18,2) DEFAULT '0.00',
  `fecmod20` datetime NOT NULL DEFAULT '2006-01-01 00:00:00',
  `fecha20` datetime DEFAULT '2006-01-01 00:00:00',
  `tipo20` varchar(4) NOT NULL DEFAULT '',
  `bodega20` varchar(4) DEFAULT NULL,
  `circunferencia20` int(4) DEFAULT '0',
  `estado20` varchar(4) DEFAULT NULL,
  `nreproceso20` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`numord20`,`codprod20t`,`codprod20`,`ocurren20`,`ocucomp20`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeacf`
--

CREATE TABLE IF NOT EXISTS `maeacf` (
  `codacf01` varchar(50) NOT NULL,
  `nomacf01` varchar(40) DEFAULT NULL,
  `cv1acf01` char(2) DEFAULT NULL,
  `cv2acf01` char(2) DEFAULT NULL,
  `cantacf01` double(18,2) DEFAULT NULL,
  `moduloacf01` varchar(5) DEFAULT NULL,
  `marcaacf01` varchar(4) DEFAULT NULL,
  `modeloacf01` varchar(15) DEFAULT NULL,
  `tipoacf01` varchar(30) DEFAULT NULL,
  `coloracf01` varchar(4) DEFAULT NULL,
  `serieacf01` varchar(30) DEFAULT NULL,
  `provacf01` varchar(4) DEFAULT NULL,
  `paisacf01` varchar(4) DEFAULT NULL,
  `obsacf01` varchar(30) DEFAULT NULL,
  `nofactacf01` varchar(20) DEFAULT NULL,
  `fecadqacf01` date DEFAULT NULL,
  `valadqacf01` double(18,2) NOT NULL DEFAULT '0.00',
  `valadepacf01` double(18,2) NOT NULL DEFAULT '0.00',
  `vidautilacf01` double(18,2) NOT NULL DEFAULT '0.00',
  `cuotadepnoracf01` double(18,2) NOT NULL DEFAULT '0.00',
  `acudepnoracf01` double(18,2) NOT NULL DEFAULT '0.00',
  `valactualacf01` double(18,2) NOT NULL DEFAULT '0.00',
  `cuotadeprevacf01` double(18,2) NOT NULL DEFAULT '0.00',
  `acudeprevacf01` double(18,2) NOT NULL DEFAULT '0.00',
  `realdepnoracf01` double(18,2) NOT NULL DEFAULT '0.00',
  `realdeprevacf01` double(18,2) NOT NULL DEFAULT '0.00',
  `cateacf01` varchar(15) NOT NULL DEFAULT '',
  `ctaacf01` varchar(15) NOT NULL DEFAULT '',
  `ctadepacf01` varchar(15) NOT NULL DEFAULT '',
  `fotoacf01` varchar(255) DEFAULT NULL,
  `estadoacf01` varchar(4) NOT NULL DEFAULT '',
  `UID` int(4) DEFAULT NULL,
  `block` int(1) DEFAULT NULL,
  `ultimoacceso` int(14) unsigned DEFAULT NULL,
  `grupoacf01` varchar(4) NOT NULL,
  `codbaracf01` varchar(50) NOT NULL,
  `codrelacf01` varchar(50) NOT NULL,
  `ubicacf01` varchar(255) NOT NULL,
  `respacf01` varchar(255) NOT NULL,
  `ctaactfijoaf01` varchar(15) NOT NULL,
  `valactniffaf01` double(18,2) NOT NULL DEFAULT '0.00',
  `comrelaf01` double(18,2) NOT NULL,
  `valadiaf01` double(18,2) NOT NULL,
  `valbienaf01` double(18,2) NOT NULL,
  `revalaf01` double(18,2) NOT NULL,
  `devalaf01` double(18,2) NOT NULL,
  `deteraf01` double(18,2) NOT NULL,
  `icomrelaf01` char(1) NOT NULL,
  `ivaladiaf01` char(1) NOT NULL,
  `irevalaf01` char(1) NOT NULL,
  `idevalaf01` char(1) NOT NULL,
  `ideteraf01` char(1) NOT NULL,
  `valadepniffaf01` double(18,2) NOT NULL,
  `vidautilniffaf01` int(6) NOT NULL,
  `metdepniffaf01` varchar(4) NOT NULL,
  `cuotadepniffaf01` double(18,2) NOT NULL,
  `ctadepaf01` varchar(15) NOT NULL,
  `ctagastodepaf01` varchar(15) NOT NULL,
  `ctarevaf01` varchar(15) NOT NULL,
  `ctadevaf01` varchar(15) NOT NULL,
  `ctadeteaf01` varchar(15) NOT NULL,
  `descvalaf01` varchar(255) NOT NULL,
  PRIMARY KEY (`codacf01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maealum`
--

CREATE TABLE IF NOT EXISTS `maealum` (
  `cedula_alumno` varchar(10) NOT NULL,
  `apellidos_alumno` varchar(20) NOT NULL,
  `nombres_alumno` varchar(20) NOT NULL,
  `direccion_alumno` varchar(50) DEFAULT NULL,
  `telefono_alumno` varchar(10) DEFAULT NULL,
  `movil_alumno` varchar(10) DEFAULT NULL,
  `cedula_cliente` varchar(10) NOT NULL,
  `apodo_alumno` varchar(20) DEFAULT NULL,
  `email_alumno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cedula_alumno`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maebco`
--

CREATE TABLE IF NOT EXISTS `maebco` (
  `numbanco20` varchar(4) NOT NULL DEFAULT '',
  `nombco20` varchar(50) DEFAULT NULL,
  `ctamaecon20` varchar(15) DEFAULT NULL,
  `ctabanco20` varchar(15) DEFAULT NULL,
  `numcheque20` varchar(7) DEFAULT NULL,
  `feccolncilia20` datetime DEFAULT '0000-00-00 00:00:00',
  `valorconcilia20` decimal(18,2) DEFAULT NULL,
  `block` tinyint(1) unsigned DEFAULT '0',
  `ultimoacceso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `uid` int(4) unsigned DEFAULT NULL,
  PRIMARY KEY (`numbanco20`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maecco`
--

CREATE TABLE IF NOT EXISTS `maecco` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `mcod` int(18) NOT NULL DEFAULT '0',
  `mcodmodulo` varchar(5) NOT NULL DEFAULT '',
  `mcodgru` varchar(5) NOT NULL DEFAULT '',
  `mcodtipo` varchar(5) NOT NULL DEFAULT '',
  `mlin` int(4) NOT NULL DEFAULT '0',
  `mcodext` varchar(5) NOT NULL DEFAULT '',
  `mcodplan` int(18) NOT NULL DEFAULT '0',
  `mcodigo` varchar(50) NOT NULL DEFAULT '',
  `mcodvar` varchar(50) NOT NULL DEFAULT '',
  `mcodcta` varchar(50) NOT NULL DEFAULT '',
  `mcc01` varchar(5) NOT NULL DEFAULT '',
  `mcc02` varchar(5) NOT NULL DEFAULT '',
  `mcc03` varchar(5) NOT NULL DEFAULT '',
  `mcc04` varchar(5) NOT NULL DEFAULT '',
  `mcc05` varchar(5) NOT NULL DEFAULT '',
  `mpord` double(18,2) NOT NULL DEFAULT '0.00',
  `UID` varchar(4) NOT NULL DEFAULT '',
  `mfechareg` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=61 ;

-- --------------------------------------------------------

--
-- Table structure for table `maeccotmp`
--

CREATE TABLE IF NOT EXISTS `maeccotmp` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `mcod` int(18) NOT NULL DEFAULT '0',
  `mcodmodulo` varchar(5) NOT NULL DEFAULT '',
  `mcodgru` varchar(5) NOT NULL DEFAULT '',
  `mcodtipo` varchar(5) NOT NULL DEFAULT '',
  `mlin` int(4) NOT NULL DEFAULT '0',
  `mcodext` varchar(5) NOT NULL DEFAULT '',
  `mcodplan` int(18) NOT NULL DEFAULT '0',
  `mcodigo` varchar(50) NOT NULL DEFAULT '',
  `mcodvar` varchar(50) NOT NULL DEFAULT '',
  `mcodcta` varchar(50) NOT NULL DEFAULT '',
  `mcc01` varchar(5) NOT NULL DEFAULT '',
  `mcc02` varchar(5) NOT NULL DEFAULT '',
  `mcc03` varchar(5) NOT NULL DEFAULT '',
  `mcc04` varchar(5) NOT NULL DEFAULT '',
  `mcc05` varchar(5) NOT NULL DEFAULT '',
  `mpord` double(18,2) NOT NULL DEFAULT '0.00',
  `UID` varchar(4) NOT NULL DEFAULT '',
  `mfechareg` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `concepto07` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=151 ;

-- --------------------------------------------------------

--
-- Table structure for table `maecom`
--

CREATE TABLE IF NOT EXISTS `maecom` (
  `tipodocto31` char(2) NOT NULL DEFAULT '0',
  `nofact31` varchar(20) NOT NULL DEFAULT '0',
  `nocte31` varchar(15) NOT NULL DEFAULT '0',
  `nomcte31` varchar(45) DEFAULT '0',
  `localid31` varchar(4) DEFAULT '0',
  `cvectenegro31` char(1) DEFAULT '0',
  `vtabta31` double(18,2) DEFAULT '0.00',
  `descto31` double(18,2) DEFAULT '0.00',
  `flete31` double(18,2) DEFAULT '0.00',
  `itm31` double(5,2) DEFAULT '0.00',
  `novend31` varchar(4) DEFAULT '0',
  `fecfact31` datetime DEFAULT '0000-00-00 00:00:00',
  `condpag31` int(1) unsigned DEFAULT '0',
  `nopagos31` int(1) unsigned DEFAULT '0',
  `formapago31` int(1) unsigned DEFAULT '0',
  `obra31` varchar(30) DEFAULT '0',
  `orden31` varchar(30) DEFAULT '0',
  `cvnegra31` int(1) unsigned DEFAULT '0',
  `status31` int(1) unsigned DEFAULT '1',
  `cvimpto31` int(1) unsigned DEFAULT '0',
  `cvanulado31` int(1) unsigned DEFAULT '1',
  `efectivo31` double(18,2) DEFAULT '0.00',
  `cheque31` double(18,2) DEFAULT '0.00',
  `tarjeta31` double(18,2) DEFAULT '0.00',
  `acuenta31` double(18,2) DEFAULT '0.00',
  `nobanco31` char(3) DEFAULT '0',
  `nombanco31` varchar(40) DEFAULT '0',
  `nocheque31` varchar(10) DEFAULT '0',
  `notarjeta31` varchar(20) DEFAULT '0',
  `nomtarjeta31` varchar(40) DEFAULT '0',
  `cvdivisa31` char(1) DEFAULT '0',
  `valdivisa31` varchar(6) DEFAULT '0',
  `lineaprod31` varchar(255) DEFAULT NULL,
  `intereses31` double(18,2) DEFAULT '0.00',
  `nopedido31` varchar(20) DEFAULT '0',
  `fecped31` datetime DEFAULT '0000-00-00 00:00:00',
  `ruc31` varchar(15) DEFAULT '0',
  `tel31` varchar(11) DEFAULT '0',
  `transpor31` varchar(4) DEFAULT NULL,
  `cvtransfer31` char(1) DEFAULT 'N',
  `fectrasfer31` date DEFAULT NULL,
  `desctofp31` double(18,2) DEFAULT NULL,
  `catcte31` varchar(50) DEFAULT '998',
  `UID` int(4) DEFAULT NULL,
  `recargos31` double(18,2) DEFAULT NULL,
  `ice31` double(18,2) DEFAULT '0.00',
  `fecdocpr31` datetime DEFAULT NULL,
  `tipocomp31` varchar(4) DEFAULT NULL,
  `conta31` int(1) DEFAULT '0',
  `fecvencidocpr` datetime DEFAULT NULL,
  `totsiniva31` double(18,2) NOT NULL DEFAULT '0.00',
  `fecemb` date DEFAULT NULL,
  `norefrendo` varchar(50) DEFAULT NULL,
  `baseice` double(18,2) DEFAULT NULL,
  `ncodret43` varchar(4) NOT NULL DEFAULT '',
  `nbaseret43` double(18,2) NOT NULL DEFAULT '0.00',
  `npctjeret43` double(18,2) DEFAULT '0.00',
  PRIMARY KEY (`tipodocto31`,`nofact31`),
  KEY `nocte01` (`nocte31`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maecon`
--

CREATE TABLE IF NOT EXISTS `maecon` (
  `ctamaecon` varchar(15) NOT NULL DEFAULT '',
  `nomcta` varchar(40) DEFAULT NULL,
  `cv1` char(1) DEFAULT NULL,
  `cv2` char(1) DEFAULT NULL,
  `cv3` char(1) DEFAULT NULL,
  `sdoejeant` double(18,2) DEFAULT '0.00',
  `sdomesant` double(18,2) DEFAULT '0.00',
  `sdoactual` double(18,2) DEFAULT '0.00',
  `acdbeje` double(18,2) DEFAULT '0.00',
  `accreje` double(18,2) DEFAULT '0.00',
  `acdbmes` double(18,2) DEFAULT '0.00',
  `accrmes` double(18,2) DEFAULT '0.00',
  `natcta` char(1) DEFAULT NULL,
  `catctamaecon` varchar(20) DEFAULT NULL,
  `centrocos` varchar(4) DEFAULT '00',
  `UID` int(4) unsigned DEFAULT '0',
  `fechamod` datetime DEFAULT NULL,
  `block` char(1) NOT NULL DEFAULT '',
  `ultimoacceso` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`ctamaecon`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maecontr30`
--

CREATE TABLE IF NOT EXISTS `maecontr30` (
  `nopedido30` varchar(20) NOT NULL DEFAULT '',
  `codprod30` varchar(50) NOT NULL,
  `ocurren30` varchar(4) NOT NULL DEFAULT '',
  `codcte30` varchar(20) DEFAULT NULL,
  `nopedido30a` varchar(20) DEFAULT NULL,
  `codprod30b` varchar(50) DEFAULT NULL,
  `nopedido30b` varchar(7) DEFAULT '',
  `cvectenegro30` char(1) DEFAULT '',
  `fecpedido30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `referencia30` varchar(15) DEFAULT '',
  `nomcte30` varchar(40) DEFAULT '',
  `novend30` varchar(4) DEFAULT '',
  `localid30` varchar(4) DEFAULT '',
  `condpag30` varchar(4) DEFAULT '',
  `nopagos30` varchar(4) DEFAULT '',
  `descto30` double(18,2) DEFAULT '0.00',
  `iva30` double(18,2) DEFAULT '0.00',
  `flete30` double(18,2) DEFAULT '0.00',
  `status30` varchar(4) DEFAULT '',
  `telcte30` varchar(10) DEFAULT NULL,
  `dircte30` varchar(40) DEFAULT '',
  `cantped30` double(14,2) DEFAULT '0.00',
  `precuni30` double(14,2) DEFAULT '0.00',
  `cantfac30` double(14,2) DEFAULT '0.00',
  `cantafac30` double(14,2) DEFAULT '0.00',
  `desctoxprod30` double(18,2) DEFAULT '0.00',
  `medid130` double(7,2) DEFAULT '0.00',
  `medid230` double(7,2) DEFAULT '0.00',
  `medid330` double(7,2) DEFAULT '0.00',
  `uid` int(4) unsigned DEFAULT NULL,
  `fleteini30` double(18,2) DEFAULT '0.00',
  `medid430` double(7,2) DEFAULT '0.00',
  `medid530` double(7,2) DEFAULT '0.00',
  `observ30` varchar(255) DEFAULT NULL,
  `desctofp30` double(18,2) DEFAULT '0.00',
  `UIDap` int(1) unsigned DEFAULT NULL,
  `fecestado30` datetime DEFAULT NULL,
  `fecdespacho30` datetime DEFAULT NULL,
  `nomprod30` varchar(255) DEFAULT NULL,
  `recargos30` double(18,2) DEFAULT '0.00',
  `ice30` double(18,2) DEFAULT '0.00',
  `hisuid` varchar(255) DEFAULT NULL,
  `obsgen30` varchar(255) DEFAULT NULL,
  `formapag30` varchar(4) NOT NULL DEFAULT '',
  `emailcte30` varchar(255) DEFAULT NULL,
  `durctr30` varchar(4) NOT NULL DEFAULT '',
  `tipfact` int(4) NOT NULL DEFAULT '0',
  `numfact` int(4) NOT NULL DEFAULT '0',
  `piva30` double(6,2) DEFAULT NULL,
  PRIMARY KEY (`nopedido30`,`ocurren30`,`codprod30`),
  KEY `codprod30` (`codprod30`),
  KEY `codcte30` (`codcte30`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maecte`
--

CREATE TABLE IF NOT EXISTS `maecte` (
  `codcte01` varchar(20) NOT NULL DEFAULT '0',
  `nomcte01` varchar(255) DEFAULT '0',
  `cv1cte01` char(1) DEFAULT '6',
  `cv2cte01` char(1) DEFAULT '1',
  `tipcte01` varchar(20) DEFAULT '0',
  `ofienccte01` varchar(4) DEFAULT '0',
  `vendcte01` varchar(4) DEFAULT '0',
  `cobrcte01` varchar(4) DEFAULT '0',
  `loccte01` varchar(4) DEFAULT '0',
  `dircte01` varchar(255) DEFAULT '0',
  `telcte01` varchar(11) DEFAULT '0',
  `cascte01` varchar(15) DEFAULT '0',
  `repleg01` varchar(255) DEFAULT NULL,
  `fecing01` datetime DEFAULT NULL,
  `condpag01` varchar(4) DEFAULT '0',
  `desctocte01` double(6,2) DEFAULT '0.00',
  `limcred01` double(18,2) DEFAULT '0.00',
  `desppar01` char(1) DEFAULT 'S',
  `cheqpro01` int(2) DEFAULT '0',
  `sdoeje01` double(18,2) DEFAULT '0.00',
  `sdoant01` double(18,2) DEFAULT '0.00',
  `sdoact01` double(18,2) DEFAULT '0.00',
  `acudbm01` double(18,2) DEFAULT '0.00',
  `acucrm01` double(18,2) DEFAULT '0.00',
  `acudbe01` double(18,2) DEFAULT '0.00',
  `acucre01` double(18,2) DEFAULT '0.00',
  `comentcte01` char(2) DEFAULT '0',
  `statuscte01` int(1) unsigned DEFAULT '0',
  `identcte01` varchar(15) DEFAULT '0',
  `cordcte01` varchar(4) DEFAULT '0',
  `limcant01` int(1) unsigned DEFAULT '0',
  `pagleg01` varchar(255) DEFAULT '0',
  `telcte01b` varchar(11) DEFAULT '0',
  `telcte01c` varchar(11) DEFAULT '0',
  `emailcte01` varchar(255) NOT NULL DEFAULT '',
  `emailaltcte01` varchar(255) DEFAULT NULL,
  `ctacgcte01` varchar(15) DEFAULT '0',
  `obsercte01` text,
  `totexceso01` double(18,2) DEFAULT '0.00',
  `imagencte01` varchar(100) DEFAULT NULL,
  `block` tinyint(1) unsigned DEFAULT NULL,
  `UID` int(3) unsigned DEFAULT NULL,
  `ultimoacceso` bigint(14) DEFAULT NULL,
  `idcli` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `catcte01` varchar(20) DEFAULT NULL,
  `transferido` char(1) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `showroom` char(1) NOT NULL DEFAULT 'N',
  `orden` int(4) unsigned NOT NULL DEFAULT '0',
  `website` varchar(255) DEFAULT NULL,
  `longitud01` varchar(50) DEFAULT NULL,
  `latitud01` varchar(50) DEFAULT NULL,
  `zoom01` int(2) unsigned DEFAULT NULL,
  `acceder` char(2) NOT NULL DEFAULT 'S',
  `coniva01` char(1) NOT NULL DEFAULT 'S',
  `idemp01` int(3) NOT NULL DEFAULT '0',
  `codprov01` varchar(15) NOT NULL DEFAULT '',
  `celular01` varchar(11) DEFAULT NULL,
  `dircliente01` varchar(255) NOT NULL,
  `razcte01` varchar(50) NOT NULL DEFAULT '',
  `ruc01` varchar(15) NOT NULL DEFAULT '',
  `timenegocio01` varchar(10) NOT NULL DEFAULT '',
  `refbanc01` text NOT NULL,
  `refcom01` text NOT NULL,
  `tarjcred01` text NOT NULL,
  `firmaut01` varchar(100) DEFAULT NULL,
  `precte01` int(1) NOT NULL DEFAULT '1',
  `cuotasven01` int(4) NOT NULL DEFAULT '0',
  `diasven01` int(4) NOT NULL DEFAULT '0',
  `fechanace01` date DEFAULT NULL,
  `sexo01` int(1) DEFAULT NULL,
  `estadocivil01` varchar(4) DEFAULT NULL,
  `dirgestion01` text,
  `numhijos01` int(2) unsigned NOT NULL DEFAULT '0',
  `estsop01` varchar(4) DEFAULT NULL,
  `notick01` varchar(10) DEFAULT NULL,
  `chequece` varchar(1) DEFAULT NULL,
  `solcre` varchar(1) DEFAULT NULL,
  `promocte01` varchar(20) NOT NULL,
  `pagare01` varchar(1) NOT NULL DEFAULT 'N',
  `valorpagare01` double(18,2) NOT NULL,
  `garante01` varchar(1) NOT NULL DEFAULT 'N',
  `fecvenp01` date NOT NULL,
  `ctacgant01` varchar(15) DEFAULT '0',
  PRIMARY KEY (`idcli`),
  UNIQUE KEY `codcte01` (`codcte01`),
  KEY `nomcte` (`nomcte01`),
  KEY `cedula` (`cascte01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `maectead`
--

CREATE TABLE IF NOT EXISTS `maectead` (
  `codcte02` varchar(20) NOT NULL DEFAULT '',
  `tipovivienda02` varchar(4) NOT NULL DEFAULT '',
  `diapago02` char(2) NOT NULL DEFAULT '',
  `emplabora02` varchar(200) NOT NULL DEFAULT '',
  `ocupacion02` varchar(4) NOT NULL DEFAULT '',
  `actempresa02` varchar(4) NOT NULL DEFAULT '',
  `envioestado02` varchar(4) NOT NULL DEFAULT '',
  `sueldo02` float(12,2) NOT NULL DEFAULT '0.00',
  `ref1nom02` varchar(200) NOT NULL DEFAULT '',
  `ref1parent02` varchar(4) NOT NULL DEFAULT '',
  `ref1fono02` varchar(10) NOT NULL DEFAULT '',
  `ref2nom02` varchar(200) NOT NULL DEFAULT '',
  `ref2parent02` varchar(4) NOT NULL DEFAULT '',
  `ref2fono02` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`codcte02`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maectetmp`
--

CREATE TABLE IF NOT EXISTS `maectetmp` (
  `codcte01` varchar(15) NOT NULL DEFAULT '0',
  `nomcte01` varchar(255) DEFAULT '0',
  `cv1cte01` char(1) DEFAULT '6',
  `cv2cte01` char(1) DEFAULT '1',
  `tipcte01` varchar(20) DEFAULT '0',
  `ofienccte01` varchar(4) DEFAULT '0',
  `vendcte01` varchar(4) DEFAULT '0',
  `cobrcte01` varchar(4) DEFAULT '0',
  `loccte01` varchar(4) DEFAULT '0',
  `dircte01` varchar(255) DEFAULT '0',
  `telcte01` varchar(11) DEFAULT '0',
  `cascte01` varchar(15) DEFAULT '0',
  `repleg01` varchar(255) DEFAULT NULL,
  `fecing01` datetime DEFAULT NULL,
  `condpag01` varchar(4) DEFAULT '0',
  `desctocte01` double(6,2) DEFAULT '0.00',
  `limcred01` double(18,2) DEFAULT '0.00',
  `desppar01` char(1) DEFAULT 'S',
  `cheqpro01` int(2) DEFAULT '0',
  `sdoeje01` double(18,2) DEFAULT '0.00',
  `sdoant01` double(18,2) DEFAULT '0.00',
  `sdoact01` double(18,2) DEFAULT '0.00',
  `acudbm01` double(18,2) DEFAULT '0.00',
  `acucrm01` double(18,2) DEFAULT '0.00',
  `acudbe01` double(18,2) DEFAULT '0.00',
  `acucre01` double(18,2) DEFAULT '0.00',
  `comentcte01` char(2) DEFAULT '0',
  `statuscte01` int(1) unsigned DEFAULT '0',
  `identcte01` varchar(15) DEFAULT '0',
  `cordcte01` varchar(4) DEFAULT '0',
  `limcant01` int(1) unsigned DEFAULT '0',
  `pagleg01` varchar(255) DEFAULT '0',
  `telcte01b` varchar(11) DEFAULT '0',
  `telcte01c` varchar(11) DEFAULT '0',
  `emailcte01` varchar(255) NOT NULL DEFAULT '',
  `ctacgcte01` varchar(15) DEFAULT '0',
  `obsercte01` text,
  `totexceso01` double(18,2) DEFAULT '0.00',
  `imagencte01` varchar(100) DEFAULT NULL,
  `block` tinyint(1) unsigned DEFAULT NULL,
  `UID` int(3) unsigned DEFAULT NULL,
  `ultimoacceso` bigint(14) DEFAULT NULL,
  `idcli` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `catcte01` varchar(20) DEFAULT NULL,
  `transferido` char(1) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `showroom` char(1) NOT NULL DEFAULT 'N',
  `orden` int(4) unsigned NOT NULL DEFAULT '0',
  `website` varchar(255) DEFAULT NULL,
  `longitud01` varchar(50) DEFAULT NULL,
  `latitud01` varchar(50) DEFAULT NULL,
  `zoom01` int(2) unsigned DEFAULT NULL,
  `acceder` char(2) NOT NULL DEFAULT 'S',
  `coniva01` char(1) NOT NULL DEFAULT 'S',
  `idemp01` int(3) NOT NULL DEFAULT '0',
  `codprov01` varchar(15) NOT NULL DEFAULT '',
  `celular01` varchar(11) DEFAULT NULL,
  `dircliente01` varchar(50) NOT NULL DEFAULT '',
  `razcte01` varchar(50) NOT NULL DEFAULT '',
  `ruc01` varchar(15) NOT NULL DEFAULT '',
  `timenegocio01` varchar(10) NOT NULL DEFAULT '',
  `refbanc01` text NOT NULL,
  `refcom01` text NOT NULL,
  `tarjcred01` text NOT NULL,
  `firmaut01` varchar(100) DEFAULT NULL,
  `precte01` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idcli`),
  UNIQUE KEY `codcte01` (`codcte01`),
  KEY `nomcte` (`nomcte01`),
  KEY `cedula` (`cascte01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `maeemp`
--

CREATE TABLE IF NOT EXISTS `maeemp` (
  `rp01noemp` varchar(25) NOT NULL DEFAULT '',
  `rp01division` varchar(4) DEFAULT NULL,
  `rp01depto` varchar(4) DEFAULT NULL,
  `rp01seccion` varchar(4) DEFAULT NULL,
  `rp01noemp1` varchar(25) DEFAULT NULL,
  `rp01nombreemp` varchar(40) DEFAULT NULL,
  `rp01categoria` varchar(4) DEFAULT NULL,
  `rp01turno` varchar(4) DEFAULT NULL,
  `rp01statusemp` varchar(5) DEFAULT NULL,
  `rp01fechastatus` date DEFAULT NULL,
  `rp01causaretiro` varchar(4) DEFAULT NULL,
  `rp01direccion` varchar(30) DEFAULT NULL,
  `rp01telefono` varchar(9) DEFAULT NULL,
  `rp01lugarnacimiento` varchar(4) DEFAULT NULL,
  `rp01fechanacimiento` date DEFAULT NULL,
  `rp01nacionalidad` varchar(4) DEFAULT NULL,
  `rp01cedula` varchar(10) DEFAULT NULL,
  `rp01noiess` varchar(13) DEFAULT NULL,
  `rp01sexo` int(1) DEFAULT NULL,
  `rp01nolibreta` varchar(10) DEFAULT NULL,
  `rp01profesion` varchar(4) DEFAULT NULL,
  `rp01fechaingreso` date DEFAULT NULL,
  `rp01fechareingreso` date DEFAULT NULL,
  `rp01cargo` varchar(4) DEFAULT NULL,
  `rp01estadocivil` varchar(4) DEFAULT NULL,
  `rp01rebajaxcasado` varchar(4) DEFAULT NULL,
  `rp01nombreconyuge` varchar(25) DEFAULT NULL,
  `rp01nombrepadre` varchar(25) DEFAULT NULL,
  `rp01nombremadre` varchar(25) DEFAULT NULL,
  `rp01nohijos` int(2) DEFAULT NULL,
  `rp01fechahijos0` date DEFAULT NULL,
  `rp01sexohijos0` int(1) DEFAULT NULL,
  `rp01fechahijos1` date DEFAULT NULL,
  `rp01sexohijos1` int(1) DEFAULT NULL,
  `rp01fechahijos2` date DEFAULT NULL,
  `rp01sexohijos2` int(1) DEFAULT NULL,
  `rp01fechahijos3` date DEFAULT NULL,
  `rp01sexohijos3` int(1) DEFAULT NULL,
  `rp01fechahijos4` date DEFAULT NULL,
  `rp01sexohijos4` int(1) DEFAULT NULL,
  `rp01fechahijos5` date DEFAULT NULL,
  `rp01sexohijos5` int(1) DEFAULT NULL,
  `rp01fechahijos6` date DEFAULT NULL,
  `rp01sexohijos6` int(1) DEFAULT NULL,
  `rp01fechahijos7` date DEFAULT NULL,
  `rp01sexohijos7` int(1) DEFAULT NULL,
  `rp01fechahijos8` date DEFAULT NULL,
  `rp01sexohijos8` int(1) DEFAULT NULL,
  `rp01fechahijos9` date DEFAULT NULL,
  `rp01sexohijos9` int(1) DEFAULT NULL,
  `rp01cargaspadres` char(1) DEFAULT NULL,
  `rp01otrascargas` varchar(4) DEFAULT NULL,
  `rp01formapago` varchar(4) DEFAULT NULL,
  `rp01nobancoemp` varchar(4) DEFAULT NULL,
  `rp01ctabancoemp` varchar(15) DEFAULT NULL,
  `rp01tipoctabco` char(2) NOT NULL DEFAULT '',
  `rp01fechaultvacacion` date DEFAULT NULL,
  `rp01aporte` char(1) DEFAULT NULL,
  `rp01socio` char(1) DEFAULT NULL,
  `rp01transporte` char(1) DEFAULT NULL,
  `rp01recibeporc` char(1) DEFAULT NULL,
  `rp01sueldoanterior` double(18,2) DEFAULT NULL,
  `rp01sueldosalario` double(18,2) DEFAULT '0.00',
  `rp01fecmodsdosal` date DEFAULT NULL,
  `rp01fecmodficha` date DEFAULT NULL,
  `rp01faltasinjust` double(7,2) DEFAULT '0.00',
  `rp01ingresos1er` double(18,2) DEFAULT '0.00',
  `rp01basesocialvalor` double(18,2) DEFAULT '0.00',
  `rp01basesocialtiempo` double(7,2) DEFAULT '0.00',
  `rp0114vopagoacum` double(18,2) DEFAULT '0.00',
  `rp0115vopagoacum` double(18,2) DEFAULT '0.00',
  `rp01cverrorliq` char(1) DEFAULT NULL,
  `rp01porcentliq` double(4,2) DEFAULT NULL,
  `rp01tiposangre` varchar(5) DEFAULT NULL,
  `rp01ingresos2do` double(18,2) DEFAULT '0.00',
  `rp01provdiremp` varchar(4) DEFAULT NULL,
  `rp01cantondiremp` varchar(4) DEFAULT NULL,
  `rp01ciudaddiremp` varchar(4) DEFAULT NULL,
  `rp01codocupacion` varchar(30) DEFAULT NULL,
  `UID` int(4) DEFAULT NULL,
  `block` int(1) DEFAULT NULL,
  `ultimoacceso` int(14) unsigned DEFAULT NULL,
  `rp01foto` varchar(255) NOT NULL DEFAULT '',
  `rp01ctacontable` varchar(15) NOT NULL DEFAULT '',
  `rp01email` varchar(255) NOT NULL DEFAULT '',
  `rp01passwd` varchar(32) NOT NULL DEFAULT '',
  `rp01huella` varchar(255) NOT NULL DEFAULT '',
  `rp01recibefr` varchar(1) NOT NULL DEFAULT 'S',
  `rp01UID` int(4) DEFAULT NULL,
  `rp01fechaUID` datetime DEFAULT NULL,
  `rp01obs` text NOT NULL,
  `rp01cauliq` varchar(30) NOT NULL,
  `rp01discapacidad` char(1) NOT NULL DEFAULT 'N',
  `rp01conadis` varchar(10) NOT NULL,
  `rp01tpdiscapacidad` varchar(4) NOT NULL,
  `rp01prdiscapacidad` int(3) NOT NULL,
  `rp01freserva` varchar(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`rp01noemp`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maefac`
--

CREATE TABLE IF NOT EXISTS `maefac` (
  `tipodocto31` char(2) NOT NULL DEFAULT '0',
  `nofact31` varchar(20) NOT NULL DEFAULT '0',
  `nocte31` varchar(20) DEFAULT '0',
  `nomcte31` varchar(255) DEFAULT '0',
  `localid31` varchar(4) DEFAULT '0',
  `cvectenegro31` char(1) DEFAULT '0',
  `vtabta31` double(18,2) DEFAULT '0.00',
  `descto31` double(18,2) DEFAULT '0.00',
  `flete31` double(18,2) DEFAULT '0.00',
  `itm31` double(5,2) DEFAULT '0.00',
  `novend31` varchar(4) DEFAULT '0',
  `fecfact31` datetime DEFAULT '0000-00-00 00:00:00',
  `condpag31` int(1) unsigned DEFAULT '0',
  `nopagos31` int(1) unsigned DEFAULT '0',
  `formapago31` int(1) unsigned DEFAULT '0',
  `obra31` varchar(30) DEFAULT '0',
  `orden31` varchar(30) DEFAULT '0',
  `cvnegra31` int(1) unsigned DEFAULT '0',
  `status31` int(1) unsigned DEFAULT '1',
  `cvimpto31` int(1) unsigned DEFAULT '0',
  `cvanulado31` int(1) unsigned DEFAULT '1',
  `efectivo31` double(18,2) DEFAULT '0.00',
  `cheque31` double(18,2) DEFAULT '0.00',
  `tarjeta31` double(18,2) DEFAULT '0.00',
  `fecentrega31` datetime DEFAULT NULL,
  `nobanco31` varchar(4) DEFAULT '0',
  `nombanco31` varchar(40) DEFAULT '0',
  `nocheque31` varchar(10) DEFAULT '0',
  `notarjeta31` varchar(20) DEFAULT '0',
  `nomtarjeta31` varchar(40) DEFAULT '0',
  `cvdivisa31` char(1) DEFAULT '0',
  `valdivisa31` varchar(6) DEFAULT '0',
  `lineaprod31` varchar(255) DEFAULT '0',
  `intereses31` double(18,2) DEFAULT '0.00',
  `nopedido31` varchar(20) DEFAULT '0',
  `fecped31` datetime DEFAULT '0000-00-00 00:00:00',
  `ruc31` varchar(15) DEFAULT '0',
  `tel31` varchar(11) DEFAULT '0',
  `transpor31` varchar(4) DEFAULT NULL,
  `cvtransfer31` char(1) DEFAULT 'N',
  `fectransfer31` date DEFAULT NULL,
  `desctofp31` double(18,2) DEFAULT NULL,
  `catcte31` varchar(50) DEFAULT '998',
  `UID` int(4) unsigned DEFAULT '0',
  `recargos31` double(18,2) DEFAULT '0.00',
  `ice31` double(18,2) DEFAULT '0.00',
  `campo131` varchar(255) DEFAULT NULL,
  `campo231` varchar(255) DEFAULT NULL,
  `conta31` int(1) DEFAULT '0',
  `totsiniva31` double(16,2) NOT NULL DEFAULT '0.00',
  `fectranpor31` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `numtranspor31` varchar(25) NOT NULL DEFAULT '',
  `fecemb` date DEFAULT NULL,
  `norefrendo` varchar(50) DEFAULT NULL,
  `nodoctransp` varchar(20) DEFAULT NULL,
  `ayudante31` varchar(4) NOT NULL DEFAULT '',
  `coddest31` varchar(4) DEFAULT NULL,
  `cobrador31` varchar(4) NOT NULL DEFAULT '',
  `coordinador31` varchar(4) NOT NULL DEFAULT '',
  `pais31` varchar(5) NOT NULL,
  `vtransport31` varchar(5) NOT NULL,
  `pembarque31` varchar(5) NOT NULL,
  `pdestino31` varchar(5) NOT NULL,
  `embalaje31` varchar(255) NOT NULL,
  `nbultos31` varchar(255) NOT NULL,
  `pneto31` varchar(255) NOT NULL,
  `pbruto31` varchar(255) NOT NULL,
  `tneg31` varchar(5) NOT NULL,
  `tneg311` varchar(5) NOT NULL,
  `embarcadoa31` varchar(255) NOT NULL,
  `noFUE` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`tipodocto31`,`nofact31`),
  KEY `nocte01` (`nocte31`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maefactmp`
--

CREATE TABLE IF NOT EXISTS `maefactmp` (
  `tipodocto31` char(2) NOT NULL DEFAULT '0',
  `nofact31` varchar(20) NOT NULL DEFAULT '0',
  `ocurren31` varchar(4) NOT NULL DEFAULT '',
  `nocte31` varchar(15) NOT NULL DEFAULT '0',
  `ruc31` varchar(15) NOT NULL DEFAULT '0',
  `tipcte01` char(1) DEFAULT 'P',
  `nomcte31` varchar(45) DEFAULT '0',
  `vtabta31` double(18,2) DEFAULT '0.00',
  `descto31` double(18,2) DEFAULT '0.00',
  `desctofp31` double(18,2) DEFAULT NULL,
  `itm31` double(5,2) DEFAULT '0.00',
  `flete31` double(18,2) DEFAULT '0.00',
  `recargos31` double(18,2) DEFAULT '0.00',
  `ice31` double(18,2) DEFAULT '0.00',
  `tiporetencion31` char(2) DEFAULT NULL,
  `retencion31` double(18,2) DEFAULT '0.00',
  `codretencion31` varchar(4) NOT NULL DEFAULT '',
  `totsiniva31` double(18,2) NOT NULL DEFAULT '0.00',
  `orden31` smallint(1) NOT NULL DEFAULT '0',
  `IDB` varchar(4) NOT NULL,
  `norefrendo` varchar(25) DEFAULT NULL,
  `nodoctransp` varchar(25) DEFAULT NULL,
  `fecemb` varchar(10) DEFAULT NULL,
  `fecfact31` varchar(10) DEFAULT NULL,
  `noFUE` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`ruc31`,`tipodocto31`,`nofact31`,`ocurren31`,`codretencion31`),
  KEY `nocte01` (`nocte31`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maegarantia`
--

CREATE TABLE IF NOT EXISTS `maegarantia` (
  `nopedido` varchar(20) NOT NULL DEFAULT '',
  `estatus` varchar(4) DEFAULT NULL,
  `historial` text,
  `fecregistro` datetime DEFAULT NULL,
  `fecmodificacion` datetime NOT NULL,
  PRIMARY KEY (`nopedido`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maegarantiadet`
--

CREATE TABLE IF NOT EXISTS `maegarantiadet` (
  `nopedido` varchar(20) NOT NULL DEFAULT '',
  `item` int(11) NOT NULL,
  `indicador` varchar(250) NOT NULL,
  `cmpint` int(11) NOT NULL DEFAULT '0',
  `cmpint2` int(11) NOT NULL DEFAULT '0',
  `cmpdouble` double NOT NULL DEFAULT '0',
  `cmpdouble2` double NOT NULL DEFAULT '0',
  `cmpvchar` varchar(250) NOT NULL DEFAULT '',
  `cmpvchar2` varchar(250) NOT NULL DEFAULT '',
  `cmptxt` text NOT NULL,
  `cmptxt2` text NOT NULL,
  PRIMARY KEY (`nopedido`,`item`,`indicador`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeint`
--

CREATE TABLE IF NOT EXISTS `maeint` (
  `notabla07` int(2) NOT NULL DEFAULT '0',
  `tipotra07` varchar(4) NOT NULL DEFAULT '',
  `ocurtra07` int(4) NOT NULL DEFAULT '0',
  `ocu2tra07` int(4) NOT NULL DEFAULT '0',
  `tipodoccg07` varchar(4) NOT NULL DEFAULT '',
  `modulo07` varchar(4) NOT NULL DEFAULT '',
  `codcta07` varchar(15) DEFAULT NULL,
  `db1cr2tra07` int(1) DEFAULT NULL,
  `valorcta07` double(18,2) DEFAULT '0.00',
  `detalle07` varchar(40) DEFAULT NULL,
  `cvaux07` char(1) DEFAULT NULL,
  `campo07` varchar(255) DEFAULT NULL,
  `UID` int(3) unsigned NOT NULL DEFAULT '0',
  `concepto07` varchar(4) NOT NULL DEFAULT '',
  PRIMARY KEY (`notabla07`,`tipotra07`,`ocurtra07`,`ocu2tra07`,`tipodoccg07`,`modulo07`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeinttmp`
--

CREATE TABLE IF NOT EXISTS `maeinttmp` (
  `notabla07` int(2) NOT NULL DEFAULT '0',
  `tipotra07` varchar(4) NOT NULL DEFAULT '',
  `ocurtra07` int(4) NOT NULL DEFAULT '0',
  `ocu2tra07` int(4) NOT NULL DEFAULT '0',
  `tipodoccg07` varchar(4) NOT NULL DEFAULT '',
  `modulo07` varchar(4) NOT NULL DEFAULT '',
  `codcta07` varchar(15) DEFAULT NULL,
  `db1cr2tra07` int(1) DEFAULT NULL,
  `valorcta07` double(18,2) DEFAULT '0.00',
  `detalle07` varchar(40) DEFAULT NULL,
  `cvaux07` char(1) DEFAULT NULL,
  `campo07` varchar(255) DEFAULT NULL,
  `UID` int(3) unsigned NOT NULL DEFAULT '0',
  `concepto07` varchar(4) NOT NULL DEFAULT '',
  PRIMARY KEY (`notabla07`,`tipotra07`,`ocurtra07`,`ocu2tra07`,`tipodoccg07`,`modulo07`,`UID`,`concepto07`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeord30`
--

CREATE TABLE IF NOT EXISTS `maeord30` (
  `nopedido30` varchar(20) NOT NULL DEFAULT '',
  `codprod30` varchar(50) NOT NULL,
  `ocurren30` varchar(4) NOT NULL DEFAULT '',
  `codcte30` varchar(15) DEFAULT '',
  `nopedido30a` varchar(20) DEFAULT NULL,
  `codprod30b` varchar(50) DEFAULT NULL,
  `nopedido30b` varchar(7) DEFAULT '',
  `cvectenegro30` char(1) DEFAULT '',
  `fecpedido30` datetime DEFAULT '0000-00-00 00:00:00',
  `referencia30` varchar(15) DEFAULT '',
  `nomcte30` varchar(40) DEFAULT '',
  `novend30` varchar(4) DEFAULT '',
  `localid30` varchar(4) DEFAULT '',
  `condpag30` varchar(4) DEFAULT '',
  `nopagos30` varchar(4) DEFAULT '',
  `descto30` double(18,2) DEFAULT '0.00',
  `iva30` double(18,2) DEFAULT '0.00',
  `flete30` double(18,2) DEFAULT '0.00',
  `status30` varchar(4) DEFAULT '',
  `telcte30` varchar(10) DEFAULT NULL,
  `dircte30` varchar(40) DEFAULT '',
  `cantped30` double(14,2) DEFAULT '0.00',
  `precuni30` double(14,6) DEFAULT '0.000000',
  `cantfac30` double(14,2) DEFAULT '0.00',
  `cantafac30` double(14,2) DEFAULT '0.00',
  `desctoxprod30` double(14,6) DEFAULT '0.000000',
  `medid130` double(7,2) DEFAULT '0.00',
  `medid230` double(7,2) DEFAULT '0.00',
  `medid330` double(7,2) DEFAULT '0.00',
  `tipof30` char(1) DEFAULT NULL,
  `factor30` double(7,4) DEFAULT '0.0000',
  `uid` int(4) unsigned DEFAULT NULL,
  `fleteini30` double(18,2) DEFAULT '0.00',
  `medid430` double(7,2) DEFAULT '0.00',
  `medid530` double(7,2) DEFAULT '0.00',
  `observ30` varchar(255) DEFAULT NULL,
  `cvtransfer30` char(1) DEFAULT 'N',
  `fectransfer30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bodega30` char(2) DEFAULT '01',
  `desctofp30` double(18,2) DEFAULT '0.00',
  `UIDap` int(4) unsigned DEFAULT '0',
  `fecestado30` datetime DEFAULT NULL,
  `fecdespacho30` datetime DEFAULT NULL,
  `nomprod30` varchar(255) DEFAULT '',
  `recargos30` double(18,2) DEFAULT '0.00',
  `ice30` double(18,2) DEFAULT '0.00',
  `hisuid` varchar(255) NOT NULL DEFAULT '',
  `obsgen30` varchar(255) NOT NULL DEFAULT '',
  `piva30` double(6,2) DEFAULT NULL,
  `lotdes30` varchar(50) NOT NULL,
  `lothas30` varchar(50) NOT NULL,
  `bodest30` varchar(4) NOT NULL,
  `cantres30` double(14,2) NOT NULL,
  PRIMARY KEY (`nopedido30`,`ocurren30`,`codprod30`),
  KEY `codprod30` (`codprod30`),
  KEY `codcte30` (`codcte30`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maepag`
--

CREATE TABLE IF NOT EXISTS `maepag` (
  `codcte01` varchar(15) NOT NULL DEFAULT '0',
  `nomcte01` varchar(80) DEFAULT '0',
  `cv1cte01` char(1) DEFAULT '6',
  `cv2cte01` char(1) DEFAULT '1',
  `tipcte01` varchar(20) DEFAULT '0',
  `ofienccte01` varchar(4) DEFAULT '0',
  `vendcte01` varchar(4) DEFAULT '0',
  `cobrcte01` varchar(4) DEFAULT '0',
  `loccte01` varchar(4) DEFAULT '0',
  `dircte01` varchar(40) DEFAULT '0',
  `telcte01` varchar(11) DEFAULT '0',
  `cascte01` varchar(15) DEFAULT '0',
  `fecing01` datetime DEFAULT NULL,
  `condpag01` varchar(4) DEFAULT '0',
  `desctocte01` double(6,2) DEFAULT '0.00',
  `limcred01` double(18,2) DEFAULT '0.00',
  `desppar01` char(1) DEFAULT 'S',
  `cheqpro01` int(2) DEFAULT '0',
  `sdoeje01` double(18,2) DEFAULT '0.00',
  `sdoant01` double(18,2) DEFAULT '0.00',
  `sdoact01` double(18,2) DEFAULT '0.00',
  `acudbm01` double(18,2) DEFAULT '0.00',
  `acucrm01` double(18,2) DEFAULT '0.00',
  `acudbe01` double(18,2) DEFAULT '0.00',
  `acucre01` double(18,2) DEFAULT '0.00',
  `comentcte01` char(2) DEFAULT '0',
  `statuscte01` int(1) unsigned DEFAULT '0',
  `identcte01` varchar(15) DEFAULT '0',
  `cordcte01` varchar(4) DEFAULT '0',
  `limcant01` int(1) unsigned DEFAULT '0',
  `pagleg01` varchar(30) DEFAULT '0',
  `telcte01b` varchar(11) DEFAULT '0',
  `telcte01c` varchar(11) DEFAULT '0',
  `emailcte01` varchar(30) DEFAULT NULL,
  `ctacgcte01` varchar(15) DEFAULT '0',
  `obsercte01` text,
  `totexceso01` double(18,2) DEFAULT '0.00',
  `imagencte01` varchar(100) DEFAULT NULL,
  `block` tinyint(1) unsigned DEFAULT NULL,
  `UID` int(3) unsigned DEFAULT NULL,
  `ultimoacceso` bigint(14) DEFAULT NULL,
  `idcli` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `catcte01` varchar(20) DEFAULT NULL,
  `numautosri01` varchar(255) DEFAULT NULL,
  `seriedoc01` varchar(20) DEFAULT NULL,
  `fecvencdoc01` date DEFAULT NULL,
  `repleg01` varchar(255) DEFAULT NULL,
  `coddest01` varchar(5) DEFAULT NULL,
  `longitud01` varchar(50) DEFAULT NULL,
  `latitud01` varchar(50) DEFAULT NULL,
  `zoom01` int(2) unsigned DEFAULT NULL,
  `coniva01` char(1) NOT NULL DEFAULT 'S',
  `conret01` char(1) NOT NULL DEFAULT 'S',
  `ctacgant01` varchar(15) DEFAULT '0',
  PRIMARY KEY (`idcli`),
  UNIQUE KEY `codcte01` (`codcte01`),
  KEY `nomcte01` (`nomcte01`),
  KEY `cascte01` (`cascte01`),
  KEY `nomcte` (`nomcte01`),
  KEY `cedula` (`cascte01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `maeped`
--

CREATE TABLE IF NOT EXISTS `maeped` (
  `codcte02` varchar(20) DEFAULT NULL,
  `fecped02` datetime DEFAULT NULL,
  `codped02` int(10) DEFAULT NULL,
  `totped02` double(18,2) DEFAULT NULL,
  `precuniped02` double(18,2) unsigned NOT NULL DEFAULT '0.00',
  `unidped02` int(4) unsigned NOT NULL DEFAULT '0',
  `estped02` varchar(255) DEFAULT NULL,
  `usuped02` varchar(255) DEFAULT NULL,
  `tipoped02` varchar(15) DEFAULT NULL,
  `pagoped02` double(6,2) unsigned DEFAULT NULL,
  `ocurren30` varchar(4) NOT NULL DEFAULT '',
  `codprod02` varchar(50) NOT NULL,
  `descp02` varchar(255) NOT NULL DEFAULT '',
  `numsesion` varchar(255) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeped30`
--

CREATE TABLE IF NOT EXISTS `maeped30` (
  `nopedido30` varchar(20) NOT NULL DEFAULT '',
  `codprod30` varchar(50) NOT NULL,
  `ocurren30` varchar(6) NOT NULL DEFAULT '',
  `codcte30` varchar(20) DEFAULT NULL,
  `nopedido30a` varchar(20) DEFAULT NULL,
  `codprod30b` varchar(50) DEFAULT NULL,
  `nopedido30b` varchar(7) DEFAULT '',
  `cvectenegro30` char(4) DEFAULT NULL,
  `fecpedido30` datetime DEFAULT '0000-00-00 00:00:00',
  `referencia30` varchar(80) DEFAULT NULL,
  `nomcte30` varchar(255) DEFAULT NULL,
  `novend30` varchar(4) DEFAULT '',
  `localid30` varchar(4) DEFAULT '',
  `condpag30` varchar(4) DEFAULT '',
  `nopagos30` varchar(4) DEFAULT '',
  `descto30` double(18,2) DEFAULT '0.00',
  `iva30` double(18,2) DEFAULT '0.00',
  `flete30` double(18,2) DEFAULT '0.00',
  `status30` varchar(4) DEFAULT '',
  `telcte30` varchar(10) DEFAULT NULL,
  `dircte30` varchar(255) DEFAULT NULL,
  `cantped30` double(14,2) DEFAULT '0.00',
  `precuni30` double(14,6) DEFAULT '0.000000',
  `cantfac30` double(14,2) DEFAULT '0.00',
  `cantafac30` double(14,2) DEFAULT '0.00',
  `desctoxprod30` double(18,4) DEFAULT '0.0000',
  `piva30` double(6,2) DEFAULT NULL,
  `medid130` double(7,2) DEFAULT '0.00',
  `medid230` double(7,2) DEFAULT '0.00',
  `medid330` double(7,2) DEFAULT '0.00',
  `tipof30` char(1) DEFAULT NULL,
  `factor30` double(7,4) DEFAULT '0.0000',
  `uid` int(4) unsigned DEFAULT NULL,
  `fleteini30` double(18,2) DEFAULT '0.00',
  `medid430` double(7,2) DEFAULT '0.00',
  `medid530` double(7,2) DEFAULT '0.00',
  `observ30` varchar(255) DEFAULT NULL,
  `cvtransfer30` char(1) DEFAULT 'N',
  `fectransfer30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bodega30` char(2) DEFAULT '01',
  `desctofp30` double(18,2) DEFAULT '0.00',
  `UIDap` int(4) unsigned DEFAULT NULL,
  `fecestado30` datetime DEFAULT NULL,
  `fecdespacho30` datetime DEFAULT NULL,
  `nomprod30` varchar(255) DEFAULT NULL,
  `recargos30` double(18,2) DEFAULT '0.00',
  `ice30` double(18,2) DEFAULT '0.00',
  `hisuid` text,
  `obsgen30` varchar(255) DEFAULT NULL,
  `formapag30` varchar(4) NOT NULL DEFAULT '',
  `emailcte30` varchar(255) DEFAULT NULL,
  `canttra30` double(14,2) NOT NULL DEFAULT '0.00',
  `cantres30` double(14,2) NOT NULL DEFAULT '0.00',
  `etiqueta30` varchar(255) NOT NULL DEFAULT '',
  `marca30` varchar(255) NOT NULL DEFAULT '',
  `motor30` varchar(20) NOT NULL DEFAULT '',
  `chasis30` varchar(20) NOT NULL DEFAULT '',
  `kms30` varchar(10) NOT NULL DEFAULT '',
  `tecnico30` varchar(4) NOT NULL DEFAULT '',
  `anio30` varchar(5) NOT NULL DEFAULT '',
  `inventario30` text NOT NULL,
  `tipserv30` char(1) NOT NULL DEFAULT '',
  `srg30` varchar(20) DEFAULT NULL,
  `problema30` text NOT NULL,
  `fecha130` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecha230` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecha330` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecha430` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `serv30` varchar(4) NOT NULL DEFAULT '',
  `modelo30` varchar(255) NOT NULL DEFAULT '',
  `asesor30` varchar(4) NOT NULL DEFAULT '',
  `block30` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `porcinteres30` double(18,6) DEFAULT '0.000000',
  `totinteres30` double(18,6) DEFAULT '0.000000',
  `cantcuotas30` int(2) DEFAULT '0',
  `tipocuota30` tinyint(1) DEFAULT '0',
  `campospromo30` varchar(255) NOT NULL,
  `lotdes30` varchar(50) NOT NULL,
  `lothas30` varchar(50) NOT NULL,
  `lotfabrica30` varchar(255) NOT NULL,
  `valhoraser30` varchar(20) NOT NULL,
  `tecmultiples30` varchar(255) NOT NULL,
  `codbarempaque30` varchar(50) DEFAULT NULL,
  `unidadempaque30` double(18,2) DEFAULT NULL,
  `procesa30` varchar(1) NOT NULL DEFAULT 'N',
  `tiponoc30` varchar(4) NOT NULL DEFAULT '',
  `cobrador30` varchar(4) NOT NULL DEFAULT '',
  `coordinador30` varchar(4) NOT NULL DEFAULT '',
  `orig30` varchar(255) NOT NULL DEFAULT '',
  `color30` varchar(100) NOT NULL DEFAULT '',
  `dirinstal30` varchar(255) NOT NULL DEFAULT '',
  `telinstal30` varchar(30) NOT NULL DEFAULT '',
  `garinstal30` varchar(30) NOT NULL DEFAULT '',
  `numticket30` int(11) NOT NULL DEFAULT '0',
  `seriesped30` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nopedido30`,`ocurren30`,`codprod30`),
  KEY `codprod30` (`codprod30`),
  KEY `codcte30` (`codcte30`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeprd30`
--

CREATE TABLE IF NOT EXISTS `maeprd30` (
  `nopedido30` varchar(20) NOT NULL DEFAULT '',
  `codprod30` varchar(50) NOT NULL,
  `ocurren30` varchar(4) NOT NULL DEFAULT '',
  `codcte30` varchar(15) DEFAULT '',
  `nopedido30a` varchar(20) DEFAULT NULL,
  `codprod30b` varchar(50) DEFAULT NULL,
  `nopedido30b` varchar(7) DEFAULT '',
  `cvectenegro30` char(1) DEFAULT '',
  `fecpedido30` datetime DEFAULT '0000-00-00 00:00:00',
  `referencia30` varchar(80) DEFAULT NULL,
  `nomcte30` varchar(40) DEFAULT '',
  `novend30` varchar(4) DEFAULT '',
  `localid30` varchar(4) DEFAULT '',
  `condpag30` varchar(4) DEFAULT '',
  `nopagos30` varchar(4) DEFAULT '',
  `descto30` double(18,2) DEFAULT '0.00',
  `iva30` double(18,2) DEFAULT '0.00',
  `flete30` double(18,2) DEFAULT '0.00',
  `status30` varchar(4) DEFAULT '',
  `telcte30` varchar(10) DEFAULT NULL,
  `dircte30` varchar(40) DEFAULT '',
  `cantped30` double(14,2) DEFAULT '0.00',
  `precuni30` double(14,2) DEFAULT '0.00',
  `cantfac30` double(14,2) DEFAULT '0.00',
  `cantafac30` double(14,2) DEFAULT '0.00',
  `desctoxprod30` double(18,2) DEFAULT '0.00',
  `medid130` double(7,2) DEFAULT '0.00',
  `medid230` double(7,2) DEFAULT '0.00',
  `medid330` double(7,2) DEFAULT '0.00',
  `tipof30` char(1) DEFAULT NULL,
  `factor30` double(7,4) DEFAULT '0.0000',
  `uid` int(4) unsigned DEFAULT NULL,
  `fleteini30` double(18,2) DEFAULT '0.00',
  `medid430` double(7,2) DEFAULT '0.00',
  `medid530` double(7,2) DEFAULT '0.00',
  `observ30` varchar(255) DEFAULT NULL,
  `cvtransfer30` char(1) DEFAULT 'N',
  `fectransfer30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bodega30` char(2) DEFAULT '01',
  `desctofp30` double(18,2) DEFAULT '0.00',
  `UIDap` int(1) unsigned DEFAULT NULL,
  `fecestado30` datetime DEFAULT NULL,
  `fecdespacho30` datetime DEFAULT NULL,
  `nomprod30` varchar(255) DEFAULT NULL,
  `recargos30` double(18,2) DEFAULT '0.00',
  `ice30` double(18,2) DEFAULT '0.00',
  `hisuid` varchar(255) DEFAULT NULL,
  `obsgen30` varchar(255) DEFAULT NULL,
  `formapag30` varchar(4) NOT NULL DEFAULT '',
  `emailcte30` varchar(255) DEFAULT NULL,
  `canttra30` double(14,2) NOT NULL DEFAULT '0.00',
  `cantres30` double(14,2) NOT NULL DEFAULT '0.00',
  `etiqueta30` varchar(255) NOT NULL DEFAULT '',
  `marca30` varchar(255) NOT NULL DEFAULT '',
  `numpedido20` varchar(20) DEFAULT NULL,
  `seriesprd30` varchar(50) DEFAULT NULL,
  `liqprd30` char(1) DEFAULT 'N',
  `estadoll01` varchar(2) DEFAULT NULL,
  `rechazo30` varchar(2) DEFAULT NULL,
  `nreproceso30` varchar(2) DEFAULT '0',
  PRIMARY KEY (`nopedido30`,`ocurren30`,`codprod30`),
  KEY `codprod30` (`codprod30`),
  KEY `codcte30` (`codcte30`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maepre`
--

CREATE TABLE IF NOT EXISTS `maepre` (
  `ctacontpre` varchar(15) NOT NULL DEFAULT '',
  `anopre` varchar(4) NOT NULL DEFAULT '',
  `valpre0` double(18,2) DEFAULT '0.00',
  `valpre1` double(18,2) DEFAULT '0.00',
  `valpre2` double(18,2) DEFAULT '0.00',
  `valpre3` double(18,2) DEFAULT '0.00',
  `valpre4` double(18,2) DEFAULT '0.00',
  `valpre5` double(18,2) DEFAULT '0.00',
  `valpre6` double(18,2) DEFAULT '0.00',
  `valpre7` double(18,2) DEFAULT '0.00',
  `valpre8` double(18,2) DEFAULT '0.00',
  `valpre9` double(18,2) DEFAULT '0.00',
  `valpre10` double(18,2) DEFAULT '0.00',
  `valpre11` double(18,2) DEFAULT '0.00',
  `UID` int(4) DEFAULT '0',
  `block` int(1) DEFAULT '0',
  `ultimoacceso` int(14) DEFAULT '0',
  PRIMARY KEY (`ctacontpre`,`anopre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeprein`
--

CREATE TABLE IF NOT EXISTS `maeprein` (
  `codprodpre` varchar(50) NOT NULL,
  `aniopre` varchar(4) NOT NULL DEFAULT '',
  `vendpre` varchar(4) NOT NULL DEFAULT '',
  `valpre0` double(18,2) DEFAULT '0.00',
  `valpre1` double(18,2) DEFAULT '0.00',
  `valpre2` double(18,2) DEFAULT '0.00',
  `valpre3` double(18,2) DEFAULT '0.00',
  `valpre4` double(18,2) DEFAULT '0.00',
  `valpre5` double(18,2) DEFAULT '0.00',
  `valpre6` double(18,2) DEFAULT '0.00',
  `valpre7` double(18,2) DEFAULT '0.00',
  `valpre8` double(18,2) DEFAULT '0.00',
  `valpre9` double(18,2) DEFAULT '0.00',
  `valpre10` double(18,2) DEFAULT '0.00',
  `valpre11` double(18,2) DEFAULT '0.00',
  `UID` int(4) DEFAULT '0',
  `block` int(1) DEFAULT '0',
  `ultimoacceso` int(14) DEFAULT '0',
  `preciopre` double(18,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`codprodpre`,`aniopre`,`vendpre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maepro`
--

CREATE TABLE IF NOT EXISTS `maepro` (
  `codprod01` varchar(50) NOT NULL DEFAULT '0',
  `desprod01` varchar(255) DEFAULT '0',
  `cve101` char(1) DEFAULT 'N',
  `cve201` int(1) unsigned DEFAULT '0',
  `unidmed01` varchar(10) DEFAULT '0',
  `cantmin01` double(13,2) DEFAULT '0.00',
  `cantact01` double(13,2) DEFAULT '0.00',
  `valact01` double(18,2) DEFAULT '0.00',
  `exipromo01` double(13,2) DEFAULT '0.00',
  `precuni01` double(18,2) DEFAULT '0.00',
  `pedpend01` double(13,2) DEFAULT '0.00',
  `orden01` varchar(5) DEFAULT '0',
  `refer01` varchar(80) DEFAULT '0',
  `canentm01` double(13,2) DEFAULT '0.00',
  `valentm01` double(18,2) DEFAULT '0.00',
  `cansalm01` double(13,2) DEFAULT '0.00',
  `valsalm01` double(18,2) DEFAULT '0.00',
  `canenta01` double(13,2) DEFAULT '0.00',
  `valenta01` double(18,2) DEFAULT '0.00',
  `cansala01` double(13,2) DEFAULT '0.00',
  `valsala01` double(18,2) DEFAULT '0.00',
  `fecape01` datetime DEFAULT NULL,
  `fecult01` datetime DEFAULT '0000-00-00 00:00:00',
  `fecvta01` datetime DEFAULT '0000-00-00 00:00:00',
  `ubic01` varchar(15) DEFAULT '0',
  `precvta01` double(18,4) DEFAULT '0.0000',
  `descto101` double(6,2) DEFAULT '0.00',
  `precio201` double(18,4) DEFAULT '0.0000',
  `descto201` double(6,2) DEFAULT '0.00',
  `precio301` double(18,4) DEFAULT '0.0000',
  `descto301` double(6,2) DEFAULT '0.00',
  `canvtam01` double(13,2) DEFAULT '0.00',
  `valvtam01` double(18,2) DEFAULT '0.00',
  `cosvtam01` double(18,2) DEFAULT '0.00',
  `canvtaa01` double(13,2) DEFAULT '0.00',
  `valvtaa01` double(18,2) DEFAULT '0.00',
  `cosvtaa01` double(18,2) DEFAULT '0.00',
  `prod1alt01` varchar(50) DEFAULT '0',
  `prod2alt01` varchar(50) DEFAULT '0',
  `proved101` varchar(5) DEFAULT '0',
  `proved201` varchar(5) DEFAULT '0',
  `med101` double(10,5) DEFAULT '0.00000',
  `med201` double(10,5) DEFAULT '0.00000',
  `med301` double(10,5) DEFAULT '0.00000',
  `factor01` double(7,2) DEFAULT '0.00',
  `cvserie01` char(1) DEFAULT 'N',
  `ctain101` varchar(15) NOT NULL DEFAULT '',
  `ctain201` varchar(15) NOT NULL DEFAULT '',
  `ctain301` varchar(15) NOT NULL DEFAULT '',
  `porciva01` double(6,2) DEFAULT NULL,
  `prodsinsdo01` char(1) DEFAULT 'S',
  `sinprec01` char(1) DEFAULT 'S',
  `fotoprod01` varchar(255) DEFAULT NULL,
  `detprod01` text,
  `block` tinyint(1) unsigned DEFAULT '0',
  `UID` int(4) unsigned DEFAULT NULL,
  `ultimoacceso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idpro` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `catprod01` varchar(50) NOT NULL DEFAULT '998',
  `med401` double(10,5) DEFAULT '0.00000',
  `med501` double(10,5) DEFAULT '0.00000',
  `prodconmed01` char(1) DEFAULT 'N',
  `factorpeso01` char(1) DEFAULT NULL,
  `codbar01` varchar(255) DEFAULT NULL,
  `unifrac01` char(1) DEFAULT 'S',
  `calidad01` varchar(4) NOT NULL DEFAULT '',
  `color01` varchar(4) NOT NULL DEFAULT '',
  `material01` varchar(4) NOT NULL DEFAULT '',
  `talla01` varchar(4) NOT NULL DEFAULT '',
  `compuesto01` char(1) NOT NULL DEFAULT 'N',
  `catalt01` varchar(255) NOT NULL DEFAULT '',
  `precfob01` double(18,2) NOT NULL DEFAULT '0.00',
  `precio401` double(18,4) NOT NULL DEFAULT '0.0000',
  `descto401` double(6,2) NOT NULL DEFAULT '0.00',
  `porigen01` varchar(4) NOT NULL DEFAULT '',
  `rin01` varchar(100) NOT NULL DEFAULT '',
  `marca01` varchar(4) NOT NULL DEFAULT '',
  `alto01` varchar(100) NOT NULL DEFAULT '',
  `ancho01` varchar(100) NOT NULL DEFAULT '',
  `tipoletra01` varchar(4) NOT NULL DEFAULT '',
  `indcarga01` varchar(100) NOT NULL DEFAULT '',
  `indveloc01` varchar(100) NOT NULL DEFAULT '',
  `pr01` varchar(100) NOT NULL DEFAULT '',
  `dis01` varchar(4) NOT NULL DEFAULT '',
  `tipocons01` varchar(100) NOT NULL DEFAULT '',
  `precateg01` char(1) NOT NULL DEFAULT 'N',
  `tipprod01` char(1) NOT NULL DEFAULT 'S',
  `conversion01` double(6,2) NOT NULL DEFAULT '0.00',
  `valhom01` double(6,2) NOT NULL DEFAULT '0.00',
  `ctain401` varchar(15) NOT NULL DEFAULT '',
  `valhom02` double(6,2) NOT NULL DEFAULT '0.00',
  `valhom03` double(6,2) NOT NULL DEFAULT '0.00',
  `valhom04` double(6,2) NOT NULL DEFAULT '0.00',
  `statuspro01` char(1) NOT NULL DEFAULT 'S',
  `parara01` varchar(4) NOT NULL,
  `prodequiv01` text NOT NULL,
  `regalia01` text NOT NULL,
  `precio501` double(18,4) DEFAULT '0.0000',
  `descto501` float(18,2) NOT NULL DEFAULT '0.00',
  `precio601` double(18,4) DEFAULT '0.0000',
  `descto601` float(18,2) NOT NULL DEFAULT '0.00',
  `precio701` double(18,4) DEFAULT '0.0000',
  `descto701` float(18,2) NOT NULL DEFAULT '0.00',
  `precio801` double(18,4) DEFAULT '0.0000',
  `descto801` float(18,2) NOT NULL DEFAULT '0.00',
  `precio901` double(18,4) DEFAULT '0.0000',
  `descto901` float(18,2) NOT NULL DEFAULT '0.00',
  `precio1001` double(18,4) DEFAULT '0.0000',
  `descto1001` float(18,2) NOT NULL DEFAULT '0.00',
  `precio1101` double(18,4) DEFAULT '0.0000',
  `descto1101` float(18,2) NOT NULL DEFAULT '0.00',
  `precio1201` double(18,4) NOT NULL DEFAULT '0.0000',
  `descto1201` float(18,2) NOT NULL DEFAULT '0.00',
  `submarca01` varchar(4) DEFAULT NULL,
  `modelo01` varchar(255) DEFAULT NULL,
  `clasific01` varchar(4) NOT NULL,
  `codbarempaque01` varchar(255) DEFAULT NULL,
  `unidadempaque01` varchar(255) DEFAULT NULL,
  `dimensionempaque01` varchar(255) DEFAULT NULL,
  `link01` varchar(255) NOT NULL,
  `desprod201` varchar(255) NOT NULL,
  `desprod301` varchar(255) NOT NULL,
  `peso01` double(18,6) NOT NULL DEFAULT '0.000000',
  `prodrel01` text NOT NULL,
  `coefprd01` double(6,4) DEFAULT NULL,
  `infor01` varchar(50) NOT NULL DEFAULT '',
  `infor02` varchar(50) NOT NULL DEFAULT '',
  `infor03` varchar(50) NOT NULL DEFAULT '',
  `infor04` varchar(50) NOT NULL DEFAULT '',
  `infor05` varchar(50) NOT NULL DEFAULT '',
  `infor06` varchar(50) NOT NULL DEFAULT '',
  `infor07` varchar(50) NOT NULL DEFAULT '',
  `infor08` varchar(50) NOT NULL DEFAULT '',
  `porcenrenta` float DEFAULT NULL,
  PRIMARY KEY (`codprod01`),
  KEY `refer01` (`refer01`),
  KEY `codbar01` (`codbar01`),
  KEY `desprod01` (`desprod01`),
  KEY `idpro` (`idpro`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Table structure for table `maeprocopia`
--

CREATE TABLE IF NOT EXISTS `maeprocopia` (
  `codprod01` varchar(15) NOT NULL DEFAULT '0',
  `desprod01` varchar(255) DEFAULT '0',
  `cve101` char(1) DEFAULT 'N',
  `cve201` int(1) unsigned DEFAULT '0',
  `unidmed01` varchar(10) DEFAULT '0',
  `cantmin01` double(13,2) DEFAULT '0.00',
  `cantact01` double(13,2) DEFAULT '0.00',
  `valact01` double(18,2) DEFAULT '0.00',
  `exipromo01` double(13,2) DEFAULT '0.00',
  `precuni01` double(18,2) DEFAULT '0.00',
  `pedpend01` double(13,2) DEFAULT '0.00',
  `orden01` varchar(5) DEFAULT '0',
  `refer01` varchar(80) DEFAULT '0',
  `canentm01` double(13,2) DEFAULT '0.00',
  `valentm01` double(18,2) DEFAULT '0.00',
  `cansalm01` double(13,2) DEFAULT '0.00',
  `valsalm01` double(18,2) DEFAULT '0.00',
  `canenta01` double(13,2) DEFAULT '0.00',
  `valenta01` double(18,2) DEFAULT '0.00',
  `cansala01` double(13,2) DEFAULT '0.00',
  `valsala01` double(18,2) DEFAULT '0.00',
  `fecape01` datetime DEFAULT NULL,
  `fecult01` datetime DEFAULT '0000-00-00 00:00:00',
  `fecvta01` datetime DEFAULT '0000-00-00 00:00:00',
  `ubic01` varchar(15) DEFAULT '0',
  `precvta01` double(18,4) DEFAULT '0.0000',
  `descto101` double(6,2) DEFAULT '0.00',
  `precio201` double(18,4) DEFAULT '0.0000',
  `descto201` double(6,2) DEFAULT '0.00',
  `precio301` double(18,4) DEFAULT '0.0000',
  `descto301` double(6,2) DEFAULT '0.00',
  `canvtam01` double(13,2) DEFAULT '0.00',
  `valvtam01` double(18,2) DEFAULT '0.00',
  `cosvtam01` double(18,2) DEFAULT '0.00',
  `canvtaa01` double(13,2) DEFAULT '0.00',
  `valvtaa01` double(18,2) DEFAULT '0.00',
  `cosvtaa01` double(18,2) DEFAULT '0.00',
  `prod1alt01` varchar(15) DEFAULT '0',
  `prod2alt01` varchar(15) DEFAULT '0',
  `proved101` varchar(5) DEFAULT '0',
  `proved201` varchar(5) DEFAULT '0',
  `med101` double(10,5) DEFAULT '0.00000',
  `med201` double(10,5) DEFAULT '0.00000',
  `med301` double(10,5) DEFAULT '0.00000',
  `factor01` double(7,2) DEFAULT '0.00',
  `cvserie01` char(1) DEFAULT 'N',
  `ctain101` varchar(15) NOT NULL DEFAULT '',
  `ctain201` varchar(15) NOT NULL DEFAULT '',
  `ctain301` varchar(15) NOT NULL DEFAULT '',
  `porciva01` double(6,2) DEFAULT NULL,
  `prodsinsdo01` char(1) DEFAULT 'S',
  `sinprec01` char(1) DEFAULT 'S',
  `fotoprod01` varchar(255) DEFAULT NULL,
  `detprod01` text,
  `block` tinyint(1) unsigned DEFAULT '0',
  `UID` int(3) unsigned DEFAULT NULL,
  `ultimoacceso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idpro` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `catprod01` varchar(50) NOT NULL DEFAULT '998',
  `med401` double(10,5) DEFAULT '0.00000',
  `med501` double(10,5) DEFAULT '0.00000',
  `prodconmed01` char(1) DEFAULT 'N',
  `factorpeso01` char(1) DEFAULT NULL,
  `codbar01` varchar(255) DEFAULT NULL,
  `unifrac01` char(1) DEFAULT 'S',
  `calidad01` varchar(4) NOT NULL DEFAULT '',
  `color01` varchar(4) NOT NULL DEFAULT '',
  `material01` varchar(4) NOT NULL DEFAULT '',
  `talla01` varchar(4) NOT NULL DEFAULT '',
  `compuesto01` char(1) NOT NULL DEFAULT 'N',
  `catalt01` varchar(255) NOT NULL DEFAULT '',
  `precfob01` double(18,2) NOT NULL DEFAULT '0.00',
  `precio401` double(18,4) NOT NULL DEFAULT '0.0000',
  `descto401` double(6,2) NOT NULL DEFAULT '0.00',
  `porigen01` varchar(4) NOT NULL DEFAULT '',
  `rin01` varchar(100) NOT NULL DEFAULT '',
  `marca01` varchar(4) NOT NULL DEFAULT '',
  `alto01` varchar(100) NOT NULL DEFAULT '',
  `ancho01` varchar(100) NOT NULL DEFAULT '',
  `tipoletra01` varchar(4) NOT NULL DEFAULT '',
  `indcarga01` varchar(100) NOT NULL DEFAULT '',
  `indveloc01` varchar(100) NOT NULL DEFAULT '',
  `pr01` varchar(100) NOT NULL DEFAULT '',
  `dis01` varchar(4) NOT NULL DEFAULT '',
  `tipocons01` varchar(100) NOT NULL DEFAULT '',
  `precateg01` char(1) NOT NULL DEFAULT 'N',
  `tipprod01` char(1) NOT NULL DEFAULT 'S',
  `conversion01` double(6,2) NOT NULL DEFAULT '0.00',
  `valhom01` double(6,2) NOT NULL DEFAULT '0.00',
  `ctain401` varchar(15) NOT NULL DEFAULT '',
  `valhom02` double(6,2) NOT NULL DEFAULT '0.00',
  `valhom03` double(6,2) NOT NULL DEFAULT '0.00',
  `valhom04` double(6,2) NOT NULL DEFAULT '0.00',
  `statuspro01` char(1) NOT NULL DEFAULT 'S',
  `precio501` double(18,4) DEFAULT '0.0000',
  `descto501` float(18,2) NOT NULL DEFAULT '0.00',
  `precio601` double(18,4) DEFAULT '0.0000',
  `descto601` float(18,2) NOT NULL DEFAULT '0.00',
  `precio701` double(18,4) DEFAULT '0.0000',
  `descto701` float(18,2) NOT NULL DEFAULT '0.00',
  `precio801` double(18,4) DEFAULT '0.0000',
  `descto801` float(18,2) NOT NULL DEFAULT '0.00',
  `precio901` double(18,4) DEFAULT '0.0000',
  `descto901` float(18,2) NOT NULL DEFAULT '0.00',
  `precio1001` double(18,4) DEFAULT '0.0000',
  `descto1001` float(18,2) NOT NULL DEFAULT '0.00',
  `precio1101` double(18,4) DEFAULT '0.0000',
  `descto1101` float(18,2) NOT NULL DEFAULT '0.00',
  `precio1201` double(18,4) NOT NULL DEFAULT '0.0000',
  `descto1201` float(18,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`idpro`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `maeprod30`
--

CREATE TABLE IF NOT EXISTS `maeprod30` (
  `nopedido30` varchar(20) NOT NULL DEFAULT '',
  `codprod30` varchar(50) NOT NULL,
  `ocurren30` varchar(4) NOT NULL DEFAULT '',
  `codcte30` varchar(15) DEFAULT '',
  `nopedido30a` varchar(20) DEFAULT NULL,
  `codprod30b` varchar(50) DEFAULT NULL,
  `nopedido30b` varchar(7) DEFAULT '',
  `cvectenegro30` char(1) DEFAULT '',
  `fecpedido30` datetime DEFAULT '0000-00-00 00:00:00',
  `referencia30` varchar(80) DEFAULT NULL,
  `nomcte30` varchar(40) DEFAULT '',
  `novend30` varchar(4) DEFAULT '',
  `localid30` varchar(4) DEFAULT '',
  `condpag30` varchar(4) DEFAULT '',
  `nopagos30` varchar(4) DEFAULT '',
  `descto30` double(18,2) DEFAULT '0.00',
  `iva30` double(18,2) DEFAULT '0.00',
  `flete30` double(18,2) DEFAULT '0.00',
  `status30` varchar(4) DEFAULT '',
  `telcte30` varchar(10) DEFAULT NULL,
  `dircte30` varchar(40) DEFAULT '',
  `cantped30` double(14,2) DEFAULT '0.00',
  `precuni30` double(14,2) DEFAULT '0.00',
  `cantfac30` double(14,2) DEFAULT '0.00',
  `cantafac30` double(14,2) DEFAULT '0.00',
  `desctoxprod30` double(18,2) DEFAULT '0.00',
  `medid130` double(7,2) DEFAULT '0.00',
  `medid230` double(7,2) DEFAULT '0.00',
  `medid330` double(7,2) DEFAULT '0.00',
  `tipof30` char(1) DEFAULT NULL,
  `factor30` double(7,4) DEFAULT '0.0000',
  `uid` int(4) unsigned DEFAULT NULL,
  `fleteini30` double(18,2) DEFAULT '0.00',
  `medid430` double(7,2) DEFAULT '0.00',
  `medid530` double(7,2) DEFAULT '0.00',
  `observ30` varchar(255) DEFAULT NULL,
  `cvtransfer30` char(1) DEFAULT 'N',
  `fectransfer30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bodega30` char(2) DEFAULT '01',
  `desctofp30` double(18,2) DEFAULT '0.00',
  `UIDap` int(1) unsigned DEFAULT NULL,
  `fecestado30` datetime DEFAULT NULL,
  `fecdespacho30` datetime DEFAULT NULL,
  `nomprod30` varchar(255) DEFAULT NULL,
  `recargos30` double(18,2) DEFAULT '0.00',
  `ice30` double(18,2) DEFAULT '0.00',
  `hisuid` varchar(255) DEFAULT NULL,
  `obsgen30` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nopedido30`,`ocurren30`,`codprod30`),
  KEY `codprod30` (`codprod30`),
  KEY `codcte30` (`codcte30`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeprotmp`
--

CREATE TABLE IF NOT EXISTS `maeprotmp` (
  `codprod01` varchar(50) NOT NULL DEFAULT '0',
  `desprod01` varchar(255) DEFAULT '0',
  `refer01` varchar(80) DEFAULT '0',
  `catprod01` varchar(50) NOT NULL DEFAULT '0',
  `precuni01` double(18,2) NOT NULL DEFAULT '0.00',
  `precvta01` double(18,2) DEFAULT '0.00',
  `proved101` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`codprod01`),
  UNIQUE KEY `codprod01` (`codprod01`),
  KEY `desprod01` (`desprod01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeprotmp2`
--

CREATE TABLE IF NOT EXISTS `maeprotmp2` (
  `bodega01` varchar(4) NOT NULL DEFAULT '',
  `codprod01` varchar(15) NOT NULL DEFAULT '',
  `cantact01` decimal(18,2) DEFAULT '0.00',
  `valact01` decimal(18,2) DEFAULT '0.00',
  `precuni01` decimal(18,2) DEFAULT '0.00',
  PRIMARY KEY (`bodega01`,`codprod01`),
  UNIQUE KEY `codprod01` (`bodega01`,`codprod01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maereq31`
--

CREATE TABLE IF NOT EXISTS `maereq31` (
  `nopedido31` varchar(20) NOT NULL DEFAULT '',
  `codprod31` varchar(50) NOT NULL,
  `ocurren31` varchar(4) NOT NULL DEFAULT '',
  `codcte31` varchar(15) DEFAULT '',
  `nopedido31a` varchar(20) DEFAULT NULL,
  `codprod31b` varchar(50) DEFAULT NULL,
  `nopedido31b` varchar(7) DEFAULT '',
  `cvectenegro31` char(1) DEFAULT '',
  `fecpedido31` datetime DEFAULT '0000-00-00 00:00:00',
  `referencia31` varchar(80) DEFAULT NULL,
  `nomcte31` varchar(40) DEFAULT '',
  `novend31` varchar(4) DEFAULT '',
  `localid31` varchar(4) DEFAULT '',
  `condpag31` varchar(4) DEFAULT '',
  `nopagos31` varchar(4) DEFAULT '',
  `descto31` double(18,2) DEFAULT '0.00',
  `iva31` double(18,2) DEFAULT '0.00',
  `flete31` double(18,2) DEFAULT '0.00',
  `status31` varchar(4) DEFAULT '',
  `telcte31` varchar(10) DEFAULT NULL,
  `dircte31` varchar(40) DEFAULT '',
  `cantped31` double(14,2) DEFAULT '0.00',
  `precuni31` double(14,2) DEFAULT '0.00',
  `cantfac31` double(14,2) DEFAULT '0.00',
  `cantafac31` double(14,2) DEFAULT '0.00',
  `desctoxprod31` double(18,2) DEFAULT '0.00',
  `medid131` double(7,2) DEFAULT '0.00',
  `medid231` double(7,2) DEFAULT '0.00',
  `medid331` double(7,2) DEFAULT '0.00',
  `tipof31` char(1) DEFAULT NULL,
  `factor31` double(7,4) DEFAULT '0.0000',
  `uid31` int(4) unsigned DEFAULT NULL,
  `fleteini31` double(18,2) DEFAULT '0.00',
  `medid431` double(7,2) DEFAULT '0.00',
  `medid531` double(7,2) DEFAULT '0.00',
  `observ31` varchar(255) DEFAULT NULL,
  `cvtransfer31` char(1) DEFAULT 'N',
  `fectransfer31` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bodega31` char(2) DEFAULT '01',
  `desctofp31` double(18,2) DEFAULT '0.00',
  `UIDap31` int(4) unsigned DEFAULT '0',
  `fecestado31` datetime DEFAULT NULL,
  `fecdespacho31` datetime DEFAULT NULL,
  `nomprod31` varchar(255) DEFAULT '',
  `recargos31` double(18,2) DEFAULT '0.00',
  `ice31` double(18,2) DEFAULT '0.00',
  `hisuid31` varchar(255) NOT NULL DEFAULT '',
  `obsgen31` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`nopedido31`,`ocurren31`,`codprod31`),
  KEY `codprod30` (`codprod31`),
  KEY `codcte30` (`codcte31`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeser`
--

CREATE TABLE IF NOT EXISTS `maeser` (
  `serie04` varchar(50) NOT NULL DEFAULT '',
  `tipotra04` char(4) DEFAULT NULL,
  `nocomp04` varchar(20) DEFAULT NULL,
  `ocurren04` varchar(6) DEFAULT NULL,
  `codprod04` varchar(50) NOT NULL,
  `fecmov04` date DEFAULT NULL,
  `cantid04` double(11,2) DEFAULT NULL,
  `valor04` double(16,2) DEFAULT NULL,
  `coddest04` bigint(4) DEFAULT NULL,
  `cvpedid04` char(1) DEFAULT NULL,
  `cvmov04` char(1) DEFAULT '0',
  `precvta04` double(16,2) DEFAULT NULL,
  `descvta04` double(16,2) DEFAULT NULL,
  `cantidkilo04` double(9,2) DEFAULT NULL,
  `nofact04` varchar(20) DEFAULT NULL,
  `chasis04` varchar(20) DEFAULT NULL,
  `anio04` int(4) DEFAULT NULL,
  `color04` varchar(20) DEFAULT NULL,
  `nofactcomp04` varchar(25) DEFAULT NULL,
  `cvanulada04` char(1) DEFAULT 'D',
  `nopedido04` varchar(20) DEFAULT NULL,
  `ocurrenped04` varchar(4) DEFAULT NULL,
  `notransfer04` varchar(20) DEFAULT NULL,
  `ocurrentransfer04` varchar(6) DEFAULT NULL,
  `tipodoctransfer04` varchar(7) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `bodega04` varchar(4) DEFAULT NULL,
  `feccompra04` datetime DEFAULT NULL,
  `cpn04` varchar(50) NOT NULL DEFAULT '',
  `ramv04` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`serie04`,`codprod04`),
  KEY `tipotra04` (`tipotra04`,`nocomp04`,`ocurren04`),
  KEY `codprod04` (`codprod04`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maeserimp`
--

CREATE TABLE IF NOT EXISTS `maeserimp` (
  `tipodoc04` varchar(20) NOT NULL,
  `codprod04` varchar(50) NOT NULL,
  `ocurren04` varchar(4) NOT NULL,
  `serie04` varchar(50) NOT NULL,
  `valor04` double(16,2) DEFAULT '0.00',
  `idbodega04` varchar(4) NOT NULL,
  `status04` varchar(4) NOT NULL,
  `uid04` varchar(4) NOT NULL,
  `motor04` varchar(20) NOT NULL,
  `chasis04` varchar(20) NOT NULL,
  `anio04` int(4) NOT NULL,
  PRIMARY KEY (`tipodoc04`,`codprod04`,`serie04`),
  KEY `idbodega04` (`idbodega04`,`status04`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maesertmp`
--

CREATE TABLE IF NOT EXISTS `maesertmp` (
  `serie04` varchar(50) NOT NULL DEFAULT '',
  `tipotra04` char(2) DEFAULT NULL,
  `nocomp04` varchar(20) DEFAULT NULL,
  `ocurren04` varchar(4) DEFAULT NULL,
  `codprod04` varchar(50) NOT NULL,
  `fecmov04` date DEFAULT NULL,
  `nofact04` varchar(20) DEFAULT NULL,
  `chasis04` varchar(20) DEFAULT NULL,
  `anio04` int(4) DEFAULT NULL,
  `color04` varchar(20) DEFAULT NULL,
  `nofactcomp04` varchar(20) DEFAULT NULL,
  `cvanulada04` char(1) DEFAULT 'D',
  `bodega04` varchar(100) DEFAULT '',
  `feccompra04` datetime DEFAULT NULL,
  `valor04` double(16,2) DEFAULT NULL,
  `cpn04` varchar(50) NOT NULL DEFAULT '',
  `ramv04` varchar(50) NOT NULL DEFAULT '',
  `fecvta04` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `vtabta04` double(18,2) NOT NULL DEFAULT '0.00',
  `iva04` double(18,2) NOT NULL DEFAULT '0.00',
  `flete04` double(18,2) NOT NULL DEFAULT '0.00',
  `nomcte04` varchar(50) NOT NULL DEFAULT '',
  `catcte04` varchar(25) NOT NULL DEFAULT '',
  `descto04` decimal(18,2) NOT NULL DEFAULT '0.00',
  `coddest04` varchar(4) NOT NULL,
  `fecentrega04` date NOT NULL,
  `tipocompra04` varchar(4) NOT NULL,
  PRIMARY KEY (`serie04`),
  KEY `tipotra04` (`tipotra04`,`nocomp04`,`ocurren04`),
  KEY `codprod04` (`codprod04`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maetab`
--

CREATE TABLE IF NOT EXISTS `maetab` (
  `numtab` varchar(4) NOT NULL DEFAULT '',
  `codtab` varchar(5) NOT NULL DEFAULT '',
  `nomtab` varchar(50) NOT NULL DEFAULT '',
  `ad1tab` double(18,2) DEFAULT NULL,
  `ad2tab` double(18,2) DEFAULT NULL,
  `ad3tab` float DEFAULT NULL,
  `ad4tab` double(18,2) DEFAULT NULL,
  `ad5tab` float DEFAULT NULL,
  `ad6tab` float DEFAULT NULL,
  `ad7tab` varchar(600) DEFAULT NULL,
  `ad8tab` varchar(255) DEFAULT NULL,
  `block` char(1) DEFAULT NULL,
  `ad9tab` varchar(255) DEFAULT NULL,
  `ad0tab` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`numtab`,`codtab`),
  KEY `numtab` (`numtab`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maetabhis`
--

CREATE TABLE IF NOT EXISTS `maetabhis` (
  `fecmod` datetime NOT NULL DEFAULT '2000-01-01 00:00:00',
  `numtab` varchar(4) NOT NULL DEFAULT '',
  `codtab` varchar(4) NOT NULL DEFAULT '',
  `nomtab` varchar(50) NOT NULL DEFAULT '',
  `ad1tab` double(18,2) DEFAULT NULL,
  `ad2tab` double(18,2) DEFAULT NULL,
  `ad3tab` float DEFAULT NULL,
  `ad4tab` double(18,2) DEFAULT NULL,
  `ad5tab` float DEFAULT NULL,
  `ad6tab` float DEFAULT NULL,
  `ad7tab` varchar(255) DEFAULT NULL,
  `ad8tab` varchar(255) DEFAULT NULL,
  `block` char(1) DEFAULT NULL,
  `ad9tab` varchar(255) DEFAULT NULL,
  `ad0tab` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`fecmod`,`numtab`,`codtab`,`nomtab`),
  KEY `numtab` (`numtab`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `maetarj30`
--

CREATE TABLE IF NOT EXISTS `maetarj30` (
  `noregistro30` varchar(20) NOT NULL DEFAULT '',
  `codcte30` varchar(20) NOT NULL DEFAULT '',
  `nomcte30` varchar(255) NOT NULL DEFAULT '',
  `fecregistro30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `novend30` varchar(4) NOT NULL DEFAULT '',
  `telcte30` varchar(10) NOT NULL DEFAULT '',
  `dircte30` varchar(255) NOT NULL DEFAULT '',
  `dirprocte30` varchar(255) NOT NULL DEFAULT '',
  `marca30` varchar(4) NOT NULL DEFAULT '',
  `modelo30` varchar(255) NOT NULL DEFAULT '',
  `serie30` varchar(20) NOT NULL DEFAULT '',
  `motor30` varchar(20) NOT NULL DEFAULT '',
  `chasis30` varchar(20) NOT NULL DEFAULT '',
  `unidad30` varchar(20) NOT NULL DEFAULT '',
  `rear30` varchar(20) NOT NULL DEFAULT '',
  `fwd30` varchar(20) NOT NULL DEFAULT '',
  `hidr30` varchar(20) NOT NULL DEFAULT '',
  `bom_h30` varchar(50) NOT NULL DEFAULT '',
  `bom_i30` varchar(50) NOT NULL DEFAULT '',
  `transmision30` varchar(50) NOT NULL DEFAULT '',
  `alernador30` varchar(50) NOT NULL DEFAULT '',
  `especial_o30` varchar(50) NOT NULL DEFAULT '',
  `llanta_d30` varchar(50) NOT NULL DEFAULT '',
  `llanta_t30` varchar(50) NOT NULL DEFAULT '',
  `procedencia30` varchar(50) NOT NULL DEFAULT '',
  `observ30` text NOT NULL,
  `fecllegada30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecventa30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecentrega30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `uidregistro30` int(4) NOT NULL DEFAULT '0',
  `fecultima_mod30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `uid_ult_mod` int(4) NOT NULL DEFAULT '0',
  `indicadorCasa30` int(10) unsigned DEFAULT NULL,
  `indicadorCampania30` int(10) unsigned DEFAULT NULL,
  `estado30` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`noregistro30`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `metdepacf`
--

CREATE TABLE IF NOT EXISTS `metdepacf` (
  `grupperacf` smallint(1) NOT NULL DEFAULT '0',
  `codacf` varchar(50) NOT NULL DEFAULT '',
  `metdepniffaf` varchar(4) NOT NULL DEFAULT '',
  `perdesdemetaf` varchar(4) NOT NULL DEFAULT '',
  `perhastametaf` varchar(4) NOT NULL DEFAULT '',
  `perporcentajemetaf` double(6,2) NOT NULL DEFAULT '0.00',
  `coutadepmetaf` double(6,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`grupperacf`,`codacf`,`metdepniffaf`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movasi`
--

CREATE TABLE IF NOT EXISTS `movasi` (
  `rp06noemp` varchar(25) NOT NULL DEFAULT '',
  `rp06fechareg` date NOT NULL DEFAULT '0000-00-00',
  `rp06tipo` enum('e','s') NOT NULL DEFAULT 'e',
  `rp06observacion` varchar(100) NOT NULL DEFAULT '',
  `rp06hora` time NOT NULL DEFAULT '00:00:00',
  `rp06ip` varchar(25) NOT NULL DEFAULT '',
  `rp06url` varchar(255) NOT NULL DEFAULT '',
  `rp06tipoemp` varchar(8) NOT NULL DEFAULT '',
  `rp06tipoexc` char(1) NOT NULL DEFAULT '',
  PRIMARY KEY (`rp06noemp`,`rp06fechareg`,`rp06tipo`,`rp06hora`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movbco`
--

CREATE TABLE IF NOT EXISTS `movbco` (
  `banco20` varchar(4) NOT NULL DEFAULT '',
  `fecha20` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `agencia20` varchar(30) NOT NULL DEFAULT '',
  `concepto20` varchar(30) NOT NULL DEFAULT '',
  `dbcr20` varchar(4) NOT NULL DEFAULT '',
  `numdoc20` varchar(20) NOT NULL DEFAULT '',
  `valor20` double(18,2) NOT NULL DEFAULT '0.00',
  `estado20` varchar(4) NOT NULL DEFAULT '',
  `tipopac20` varchar(4) NOT NULL DEFAULT '',
  `conciliado20` char(1) NOT NULL,
  `codcons20` varchar(4) DEFAULT NULL,
  `manualcons20` varchar(1) DEFAULT NULL,
  `cerradocons20` int(1) DEFAULT NULL,
  `fechconciliado20` datetime DEFAULT NULL,
  `fechcerrado20` datetime DEFAULT NULL,
  `fechasubido20` datetime NOT NULL,
  `ocurrencia` int(8) NOT NULL,
  PRIMARY KEY (`banco20`,`fecha20`,`agencia20`,`concepto20`,`dbcr20`,`numdoc20`,`valor20`,`ocurrencia`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movche`
--

CREATE TABLE IF NOT EXISTS `movche` (
  `nomovche20` varchar(7) NOT NULL DEFAULT '',
  `numbanco20` varchar(4) DEFAULT NULL,
  `ocumovche20` varchar(4) NOT NULL DEFAULT '',
  `fecmovche20` datetime DEFAULT '0000-00-00 00:00:00',
  `ctamovche20` varchar(15) DEFAULT NULL,
  `codcte20` varchar(15) DEFAULT NULL,
  `nomcte20` varchar(50) DEFAULT NULL,
  `dircte20` varchar(50) DEFAULT NULL,
  `ruccte20` varchar(13) DEFAULT NULL,
  `detalle20` varchar(255) DEFAULT NULL,
  `dbcrche` char(1) DEFAULT NULL,
  `valorche` decimal(18,2) DEFAULT NULL,
  `coddest05` varchar(4) DEFAULT NULL,
  `statusche20` varchar(4) DEFAULT NULL,
  `glose20` varchar(999) DEFAULT NULL,
  `numeroche20` varchar(7) NOT NULL DEFAULT '0',
  `beneficiario20` varchar(150) DEFAULT NULL,
  `fecmovchepos20` datetime DEFAULT '0000-00-00 00:00:00',
  `hische` text,
  PRIMARY KEY (`nomovche20`,`ocumovche20`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movcon`
--

CREATE TABLE IF NOT EXISTS `movcon` (
  `ctahiscon` varchar(25) NOT NULL DEFAULT '',
  `fechahis` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `tipocomptehis` varchar(4) NOT NULL DEFAULT '',
  `numcomptehis` varchar(20) NOT NULL DEFAULT '',
  `ocurrenciahis` varchar(4) NOT NULL DEFAULT '',
  `nochequehis` varchar(20) DEFAULT NULL,
  `dethis` varchar(999) DEFAULT NULL,
  `db1cr2his` char(1) DEFAULT NULL,
  `valorhis` double(18,2) DEFAULT '0.00',
  `sdoctahis` double(18,2) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT '0',
  `estado` varchar(4) NOT NULL DEFAULT '',
  `cvtransferhis` char(1) NOT NULL DEFAULT '',
  `ctamodulo` varchar(15) NOT NULL DEFAULT '',
  `doccons` char(1) DEFAULT NULL,
  `beneficiario` varchar(20) NOT NULL,
  `conciliado` char(1) NOT NULL,
  `codcons` varchar(4) DEFAULT NULL,
  `manualcons` varchar(1) DEFAULT NULL,
  `cerradocons` int(1) DEFAULT NULL,
  `fechconciliado` datetime DEFAULT NULL,
  `fechcerrado` datetime DEFAULT NULL,
  `cc01` varchar(5) NOT NULL,
  `cc02` varchar(5) NOT NULL,
  `cc03` varchar(5) NOT NULL,
  `cc04` varchar(5) NOT NULL,
  `cc05` varchar(5) NOT NULL,
  `pord` double(18,2) NOT NULL,
  `IDB` varchar(5) NOT NULL,
  `tipodoc` varchar(5) NOT NULL,
  `numdoc` varchar(50) NOT NULL,
  `modulo` varchar(5) NOT NULL,
  `cvanuladohis` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`ctahiscon`,`fechahis`,`tipocomptehis`,`numcomptehis`,`ocurrenciahis`),
  KEY `tipocomptehis` (`tipocomptehis`,`numcomptehis`,`ocurrenciahis`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movcon2`
--

CREATE TABLE IF NOT EXISTS `movcon2` (
  `ctahiscon` varchar(25) NOT NULL DEFAULT '',
  `fechahis` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `tipocomptehis` varchar(4) NOT NULL DEFAULT '',
  `numcomptehis` varchar(20) NOT NULL DEFAULT '',
  `ocurrenciahis` varchar(4) NOT NULL DEFAULT '',
  `nochequehis` varchar(20) DEFAULT NULL,
  `dethis` varchar(999) DEFAULT NULL,
  `db1cr2his` char(1) DEFAULT NULL,
  `valorhis` double(18,2) DEFAULT '0.00',
  `sdoctahis` double(18,2) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT '0',
  `estado` varchar(4) NOT NULL DEFAULT '',
  `cvtransferhis` char(1) NOT NULL DEFAULT '',
  `ctamodulo` varchar(15) NOT NULL DEFAULT '',
  `doccons` char(1) DEFAULT NULL,
  `beneficiario` varchar(20) NOT NULL,
  `conciliado` char(1) NOT NULL,
  `codcons` varchar(4) DEFAULT NULL,
  `manualcons` varchar(1) DEFAULT NULL,
  `cerradocons` int(1) DEFAULT NULL,
  `fechconciliado` datetime DEFAULT NULL,
  `fechcerrado` datetime DEFAULT NULL,
  `cc01` varchar(5) NOT NULL,
  `cc02` varchar(5) NOT NULL,
  `cc03` varchar(5) NOT NULL,
  `cc04` varchar(5) NOT NULL,
  `cc05` varchar(5) NOT NULL,
  `pord` double(18,2) NOT NULL,
  `IDB` varchar(5) NOT NULL,
  `tipodoc` varchar(5) NOT NULL,
  `numdoc` varchar(50) NOT NULL,
  `modulo` varchar(5) NOT NULL,
  PRIMARY KEY (`ctahiscon`,`fechahis`,`tipocomptehis`,`numcomptehis`,`ocurrenciahis`),
  KEY `tipocomptehis` (`tipocomptehis`,`numcomptehis`,`ocurrenciahis`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movconbk`
--

CREATE TABLE IF NOT EXISTS `movconbk` (
  `ctahiscon` varchar(25) NOT NULL DEFAULT '',
  `fechahis` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `tipocomptehis` varchar(4) NOT NULL DEFAULT '',
  `numcomptehis` varchar(20) NOT NULL DEFAULT '',
  `ocurrenciahis` varchar(4) NOT NULL DEFAULT '',
  `nochequehis` varchar(7) DEFAULT NULL,
  `dethis` varchar(255) DEFAULT NULL,
  `db1cr2his` char(1) DEFAULT NULL,
  `valorhis` double(18,2) DEFAULT '0.00',
  `sdoctahis` double(18,2) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT '0',
  `estado` varchar(4) NOT NULL DEFAULT '',
  `cvtransferhis` char(1) NOT NULL DEFAULT '',
  `ctamodulo` varchar(15) NOT NULL DEFAULT '',
  `doccons` char(1) DEFAULT NULL,
  `beneficiario` varchar(20) NOT NULL,
  `conciliado` varchar(1) DEFAULT NULL,
  `codcons` varchar(4) DEFAULT NULL,
  `manualcons` varchar(1) DEFAULT NULL,
  `cerradocons` int(1) DEFAULT NULL,
  PRIMARY KEY (`ctahiscon`,`fechahis`,`tipocomptehis`,`numcomptehis`,`ocurrenciahis`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movcot`
--

CREATE TABLE IF NOT EXISTS `movcot` (
  `codcte43` varchar(20) DEFAULT NULL,
  `tipodoc43` varchar(4) NOT NULL DEFAULT '',
  `numdoc43` varchar(20) NOT NULL DEFAULT '',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `cocte43` varchar(15) DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `tipdoc43` char(2) DEFAULT NULL,
  `numvencob43` varchar(4) DEFAULT NULL,
  `fedoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  `detalle43` varchar(255) DEFAULT NULL,
  `cvanioant43` char(1) NOT NULL DEFAULT '',
  `cvdivisa43` char(1) DEFAULT NULL,
  `valdivisa43` int(8) DEFAULT NULL,
  `valdivisaori43` int(8) DEFAULT NULL,
  `factcompra43` varchar(20) DEFAULT NULL,
  `seriecompra43` varchar(6) DEFAULT NULL,
  `autocompra43` varchar(10) DEFAULT NULL,
  `codret43` varchar(15) DEFAULT NULL,
  `valini43` double(18,2) DEFAULT NULL,
  `numcuotasord43` int(2) unsigned DEFAULT NULL,
  `valormov43` double(18,2) DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` date DEFAULT NULL,
  `codpagounif43` char(2) DEFAULT '',
  `tipodocdb43` char(2) DEFAULT NULL,
  `numdocdb43` varchar(20) DEFAULT NULL,
  `ocurrecdocdb43` varchar(4) DEFAULT NULL,
  `numrecibo43` varchar(20) DEFAULT NULL,
  `valorabono43` double(18,2) DEFAULT NULL,
  `efectcheque43` int(1) DEFAULT NULL,
  `saldoexceso43` double(18,2) DEFAULT NULL,
  `saldocte43` double(18,2) DEFAULT NULL,
  `codpago43` varchar(4) DEFAULT NULL,
  `numdocpago43` varchar(255) DEFAULT NULL,
  `obsdocpago43` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `cvtransfer43` char(1) DEFAULT 'N',
  `fectransfer43` date DEFAULT NULL,
  `fecvendoc43` date DEFAULT NULL,
  `fecvenret43` date DEFAULT NULL,
  `numautoret43` varchar(20) DEFAULT NULL,
  `sdoexeact43` double(18,2) NOT NULL DEFAULT '0.00',
  `sdoregact43` double(18,2) NOT NULL DEFAULT '0.00',
  `conta43` char(1) NOT NULL DEFAULT '',
  `cvanulado43` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`),
  KEY `codcte43` (`codcte43`),
  KEY `tipodocdb43` (`tipodocdb43`,`numdocdb43`,`ocurrecdocdb43`),
  KEY `docpago43` (`efectcheque43`),
  KEY `obspago43` (`obsdocpago43`),
  KEY `numdocpago43` (`numdocpago43`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movcte`
--

CREATE TABLE IF NOT EXISTS `movcte` (
  `codcte43` varchar(20) DEFAULT NULL,
  `tipodoc43` varchar(4) NOT NULL DEFAULT '',
  `numdoc43` varchar(20) NOT NULL DEFAULT '',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `cocte43` varchar(15) DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `tipdoc43` char(2) DEFAULT NULL,
  `numvencob43` varchar(4) DEFAULT NULL,
  `fedoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  `detalle43` varchar(255) DEFAULT NULL,
  `cvanioant43` char(1) NOT NULL DEFAULT '',
  `cvdivisa43` char(1) DEFAULT NULL,
  `valdivisa43` int(8) DEFAULT NULL,
  `valdivisaori43` int(8) DEFAULT NULL,
  `factcompra43` varchar(20) DEFAULT NULL,
  `seriecompra43` varchar(6) DEFAULT NULL,
  `autocompra43` varchar(10) DEFAULT NULL,
  `codret43` varchar(15) DEFAULT NULL,
  `valini43` double(18,2) DEFAULT NULL,
  `numcuotasord43` int(2) unsigned DEFAULT NULL,
  `valormov43` double(18,2) DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` date DEFAULT NULL,
  `codpagounif43` char(4) DEFAULT NULL,
  `tipodocdb43` char(2) DEFAULT NULL,
  `numdocdb43` varchar(20) DEFAULT NULL,
  `ocurrecdocdb43` varchar(4) DEFAULT NULL,
  `numrecibo43` varchar(20) DEFAULT NULL,
  `valorabono43` double(18,2) DEFAULT NULL,
  `efectcheque43` varchar(4) DEFAULT NULL,
  `saldoexceso43` double(18,2) DEFAULT NULL,
  `saldocte43` double(18,2) DEFAULT NULL,
  `codpago43` varchar(4) DEFAULT NULL,
  `numdocpago43` varchar(255) DEFAULT NULL,
  `obsdocpago43` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `cvtransfer43` char(1) DEFAULT 'N',
  `fectransfer43` date DEFAULT NULL,
  `fecvendoc43` date DEFAULT NULL,
  `fecvenret43` date DEFAULT NULL,
  `numautoret43` varchar(20) DEFAULT NULL,
  `sdoexeact43` double(18,2) NOT NULL DEFAULT '0.00',
  `sdoregact43` double(18,2) NOT NULL DEFAULT '0.00',
  `conta43` char(1) NOT NULL DEFAULT '',
  `cvanulado43` char(1) NOT NULL DEFAULT 'N',
  `relacioncob43` varchar(20) DEFAULT NULL,
  `estadocob43` varchar(4) DEFAULT NULL,
  `nuevocodpago43` varchar(4) DEFAULT NULL,
  `porccomision1` double(18,2) DEFAULT '0.00',
  `porccomision2` double(18,2) DEFAULT '0.00',
  `porcdesctocomision1` double(18,2) DEFAULT '0.00',
  `porcdesctocomision2` double(18,2) DEFAULT '0.00',
  `ope43` varchar(5) NOT NULL,
  `tfin43` varchar(5) NOT NULL,
  `fin43` varchar(5) NOT NULL,
  `ban43` varchar(5) NOT NULL,
  `cobrador43` varchar(4) NOT NULL DEFAULT '',
  `coordinador43` varchar(4) NOT NULL DEFAULT '',
  `cierre` varchar(1) NOT NULL DEFAULT 'N',
  `idcierre` varchar(21) NOT NULL DEFAULT '',
  `num_bco_dep` varchar(4) NOT NULL DEFAULT '',
  `num_deposito` varchar(50) NOT NULL DEFAULT '',
  `num_doc_cont` varchar(20) NOT NULL DEFAULT '',
  `tip_doc_cont` varchar(4) NOT NULL DEFAULT '',
  `IDB` varchar(5) DEFAULT NULL,
  `tipocomptehis` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`),
  KEY `codcte43` (`codcte43`),
  KEY `tipodocdb43` (`tipodocdb43`,`numdocdb43`,`ocurrecdocdb43`),
  KEY `docpago43` (`efectcheque43`),
  KEY `obspago43` (`obsdocpago43`),
  KEY `numdocpago43` (`numdocpago43`),
  KEY `cierre` (`cierre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `movcte2`
--

CREATE TABLE IF NOT EXISTS `movcte2` (
  `codcte43` varchar(20) DEFAULT NULL,
  `tipodoc43` varchar(4) NOT NULL DEFAULT '',
  `numdoc43` varchar(20) NOT NULL DEFAULT '',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `cocte43` varchar(15) DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `tipdoc43` char(2) DEFAULT NULL,
  `numvencob43` varchar(4) DEFAULT NULL,
  `fedoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  `detalle43` varchar(255) DEFAULT NULL,
  `cvanioant43` char(1) NOT NULL DEFAULT '',
  `cvdivisa43` char(1) DEFAULT NULL,
  `valdivisa43` int(8) DEFAULT NULL,
  `valdivisaori43` int(8) DEFAULT NULL,
  `factcompra43` varchar(20) DEFAULT NULL,
  `seriecompra43` varchar(6) DEFAULT NULL,
  `autocompra43` varchar(10) DEFAULT NULL,
  `codret43` varchar(15) DEFAULT NULL,
  `valini43` double(18,2) DEFAULT NULL,
  `numcuotasord43` int(2) unsigned DEFAULT NULL,
  `valormov43` double(18,2) DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` date DEFAULT NULL,
  `codpagounif43` char(4) DEFAULT NULL,
  `tipodocdb43` char(4) DEFAULT NULL,
  `numdocdb43` varchar(20) DEFAULT NULL,
  `ocurrecdocdb43` varchar(4) DEFAULT NULL,
  `numrecibo43` varchar(20) DEFAULT NULL,
  `valorabono43` double(18,2) DEFAULT NULL,
  `efectcheque43` varchar(4) DEFAULT NULL,
  `saldoexceso43` double(18,2) DEFAULT NULL,
  `saldocte43` double(18,2) DEFAULT NULL,
  `codpago43` varchar(4) DEFAULT NULL,
  `numdocpago43` varchar(255) DEFAULT NULL,
  `obsdocpago43` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `cvtransfer43` char(1) DEFAULT 'N',
  `fectransfer43` date DEFAULT NULL,
  `fecvendoc43` date DEFAULT NULL,
  `fecvenret43` date DEFAULT NULL,
  `numautoret43` varchar(20) DEFAULT NULL,
  `cvanulado43` char(1) NOT NULL DEFAULT 'N',
  `conta43` char(1) NOT NULL DEFAULT '',
  `relacioncob43` varchar(20) DEFAULT NULL,
  `estadocob43` varchar(4) DEFAULT NULL,
  `nuevocodpago43` varchar(4) DEFAULT NULL,
  `porccomision1` double(18,2) DEFAULT '0.00',
  `porccomision2` double(18,2) DEFAULT '0.00',
  `porcdesctocomision1` double(18,2) DEFAULT '0.00',
  `porcdesctocomision2` double(18,2) DEFAULT '0.00',
  `ope43` varchar(5) NOT NULL,
  `tfin43` varchar(5) NOT NULL,
  `fin43` varchar(5) NOT NULL,
  `ban43` varchar(5) NOT NULL,
  `cobrador43` varchar(4) NOT NULL DEFAULT '',
  `coordinador43` varchar(4) NOT NULL DEFAULT '',
  `cierre` varchar(1) NOT NULL DEFAULT 'N',
  `idcierre` varchar(21) NOT NULL DEFAULT '',
  `num_bco_dep` varchar(4) NOT NULL DEFAULT '',
  `num_deposito` varchar(50) NOT NULL DEFAULT '',
  `num_doc_cont` varchar(20) NOT NULL DEFAULT '',
  `tip_doc_cont` varchar(4) NOT NULL DEFAULT '',
  `IDB` varchar(5) DEFAULT NULL,
  `tipocomptehis` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`),
  KEY `codcte43` (`codcte43`),
  KEY `tipodocdb43` (`tipodocdb43`,`numdocdb43`,`ocurrecdocdb43`),
  KEY `docpago43` (`efectcheque43`),
  KEY `obspago43` (`obsdocpago43`),
  KEY `numdocpago43` (`numdocpago43`),
  KEY `cierre` (`cierre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movcte2his`
--

CREATE TABLE IF NOT EXISTS `movcte2his` (
  `codcte43` varchar(20) DEFAULT NULL,
  `tipodoc43` varchar(4) NOT NULL DEFAULT '',
  `numdoc43` varchar(20) NOT NULL DEFAULT '',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `cocte43` varchar(15) DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `tipdoc43` char(2) DEFAULT NULL,
  `numvencob43` varchar(4) DEFAULT NULL,
  `fedoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  `detalle43` varchar(255) DEFAULT NULL,
  `cvanioant43` char(1) NOT NULL DEFAULT '',
  `cvdivisa43` char(1) DEFAULT NULL,
  `valdivisa43` int(8) DEFAULT NULL,
  `valdivisaori43` int(8) DEFAULT NULL,
  `factcompra43` varchar(20) DEFAULT NULL,
  `seriecompra43` varchar(6) DEFAULT NULL,
  `autocompra43` varchar(10) DEFAULT NULL,
  `codret43` varchar(15) DEFAULT NULL,
  `valini43` double(18,2) DEFAULT NULL,
  `numcuotasord43` int(2) unsigned DEFAULT NULL,
  `valormov43` double(18,2) DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` date DEFAULT NULL,
  `codpagounif43` char(4) DEFAULT NULL,
  `tipodocdb43` char(2) DEFAULT NULL,
  `numdocdb43` varchar(20) DEFAULT NULL,
  `ocurrecdocdb43` varchar(4) DEFAULT NULL,
  `numrecibo43` varchar(20) DEFAULT NULL,
  `valorabono43` double(18,2) DEFAULT NULL,
  `efectcheque43` varchar(4) DEFAULT NULL,
  `saldoexceso43` double(18,2) DEFAULT NULL,
  `saldocte43` double(18,2) DEFAULT NULL,
  `codpago43` varchar(4) DEFAULT NULL,
  `numdocpago43` varchar(255) DEFAULT NULL,
  `obsdocpago43` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `cvtransfer43` char(1) DEFAULT 'N',
  `fectransfer43` date DEFAULT NULL,
  `fecvendoc43` date DEFAULT NULL,
  `fecvenret43` date DEFAULT NULL,
  `numautoret43` varchar(20) DEFAULT NULL,
  `sdoexeact43` double(18,2) NOT NULL DEFAULT '0.00',
  `sdoregact43` double(18,2) NOT NULL DEFAULT '0.00',
  `conta43` char(1) NOT NULL DEFAULT '',
  `cvanulado43` char(1) NOT NULL DEFAULT 'N',
  `relacioncob43` varchar(20) DEFAULT NULL,
  `estadocob43` varchar(4) DEFAULT NULL,
  `nuevocodpago43` varchar(4) DEFAULT NULL,
  `porccomision1` double(18,2) DEFAULT '0.00',
  `porccomision2` double(18,2) DEFAULT '0.00',
  `porcdesctocomision1` double(18,2) DEFAULT '0.00',
  `porcdesctocomision2` double(18,2) DEFAULT '0.00',
  `ope43` varchar(5) NOT NULL,
  `tfin43` varchar(5) NOT NULL,
  `fin43` varchar(5) NOT NULL,
  `ban43` varchar(5) NOT NULL,
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`),
  KEY `codcte43` (`codcte43`),
  KEY `tipodocdb43` (`tipodocdb43`,`numdocdb43`,`ocurrecdocdb43`),
  KEY `docpago43` (`efectcheque43`),
  KEY `obspago43` (`obsdocpago43`),
  KEY `numdocpago43` (`numdocpago43`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `movctecal1`
--

CREATE TABLE IF NOT EXISTS `movctecal1` (
  `codcte44` varchar(20) NOT NULL DEFAULT '',
  `tipodoc44` varchar(4) NOT NULL DEFAULT '',
  `numdoc44` varchar(20) NOT NULL DEFAULT '',
  `ocurren44` varchar(4) NOT NULL DEFAULT '',
  `feccalifacion44` datetime DEFAULT NULL,
  `tipocalificacion44` char(1) DEFAULT NULL,
  `codestadoreg44` varchar(4) DEFAULT NULL,
  `codcalificacion44` varchar(4) DEFAULT NULL,
  `fecdevengado44` date DEFAULT NULL,
  `valordevengado44` double(18,2) DEFAULT NULL,
  `hiscalificacion44` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `saldoregmov44` double(18,2) DEFAULT NULL,
  `diasvencidos44` int(4) DEFAULT NULL,
  `id44` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `secuencia44` int(4) DEFAULT '0',
  `fecdoc44` datetime DEFAULT NULL,
  `feccobro44` date DEFAULT NULL,
  `totdoc44` double(18,2) DEFAULT NULL,
  `valormov44` double(18,2) DEFAULT NULL,
  PRIMARY KEY (`id44`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `movctecal2`
--

CREATE TABLE IF NOT EXISTS `movctecal2` (
  `codcte44` varchar(20) NOT NULL DEFAULT '',
  `tipodoc44` varchar(4) NOT NULL DEFAULT '',
  `numdoc44` varchar(20) NOT NULL DEFAULT '',
  `ocurren44` varchar(4) NOT NULL DEFAULT '',
  `feccalifacion44` datetime DEFAULT NULL,
  `tipocalificacion44` char(1) DEFAULT NULL,
  `codestadoreg44` varchar(4) DEFAULT NULL,
  `codcalificacion44` varchar(4) DEFAULT NULL,
  `fecdevengado44` date DEFAULT NULL,
  `valordevengado44` double(18,2) DEFAULT NULL,
  `hiscalificacion44` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `saldoregmov44` double(18,2) DEFAULT NULL,
  `diasvencidos44` int(4) DEFAULT NULL,
  `id44` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `secuencia44` int(4) DEFAULT '0',
  `fecdoc44` datetime DEFAULT NULL,
  `feccobro44` date DEFAULT NULL,
  `totdoc44` double(18,2) DEFAULT NULL,
  `valormov44` double(18,2) DEFAULT NULL,
  PRIMARY KEY (`id44`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `movpag`
--

CREATE TABLE IF NOT EXISTS `movpag` (
  `codcte43` varchar(15) NOT NULL DEFAULT '',
  `tipodoc43` char(4) NOT NULL DEFAULT '',
  `numdoc43` varchar(20) NOT NULL DEFAULT '',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `cocte43` varchar(15) DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `tipdoc43` char(2) DEFAULT NULL,
  `numvencob43` varchar(4) DEFAULT NULL,
  `fedoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  `detalle43` varchar(255) DEFAULT NULL,
  `cvanioant43` char(1) DEFAULT NULL,
  `cvdivisa43` char(1) DEFAULT NULL,
  `valdivisa43` int(8) DEFAULT NULL,
  `valdivisaori43` int(8) DEFAULT NULL,
  `factcompra43` varchar(20) DEFAULT NULL,
  `seriecompra43` varchar(8) DEFAULT NULL,
  `autocompra43` varchar(10) DEFAULT NULL,
  `codret43` varchar(15) DEFAULT NULL,
  `valini43` double(18,2) DEFAULT NULL,
  `numcuotasord43` int(2) unsigned DEFAULT NULL,
  `valormov43` double(18,2) DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` date DEFAULT NULL,
  `codpagounif43` char(4) DEFAULT NULL,
  `tipodocdb43` char(2) DEFAULT NULL,
  `numdocdb43` varchar(20) DEFAULT NULL,
  `ocurrecdocdb43` varchar(4) DEFAULT NULL,
  `numrecibo43` varchar(20) DEFAULT NULL,
  `valorabono43` double(18,2) DEFAULT NULL,
  `efectcheque43` varchar(4) DEFAULT NULL,
  `saldoexceso43` double(18,2) DEFAULT NULL,
  `saldocte43` double(18,2) DEFAULT NULL,
  `codpago43` varchar(4) DEFAULT NULL,
  `numdocpago43` varchar(255) DEFAULT NULL,
  `obsdocpago43` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `cvtransfer43` char(1) DEFAULT 'N',
  `fectransfer43` date DEFAULT NULL,
  `tipoimp43` int(4) DEFAULT NULL,
  `porcimp43` double(5,2) DEFAULT '0.00',
  `bienserv43` int(1) unsigned DEFAULT '0',
  `credgast43` char(2) DEFAULT '00',
  `fecvencompra43` date DEFAULT NULL,
  `fecvenret43` date DEFAULT NULL,
  `numautoret43` varchar(20) DEFAULT NULL,
  `sdoexeact43` double(18,2) NOT NULL DEFAULT '0.00',
  `sdoregact43` double(18,2) NOT NULL DEFAULT '0.00',
  `conta43` char(1) NOT NULL DEFAULT '',
  `cvanulado43` char(1) NOT NULL DEFAULT 'N',
  `baseret43` float(18,2) NOT NULL DEFAULT '0.00',
  `retenciones43` varchar(255) DEFAULT NULL,
  `ret_con_iva43` varchar(1) NOT NULL DEFAULT '',
  `IDB` varchar(5) DEFAULT NULL,
  `tipocomptehis` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`,`codcte43`),
  KEY `codcte43` (`codcte43`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `movpag2`
--

CREATE TABLE IF NOT EXISTS `movpag2` (
  `codcte43` varchar(15) NOT NULL DEFAULT '',
  `tipodoc43` char(4) NOT NULL DEFAULT '',
  `numdoc43` varchar(20) NOT NULL DEFAULT '',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `cocte43` varchar(15) DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `tipdoc43` char(2) DEFAULT NULL,
  `numvencob43` varchar(4) DEFAULT NULL,
  `fedoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  `detalle43` varchar(255) DEFAULT NULL,
  `cvanioant43` char(1) DEFAULT NULL,
  `cvdivisa43` char(1) DEFAULT NULL,
  `valdivisa43` int(8) DEFAULT NULL,
  `valdivisaori43` int(8) DEFAULT NULL,
  `factcompra43` varchar(20) DEFAULT NULL,
  `seriecompra43` varchar(8) DEFAULT NULL,
  `autocompra43` varchar(10) DEFAULT NULL,
  `codret43` varchar(15) DEFAULT NULL,
  `valini43` double(18,2) DEFAULT NULL,
  `numcuotasord43` int(2) unsigned DEFAULT NULL,
  `valormov43` double(18,2) DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` date DEFAULT NULL,
  `codpagounif43` char(4) DEFAULT NULL,
  `tipodocdb43` char(2) DEFAULT NULL,
  `numdocdb43` varchar(20) DEFAULT NULL,
  `ocurrecdocdb43` varchar(4) DEFAULT NULL,
  `numrecibo43` varchar(20) DEFAULT NULL,
  `valorabono43` double(18,2) DEFAULT NULL,
  `efectcheque43` varchar(4) DEFAULT NULL,
  `saldoexceso43` double(18,2) DEFAULT NULL,
  `saldocte43` double(18,2) DEFAULT NULL,
  `codpago43` varchar(4) DEFAULT NULL,
  `numdocpago43` varchar(255) DEFAULT NULL,
  `obsdocpago43` varchar(255) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `cvtransfer43` char(1) DEFAULT 'N',
  `fectransfer43` date DEFAULT NULL,
  `fecvencompra43` date DEFAULT NULL,
  `fecvenret43` date DEFAULT NULL,
  `numautoret43` varchar(20) DEFAULT NULL,
  `credgast43` char(2) NOT NULL DEFAULT '',
  `cvanulado43` char(1) NOT NULL DEFAULT 'N',
  `conta43` char(1) NOT NULL DEFAULT '',
  `cont43` char(1) NOT NULL DEFAULT '',
  `IDB` varchar(5) DEFAULT NULL,
  `tipocomptehis` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`,`codcte43`),
  KEY `codcte43` (`codcte43`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movpagauto`
--

CREATE TABLE IF NOT EXISTS `movpagauto` (
  `cascte44` varchar(13) NOT NULL DEFAULT '',
  `seriecompra44` varchar(8) NOT NULL DEFAULT '',
  `factcompra44` varchar(7) NOT NULL DEFAULT '',
  `numdocfin44` varchar(7) NOT NULL DEFAULT '',
  `autocompra44` varchar(10) NOT NULL DEFAULT '',
  `fecvencompra44` date NOT NULL DEFAULT '0000-00-00',
  `tipodoc44` varchar(4) NOT NULL DEFAULT '',
  PRIMARY KEY (`cascte44`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movped`
--

CREATE TABLE IF NOT EXISTS `movped` (
  `codped02` int(10) DEFAULT NULL,
  `codprod02` varchar(50) DEFAULT NULL,
  `cantprod02` double(13,2) DEFAULT NULL,
  `totreg02` double(18,2) DEFAULT NULL,
  `detreg02` varchar(255) DEFAULT '0',
  `cantdesp02` double(13,2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movpro`
--

CREATE TABLE IF NOT EXISTS `movpro` (
  `TIPOTRA03` varchar(4) NOT NULL DEFAULT '0',
  `NOCOMP03` varchar(20) NOT NULL DEFAULT '0',
  `OCURREN03` varchar(6) NOT NULL DEFAULT '',
  `CODPROD03` varchar(50) DEFAULT NULL,
  `FECMOV03` datetime DEFAULT NULL,
  `TIPTRAN03` tinyint(2) DEFAULT NULL,
  `CANTID03` double(13,2) DEFAULT NULL,
  `VALOR03` double(18,2) DEFAULT NULL,
  `PU03` double(18,2) DEFAULT NULL,
  `CODDEST03` varchar(4) DEFAULT NULL,
  `FECHAM03` datetime DEFAULT NULL,
  `CANTACT03` double(13,2) DEFAULT NULL,
  `VALACT03` double(18,2) DEFAULT NULL,
  `PRECUNI03` double(18,2) DEFAULT NULL,
  `PRECVTA03` double(18,2) DEFAULT NULL,
  `DESCVTA03` double(18,4) DEFAULT NULL,
  `CANTIDKILO03` double(13,2) DEFAULT NULL,
  `NOFACT03` varchar(20) DEFAULT NULL,
  `CVDIVISA03` tinyint(1) DEFAULT NULL,
  `VALDIVISA03` smallint(6) DEFAULT NULL,
  `nomprodesp03` varchar(255) DEFAULT NULL,
  `nomdest03` varchar(255) DEFAULT NULL,
  `med103` double(10,5) DEFAULT '0.00000',
  `med203` double(10,5) DEFAULT '0.00000',
  `med303` double(10,5) DEFAULT '0.00000',
  `med403` double(10,5) DEFAULT '0.00000',
  `med503` double(10,5) DEFAULT '0.00000',
  `nopedido03` varchar(20) NOT NULL,
  `desctotvta03` double(18,4) DEFAULT NULL,
  `desctotfp03` double(18,4) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `recargos03` double(18,4) DEFAULT '0.0000',
  `tipfact03` varchar(4) NOT NULL DEFAULT '',
  `detalle03` varchar(255) DEFAULT NULL,
  `cvanulado03` char(1) NOT NULL DEFAULT 'N',
  `conta03` char(1) NOT NULL DEFAULT '',
  `fectranspor03` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `numtranspor03` varchar(25) NOT NULL DEFAULT '',
  `transpor03` varchar(4) NOT NULL DEFAULT '',
  `ayudante03` varchar(4) NOT NULL DEFAULT '',
  `precfob03` double(18,2) NOT NULL DEFAULT '0.00',
  `ocuped03` varchar(4) NOT NULL,
  `beneficiario03` varchar(20) NOT NULL,
  `iva03` double(6,2) DEFAULT NULL,
  `flete03` double(18,6) DEFAULT '0.000000',
  `lotdes03` varchar(50) NOT NULL,
  `lothas03` varchar(50) NOT NULL,
  `lotfabrica03` varchar(255) NOT NULL,
  `codbarempaque03` varchar(50) DEFAULT NULL,
  `unidadempaque03` double(18,2) DEFAULT NULL,
  `cantcon03` double(13,2) NOT NULL,
  PRIMARY KEY (`TIPOTRA03`,`NOCOMP03`,`OCURREN03`),
  KEY `codprod03` (`CODPROD03`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Movimientos de Producto';

-- --------------------------------------------------------

--
-- Table structure for table `movprogsop`
--

CREATE TABLE IF NOT EXISTS `movprogsop` (
  `mp01id` int(11) NOT NULL,
  `mp01programas` varchar(255) NOT NULL,
  `mp01uid` int(4) NOT NULL,
  `ms01fecpeticion` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ms01fecentrega` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ms01ferecpcion` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ms01fecterminacion` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ms01observacion` varchar(255) NOT NULL,
  `ms01empresa` varchar(255) NOT NULL DEFAULT '',
  `ms01lectura` char(1) NOT NULL DEFAULT 'N',
  `ms01personalizado` char(1) NOT NULL DEFAULT 'N'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movproimp30`
--

CREATE TABLE IF NOT EXISTS `movproimp30` (
  `tipodoc30` char(20) DEFAULT NULL,
  `nopedido30` varchar(20) NOT NULL DEFAULT '',
  `codprod30` varchar(50) NOT NULL,
  `ocurren30` varchar(4) NOT NULL DEFAULT '',
  `codcte30` varchar(15) DEFAULT '',
  `nopedido30a` varchar(20) DEFAULT NULL,
  `codprod30b` varchar(50) DEFAULT NULL,
  `nopedido30b` varchar(7) DEFAULT '',
  `cvectenegro30` char(1) DEFAULT '',
  `fecpedido30` datetime DEFAULT '0000-00-00 00:00:00',
  `referencia30` varchar(80) DEFAULT NULL,
  `nomcte30` varchar(255) DEFAULT NULL,
  `novend30` varchar(4) DEFAULT '',
  `localid30` varchar(4) DEFAULT '',
  `condpag30` varchar(4) DEFAULT '',
  `nopagos30` varchar(4) DEFAULT '',
  `descto30` double(18,2) DEFAULT '0.00',
  `iva30` double(18,2) DEFAULT '0.00',
  `flete30` double(18,2) DEFAULT '0.00',
  `status30` varchar(4) DEFAULT '',
  `telcte30` varchar(10) DEFAULT NULL,
  `dircte30` varchar(40) DEFAULT '',
  `cantped30` double(14,2) DEFAULT '0.00',
  `precuni30` double(18,9) DEFAULT '0.000000000',
  `cantfac30` double(14,2) DEFAULT '0.00',
  `cantafac30` double(14,2) DEFAULT '0.00',
  `desctoxprod30` double(18,2) DEFAULT '0.00',
  `medid130` double(7,2) DEFAULT '0.00',
  `medid230` double(7,2) DEFAULT '0.00',
  `medid330` double(7,2) DEFAULT '0.00',
  `tipof30` char(1) DEFAULT NULL,
  `factor30` double(7,4) DEFAULT '0.0000',
  `uid` int(4) unsigned DEFAULT NULL,
  `fleteini30` double(18,2) DEFAULT '0.00',
  `medid430` double(7,2) DEFAULT '0.00',
  `medid530` double(7,2) DEFAULT '0.00',
  `observ30` varchar(255) DEFAULT NULL,
  `cvtransfer30` char(1) DEFAULT 'N',
  `fectransfer30` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bodega30` varchar(4) DEFAULT NULL,
  `desctofp30` double(18,2) DEFAULT '0.00',
  `UIDap` int(4) unsigned DEFAULT '0',
  `fecestado30` datetime DEFAULT NULL,
  `fecdespacho30` datetime DEFAULT NULL,
  `nomprod30` varchar(255) DEFAULT '',
  `recargos30` double(18,2) DEFAULT '0.00',
  `ice30` double(18,2) DEFAULT '0.00',
  `local30` varchar(4) DEFAULT NULL,
  `origen30` varchar(4) DEFAULT NULL,
  `factura30` varchar(20) DEFAULT NULL,
  `albaran30` varchar(10) DEFAULT NULL,
  `hisuid` varchar(255) NOT NULL DEFAULT '',
  `obsgen30` varchar(255) NOT NULL DEFAULT '',
  `tipooper30` char(1) DEFAULT NULL,
  `fob30` double(14,6) DEFAULT '0.000000',
  `gasto30` double(14,2) NOT NULL DEFAULT '0.00',
  `pesoneto30` double(18,6) NOT NULL DEFAULT '0.000000',
  `factorpeso30` varchar(4) DEFAULT NULL,
  `piva30` double(6,2) DEFAULT NULL,
  `lotdes30` varchar(50) DEFAULT NULL,
  `lothas30` varchar(50) DEFAULT NULL,
  `nomcpartida30` varchar(80) DEFAULT NULL,
  `boddesp30` varchar(4) NOT NULL DEFAULT '01',
  `factorpro30` double(18,2) NOT NULL DEFAULT '0.00',
  `portje30` double(18,2) NOT NULL DEFAULT '0.00',
  `cifa30` double(18,2) NOT NULL DEFAULT '0.00',
  `cifa_u30` double(18,2) NOT NULL DEFAULT '0.00',
  `gstofabrica30` double(18,2) NOT NULL DEFAULT '0.00',
  `gstoflete30` double(18,2) NOT NULL DEFAULT '0.00',
  `gstoseguro30` double(18,2) NOT NULL DEFAULT '0.00',
  `fcseguro30` int(11) NOT NULL DEFAULT '0',
  `codmoneda30` varchar(4) NOT NULL DEFAULT '0000',
  `cotizamoneda30` float(12,6) NOT NULL DEFAULT '1.000000',
  `precunimone30` double(18,9) DEFAULT '0.000000000',
  `trasporte30` varchar(4) NOT NULL,
  `lugarentrega30` varchar(4) NOT NULL,
  `negocio30` varchar(4) NOT NULL,
  `puerto30` varchar(4) NOT NULL,
  PRIMARY KEY (`nopedido30`,`ocurren30`,`codprod30`),
  KEY `codprod30` (`codprod30`),
  KEY `codcte30` (`codcte30`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movprotmf`
--

CREATE TABLE IF NOT EXISTS `movprotmf` (
  `TIPOTRA03` varchar(4) NOT NULL DEFAULT '0',
  `NOCOMP03` varchar(20) NOT NULL DEFAULT '0',
  `OCURREN03` varchar(4) NOT NULL DEFAULT '',
  `CODPROD03` varchar(50) DEFAULT NULL,
  `FECMOV03` datetime DEFAULT NULL,
  `TIPTRAN03` tinyint(2) DEFAULT NULL,
  `CANTID03` double(13,2) DEFAULT NULL,
  `VALOR03` double(18,2) DEFAULT NULL,
  `PU03` double(18,2) DEFAULT NULL,
  `CODDEST03` varchar(4) DEFAULT NULL,
  `FECHAM03` datetime DEFAULT NULL,
  `CANTACT03` double(13,2) DEFAULT NULL,
  `VALACT03` double(18,2) DEFAULT NULL,
  `PRECUNI03` double(18,2) DEFAULT NULL,
  `PRECVTA03` double(18,2) DEFAULT NULL,
  `DESCVTA03` double(18,2) DEFAULT NULL,
  `CANTIDKILO03` double(13,2) DEFAULT NULL,
  `NOFACT03` varchar(20) DEFAULT NULL,
  `CVDIVISA03` tinyint(1) DEFAULT NULL,
  `VALDIVISA03` smallint(6) DEFAULT NULL,
  `nomprodesp03` varchar(255) DEFAULT NULL,
  `nomdest03` varchar(255) DEFAULT NULL,
  `med103` double(10,5) DEFAULT '0.00000',
  `med203` double(10,5) DEFAULT '0.00000',
  `med303` double(10,5) DEFAULT '0.00000',
  `med403` double(10,5) DEFAULT '0.00000',
  `med503` double(10,5) DEFAULT '0.00000',
  `nopedido03` varchar(20) DEFAULT NULL,
  `desctotvta03` double(18,2) DEFAULT NULL,
  `desctotfp03` double(18,2) DEFAULT NULL,
  `UID` int(4) unsigned DEFAULT NULL,
  `recargos03` double(18,2) DEFAULT '0.00',
  `tipfact03` varchar(4) NOT NULL DEFAULT '',
  `detalle03` varchar(255) DEFAULT NULL,
  `cvanulado03` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`TIPOTRA03`,`NOCOMP03`,`OCURREN03`),
  KEY `codprod03` (`CODPROD03`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Toma fisica de Producto';

-- --------------------------------------------------------

--
-- Table structure for table `movprotmp1`
--

CREATE TABLE IF NOT EXISTS `movprotmp1` (
  `codprod01` varchar(50) NOT NULL DEFAULT '0',
  `desprod01` varchar(255) DEFAULT '0',
  `unidmed01` varchar(10) DEFAULT '0',
  `cantact01` double(13,2) DEFAULT '0.00',
  `valact01` double(18,2) DEFAULT '0.00',
  `precuni01` double(18,2) DEFAULT '0.00',
  `refer01` varchar(80) DEFAULT '0',
  `ubic01` varchar(15) DEFAULT '0',
  `med101` double(10,5) DEFAULT '0.00000',
  `med201` double(10,5) DEFAULT '0.00000',
  `med301` double(10,5) DEFAULT '0.00000',
  `factorpeso01` double(10,5) DEFAULT '0.03020',
  `cvserie01` char(1) DEFAULT 'N',
  `prodconmed01` char(1) DEFAULT 'N',
  `catprod01` varchar(15) NOT NULL DEFAULT '0',
  `med401` double(10,5) DEFAULT '0.00000',
  `med501` double(10,5) DEFAULT '0.00000',
  `codbar01` varchar(15) NOT NULL DEFAULT '',
  `TIPOTRA03` varchar(4) NOT NULL DEFAULT '0',
  `NOCOMP03` varchar(20) NOT NULL DEFAULT '0',
  `OCURREN03` varchar(4) NOT NULL DEFAULT '',
  `FECMOV03` datetime DEFAULT NULL,
  `CANTID03` double(13,2) DEFAULT NULL,
  `VALOR03` double(18,2) DEFAULT NULL,
  `PU03` double(18,2) DEFAULT NULL,
  `CODDEST03` varchar(4) DEFAULT NULL,
  `CANTACT03` double(13,2) DEFAULT NULL,
  `VALACT03` double(18,2) DEFAULT NULL,
  `PRECUNI03` double(18,2) DEFAULT NULL,
  `PRECVTA03` double(18,2) DEFAULT NULL,
  `DESCVTA03` double(18,4) DEFAULT NULL,
  `nomprodesp03` varchar(255) DEFAULT NULL,
  `nomdest03` varchar(255) DEFAULT NULL,
  `med103` double(10,5) DEFAULT '0.00000',
  `med203` double(10,5) DEFAULT '0.00000',
  `med303` double(10,5) DEFAULT '0.00000',
  `med403` double(10,5) DEFAULT '0.00000',
  `med503` double(10,5) DEFAULT '0.00000',
  `desctotvta03` double(18,2) DEFAULT NULL,
  `desctotfp03` double(18,2) DEFAULT NULL,
  `recargos03` double(18,2) DEFAULT '0.00',
  `totncr03` double(18,4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movprotmp2`
--

CREATE TABLE IF NOT EXISTS `movprotmp2` (
  `bodega03` varchar(4) NOT NULL DEFAULT '',
  `fecmov03` datetime NOT NULL DEFAULT '2005-12-31 00:00:00',
  `codprod03` varchar(50) NOT NULL,
  `tipotra03` varchar(4) NOT NULL DEFAULT '',
  `nocomp03` varchar(20) NOT NULL DEFAULT '',
  `ocurren03` varchar(4) NOT NULL DEFAULT '',
  `cantid03` decimal(18,2) DEFAULT '0.00',
  `valor03` decimal(18,2) DEFAULT '0.00',
  `pu03` decimal(18,2) DEFAULT '0.00',
  `cantact03` decimal(18,2) DEFAULT '0.00',
  `valact03` decimal(18,2) DEFAULT '0.00',
  `precuni03` decimal(18,2) DEFAULT '0.00',
  `coddest03` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`bodega03`,`codprod03`,`tipotra03`,`nocomp03`,`ocurren03`),
  UNIQUE KEY `codprod01` (`codprod03`,`tipotra03`,`nocomp03`,`ocurren03`),
  KEY `reparar` (`fecmov03`,`codprod03`,`tipotra03`,`nocomp03`,`ocurren03`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movprotmpcli1`
--

CREATE TABLE IF NOT EXISTS `movprotmpcli1` (
  `codprod01` varchar(50) NOT NULL DEFAULT '0',
  `desprod01` varchar(255) DEFAULT '0',
  `unidmed01` varchar(10) DEFAULT '0',
  `cantact01` double(13,2) DEFAULT '0.00',
  `valact01` double(18,2) DEFAULT '0.00',
  `precuni01` double(18,2) DEFAULT '0.00',
  `refer01` varchar(80) DEFAULT '0',
  `ubic01` varchar(15) DEFAULT '0',
  `med101` double(10,5) DEFAULT '0.00000',
  `med201` double(10,5) DEFAULT '0.00000',
  `med301` double(10,5) DEFAULT '0.00000',
  `factorpeso01` double(10,5) DEFAULT '0.03020',
  `cvserie01` char(1) DEFAULT 'N',
  `prodconmed01` char(1) DEFAULT 'N',
  `catprod01` varchar(15) NOT NULL DEFAULT '0',
  `med401` double(10,5) DEFAULT '0.00000',
  `med501` double(10,5) DEFAULT '0.00000',
  `codbar01` varchar(15) NOT NULL DEFAULT '',
  `TIPOTRA03` varchar(4) NOT NULL DEFAULT '0',
  `NOCOMP03` varchar(20) NOT NULL DEFAULT '0',
  `OCURREN03` varchar(4) NOT NULL DEFAULT '',
  `FECMOV03` datetime DEFAULT NULL,
  `CANTID03` double(13,2) DEFAULT NULL,
  `VALOR03` double(18,2) DEFAULT NULL,
  `PU03` double(18,2) DEFAULT NULL,
  `CODDEST03` varchar(4) DEFAULT NULL,
  `CANTACT03` double(13,2) DEFAULT NULL,
  `VALACT03` double(18,2) DEFAULT NULL,
  `PRECUNI03` double(18,2) DEFAULT NULL,
  `PRECVTA03` double(18,2) DEFAULT NULL,
  `DESCVTA03` double(18,4) DEFAULT NULL,
  `nomprodesp03` varchar(255) DEFAULT NULL,
  `nomdest03` varchar(255) DEFAULT NULL,
  `med103` double(10,5) DEFAULT '0.00000',
  `med203` double(10,5) DEFAULT '0.00000',
  `med303` double(10,5) DEFAULT '0.00000',
  `med403` double(10,5) DEFAULT '0.00000',
  `med503` double(10,5) DEFAULT '0.00000',
  `desctotvta03` double(18,2) DEFAULT NULL,
  `desctotfp03` double(18,2) DEFAULT NULL,
  `recargos03` double(18,2) DEFAULT '0.00',
  `nomcte03` varchar(100) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movprotmpvend1`
--

CREATE TABLE IF NOT EXISTS `movprotmpvend1` (
  `codprod01` varchar(50) NOT NULL DEFAULT '0',
  `desprod01` varchar(255) DEFAULT '0',
  `unidmed01` varchar(10) DEFAULT '0',
  `cantact01` double(13,2) DEFAULT '0.00',
  `valact01` double(18,2) DEFAULT '0.00',
  `precuni01` double(18,2) DEFAULT '0.00',
  `refer01` varchar(80) DEFAULT '0',
  `ubic01` varchar(15) DEFAULT '0',
  `med101` double(10,5) DEFAULT '0.00000',
  `med201` double(10,5) DEFAULT '0.00000',
  `med301` double(10,5) DEFAULT '0.00000',
  `factorpeso01` double(10,5) DEFAULT '0.03020',
  `cvserie01` char(1) DEFAULT 'N',
  `prodconmed01` char(1) DEFAULT 'N',
  `catprod01` varchar(15) NOT NULL DEFAULT '0',
  `med401` double(10,5) DEFAULT '0.00000',
  `med501` double(10,5) DEFAULT '0.00000',
  `codbar01` varchar(15) NOT NULL DEFAULT '',
  `TIPOTRA03` varchar(4) NOT NULL DEFAULT '0',
  `NOCOMP03` varchar(20) NOT NULL DEFAULT '0',
  `OCURREN03` varchar(4) NOT NULL DEFAULT '',
  `FECMOV03` datetime DEFAULT NULL,
  `CANTID03` double(13,2) DEFAULT NULL,
  `VALOR03` double(18,2) DEFAULT NULL,
  `PU03` double(18,2) DEFAULT NULL,
  `CODDEST03` varchar(4) DEFAULT NULL,
  `CANTACT03` double(13,2) DEFAULT NULL,
  `VALACT03` double(18,2) DEFAULT NULL,
  `PRECUNI03` double(18,2) DEFAULT NULL,
  `PRECVTA03` double(18,2) DEFAULT NULL,
  `DESCVTA03` double(18,4) DEFAULT NULL,
  `nomprodesp03` varchar(255) DEFAULT NULL,
  `nomdest03` varchar(255) DEFAULT NULL,
  `med103` double(10,5) DEFAULT '0.00000',
  `med203` double(10,5) DEFAULT '0.00000',
  `med303` double(10,5) DEFAULT '0.00000',
  `med403` double(10,5) DEFAULT '0.00000',
  `med503` double(10,5) DEFAULT '0.00000',
  `desctotvta03` double(18,2) DEFAULT NULL,
  `desctotfp03` double(18,2) DEFAULT NULL,
  `recargos03` double(18,2) DEFAULT '0.00',
  `novend03` varchar(100) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movrol`
--

CREATE TABLE IF NOT EXISTS `movrol` (
  `rp04noemp` varchar(25) NOT NULL DEFAULT '',
  `rp04concepto` varchar(4) NOT NULL DEFAULT '',
  `rp04valor` double(18,2) DEFAULT '0.00',
  `rp04tiempo` double(18,2) DEFAULT '0.00',
  `rp04fecha` date NOT NULL DEFAULT '0000-00-00',
  `rp04status` char(1) NOT NULL DEFAULT 'A',
  `UID` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`rp04noemp`,`rp04concepto`,`rp04fecha`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movsop`
--

CREATE TABLE IF NOT EXISTS `movsop` (
  `sp01id` int(11) NOT NULL AUTO_INCREMENT,
  `sp01usr` varchar(40) NOT NULL DEFAULT '0',
  `sp01tarea` text NOT NULL,
  `sp01fechaenv` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `sp01titulo` varchar(100) NOT NULL DEFAULT '',
  `sp01status` char(1) NOT NULL DEFAULT 'a',
  `sp01fechacontesta` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `sp01tecnico` varchar(30) NOT NULL DEFAULT '',
  `sp01fechainicial` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `sp01nombreusr` varchar(35) NOT NULL DEFAULT '',
  `sp01mailusr` varchar(255) NOT NULL DEFAULT '',
  `sp01publico` enum('S','N') NOT NULL DEFAULT 'N',
  `sp01tipousr` char(1) NOT NULL DEFAULT '',
  `sp01empresa` varchar(255) DEFAULT NULL,
  `sp01area` varchar(4) NOT NULL DEFAULT '',
  `sp01prioridad` varchar(1) DEFAULT 'B',
  `sp01fecentrega` date NOT NULL,
  `sp01comint` mediumtext NOT NULL,
  `sp01programas` text NOT NULL,
  `sp01poravance` double(18,2) NOT NULL,
  `sp01modulo` varchar(4) NOT NULL,
  `sp01orden` int(11) NOT NULL DEFAULT '99',
  `sp01adicional` char(1) NOT NULL DEFAULT '0',
  `sp01fechareab` datetime DEFAULT NULL,
  `sp01numreab` int(11) DEFAULT '0',
  `sp01opmod` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`sp01id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `movtmpcte`
--

CREATE TABLE IF NOT EXISTS `movtmpcte` (
  `tipodoc43` varchar(4) NOT NULL DEFAULT '0',
  `numdoc43` varchar(20) NOT NULL DEFAULT '0',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `codcte43` varchar(20) NOT NULL DEFAULT '',
  `fecdoc43` datetime DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` datetime DEFAULT NULL,
  `saldoregmovin` double(18,2) DEFAULT NULL,
  `UID` int(5) unsigned DEFAULT NULL,
  `programa` int(1) unsigned DEFAULT '0',
  `detalle43` varchar(255) DEFAULT NULL,
  `valormov43` double(16,2) NOT NULL DEFAULT '0.00',
  `numdocpago43` varchar(255) DEFAULT NULL,
  `obsdocpago43` varchar(255) DEFAULT NULL,
  `numvencob43` varchar(4) DEFAULT NULL,
  `porccomision43` double(18,2) NOT NULL DEFAULT '0.00',
  `relacioncob43` varchar(20) DEFAULT NULL,
  `estadocob43` varchar(4) DEFAULT NULL,
  `fedoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`,`codcte43`),
  KEY `cliente` (`codcte43`),
  KEY `tipo` (`tipodoc43`),
  KEY `numero` (`numdoc43`),
  KEY `ocurren` (`ocurren43`),
  KEY `fecha` (`fecdoc43`),
  KEY `saldo` (`saldoregmov43`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Movimientos Temporales de Cliente';

-- --------------------------------------------------------

--
-- Table structure for table `movtmppag`
--

CREATE TABLE IF NOT EXISTS `movtmppag` (
  `tipodoc43` varchar(4) NOT NULL DEFAULT '0',
  `numdoc43` varchar(20) NOT NULL DEFAULT '0',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `codcte43` varchar(15) DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` datetime DEFAULT NULL,
  `saldoregmovin` double(18,2) DEFAULT NULL,
  `factcompra43` varchar(15) NOT NULL DEFAULT '',
  `UID` int(5) NOT NULL DEFAULT '0',
  `programa` int(1) NOT NULL DEFAULT '0',
  `detalle43` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`tipodoc43`,`numdoc43`,`ocurren43`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Movimientos Temporales de Proveedor';

-- --------------------------------------------------------

--
-- Table structure for table `movtmppro`
--

CREATE TABLE IF NOT EXISTS `movtmppro` (
  `TIPOTRA03` char(4) NOT NULL DEFAULT '0',
  `NOCOMP03` varchar(20) NOT NULL DEFAULT '0',
  `OCURREN03` varchar(4) NOT NULL DEFAULT '',
  `CODPROD03` varchar(50) DEFAULT NULL,
  `FECMOV03` datetime DEFAULT NULL,
  `CANTID03` double(13,2) DEFAULT NULL,
  `VALOR03` double(18,2) DEFAULT NULL,
  `CODDEST03` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`TIPOTRA03`,`NOCOMP03`,`OCURREN03`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Movimientos Temporales de Producto';

-- --------------------------------------------------------

--
-- Table structure for table `opetarcom`
--

CREATE TABLE IF NOT EXISTS `opetarcom` (
  `operador` varchar(4) NOT NULL,
  `fpago` varchar(4) NOT NULL,
  `banco` varchar(4) NOT NULL,
  `tipofin` varchar(4) NOT NULL,
  `finan` varchar(4) NOT NULL,
  `porcom` double(18,2) NOT NULL,
  `fechareg` datetime NOT NULL,
  `UID` int(4) NOT NULL,
  PRIMARY KEY (`operador`,`fpago`,`banco`,`tipofin`,`finan`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pervacemp`
--

CREATE TABLE IF NOT EXISTS `pervacemp` (
  `rp09noemp` varchar(25) NOT NULL,
  `rp09fechad` date NOT NULL,
  `rp09fechah` date NOT NULL,
  `rp09valor` double(18,2) NOT NULL,
  `rp09dias` int(2) NOT NULL,
  `rp09sdovalor` double(18,2) NOT NULL,
  `rp09sdodias` int(2) NOT NULL,
  `rp09periodo` varchar(10) NOT NULL,
  `rp09tipo` varchar(2) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`rp09noemp`,`rp09fechad`,`rp09tipo`),
  KEY `rp09fechah` (`rp09fechah`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `plancc`
--

CREATE TABLE IF NOT EXISTS `plancc` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `pcodigo` int(18) NOT NULL DEFAULT '0',
  `pmodulo` varchar(5) NOT NULL DEFAULT '',
  `pgrupo` varchar(5) NOT NULL DEFAULT '',
  `pdescripcion` varchar(50) NOT NULL DEFAULT '',
  `pcc01` varchar(5) NOT NULL DEFAULT '',
  `pcc02` varchar(5) NOT NULL DEFAULT '',
  `pcc03` varchar(5) NOT NULL DEFAULT '',
  `pcc04` varchar(5) NOT NULL DEFAULT '',
  `pcc05` varchar(5) NOT NULL DEFAULT '',
  `ppord` double(18,2) NOT NULL DEFAULT '0.00',
  `UID` int(4) NOT NULL DEFAULT '0',
  `pfechareg` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`pid`,`pdescripcion`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

-- --------------------------------------------------------

--
-- Table structure for table `precprov`
--

CREATE TABLE IF NOT EXISTS `precprov` (
  `codprov` varchar(15) NOT NULL,
  `codprod` varchar(50) NOT NULL,
  `precio` double(18,6) DEFAULT NULL,
  `fechareg` datetime NOT NULL,
  `UID` int(3) NOT NULL,
  PRIMARY KEY (`codprov`,`codprod`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `preemp`
--

CREATE TABLE IF NOT EXISTS `preemp` (
  `rp03noemp1` varchar(25) NOT NULL DEFAULT '',
  `rp03concepto` varchar(4) NOT NULL DEFAULT '',
  `rp03tipocompte` char(1) NOT NULL DEFAULT '',
  `rp03nocompte` varchar(7) NOT NULL DEFAULT '',
  `rp03noemp2` varchar(25) DEFAULT NULL,
  `rp03fecha` datetime DEFAULT NULL,
  `rp03dbcr` int(1) DEFAULT NULL,
  `rp03valor` double(18,2) DEFAULT '0.00',
  `rp03cuota` double(18,2) DEFAULT '0.00',
  `rp03detalle` varchar(50) DEFAULT NULL,
  `UID` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`rp03noemp1`,`rp03concepto`,`rp03tipocompte`,`rp03nocompte`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `promoctecondp`
--

CREATE TABLE IF NOT EXISTS `promoctecondp` (
  `codigocte` varchar(20) NOT NULL,
  `tipoprod` varchar(4) NOT NULL DEFAULT '',
  `condpago` varchar(4) DEFAULT NULL,
  `precio` int(2) NOT NULL,
  `fecregistro` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `UID` char(2) NOT NULL,
  PRIMARY KEY (`codigocte`,`tipoprod`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `promovta`
--

CREATE TABLE IF NOT EXISTS `promovta` (
  `codpromo` int(20) NOT NULL,
  `despromo` varchar(255) NOT NULL,
  `codprod` varchar(50) NOT NULL,
  `dstoval` double(18,2) NOT NULL,
  `dstopor` double(18,2) NOT NULL,
  `cantmin` int(10) NOT NULL,
  `cantmax` int(10) NOT NULL,
  `fechades` date NOT NULL,
  `fechahas` date NOT NULL,
  `UID` int(4) NOT NULL,
  `fechareg` datetime NOT NULL,
  `siva` varchar(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`codpromo`,`codprod`,`fechades`,`fechahas`,`cantmin`,`cantmax`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `prospectos`
--

CREATE TABLE IF NOT EXISTS `prospectos` (
  `codcte01` varchar(15) NOT NULL DEFAULT '0',
  `nomcte01` varchar(40) DEFAULT '0',
  `cv1cte01` char(1) DEFAULT '6',
  `cv2cte01` char(1) DEFAULT '1',
  `tipcte01` varchar(20) DEFAULT '0',
  `ofienccte01` varchar(4) DEFAULT '0',
  `vendcte01` varchar(4) DEFAULT '0',
  `cobrcte01` varchar(4) DEFAULT '0',
  `loccte01` varchar(4) DEFAULT '0',
  `dircte01` varchar(40) DEFAULT '0',
  `telcte01` varchar(11) DEFAULT '0',
  `cascte01` varchar(15) DEFAULT '0',
  `repleg01` varchar(30) DEFAULT NULL,
  `fecing01` datetime DEFAULT NULL,
  `condpag01` int(1) unsigned DEFAULT '0',
  `desctocte01` double(6,2) DEFAULT '0.00',
  `limcred01` double(18,2) DEFAULT '0.00',
  `desppar01` char(1) DEFAULT 'S',
  `cheqpro01` int(2) DEFAULT '0',
  `sdoeje01` double(18,2) DEFAULT '0.00',
  `sdoant01` double(18,2) DEFAULT '0.00',
  `sdoact01` double(18,2) DEFAULT '0.00',
  `acudbm01` double(18,2) DEFAULT '0.00',
  `acucrm01` double(18,2) DEFAULT '0.00',
  `acudbe01` double(18,2) DEFAULT '0.00',
  `acucre01` double(18,2) DEFAULT '0.00',
  `comentcte01` char(2) DEFAULT '0',
  `statuscte01` int(1) unsigned DEFAULT '0',
  `identcte01` varchar(15) DEFAULT '0',
  `cordcte01` varchar(4) DEFAULT '0',
  `limcant01` int(1) unsigned DEFAULT '0',
  `pagleg01` varchar(30) DEFAULT '0',
  `telcte01b` varchar(11) DEFAULT '0',
  `telcte01c` varchar(11) DEFAULT '0',
  `emailcte01` varchar(255) DEFAULT NULL,
  `ctacgcte01` varchar(15) DEFAULT '0',
  `obsercte01` text,
  `totexceso01` double(18,2) DEFAULT '0.00',
  `imagencte01` varchar(100) DEFAULT NULL,
  `block` tinyint(1) unsigned DEFAULT NULL,
  `UID` int(3) unsigned DEFAULT NULL,
  `ultimoacceso` bigint(14) DEFAULT NULL,
  `idcli` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `catcte01` varchar(20) DEFAULT NULL,
  `transferido` char(1) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `idcat` varchar(255) DEFAULT NULL,
  `showroom` char(1) NOT NULL DEFAULT 'N',
  `orden` double(18,2) NOT NULL DEFAULT '0.00',
  `website` varchar(255) NOT NULL DEFAULT '',
  `acceder` char(2) NOT NULL DEFAULT 'S',
  `cteasoc01` varchar(20) DEFAULT NULL,
  `accpros01` char(1) DEFAULT NULL,
  `accgerente01` varchar(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`idcli`),
  UNIQUE KEY `codcte01` (`codcte01`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `rdep`
--

CREATE TABLE IF NOT EXISTS `rdep` (
  `numRuc` varchar(13) DEFAULT NULL,
  `anio` varchar(4) NOT NULL DEFAULT '',
  `tipIdRet` char(1) NOT NULL DEFAULT '',
  `idRet` varchar(10) NOT NULL DEFAULT '',
  `dirCal` varchar(20) NOT NULL DEFAULT '',
  `dirNum` varchar(10) NOT NULL DEFAULT '',
  `dirCiu` varchar(5) NOT NULL DEFAULT '',
  `dirProv` char(3) NOT NULL DEFAULT '',
  `tel` varchar(9) NOT NULL DEFAULT '',
  `sisSalNet` char(1) NOT NULL DEFAULT '',
  `suelSal` float(9,2) NOT NULL DEFAULT '0.00',
  `sobSuelComRemu` float(9,2) NOT NULL DEFAULT '0.00',
  `decimTer` float(9,2) NOT NULL DEFAULT '0.00',
  `decimCuar` float(9,2) NOT NULL DEFAULT '0.00',
  `fondoReserva` float(9,2) NOT NULL,
  `partUtil` float(9,2) NOT NULL DEFAULT '0.00',
  `desauOtras` float(9,2) NOT NULL DEFAULT '0.00',
  `apoPerIess` float(9,2) NOT NULL DEFAULT '0.00',
  `deducVivienda` float(9,2) NOT NULL DEFAULT '0.00',
  `deducSalud` float(9,2) NOT NULL DEFAULT '0.00',
  `deducEduca` float(9,2) NOT NULL DEFAULT '0.00',
  `deducAliement` float(9,2) DEFAULT '0.00',
  `deducVestim` float(9,2) NOT NULL DEFAULT '0.00',
  `rebEspDiscap` float(9,2) NOT NULL DEFAULT '0.00',
  `rebEspTerEd` float(9,2) NOT NULL DEFAULT '0.00',
  `impRentEmpl` float(9,2) DEFAULT '0.00',
  `subTotal` float(9,2) NOT NULL,
  `numRet` int(2) NOT NULL DEFAULT '0',
  `numMesEmplead` int(2) NOT NULL DEFAULT '0',
  `intGrabGen` float(9,2) NOT NULL DEFAULT '0.00',
  `deduccGastosOtrEmpl` float(9,2) NOT NULL DEFAULT '0.00',
  `otrRebjOtrEmpl` float(9,2) NOT NULL DEFAULT '0.00',
  `basImp` float(9,2) NOT NULL,
  `impRentCaus` float(9,2) NOT NULL DEFAULT '0.00',
  `valRet` float(9,2) NOT NULL DEFAULT '0.00',
  `valorImpempAnter` float(9,2) NOT NULL DEFAULT '0.00',
  `anioRet` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reoc`
--

CREATE TABLE IF NOT EXISTS `reoc` (
  `numeroRuc` varchar(13) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `anio` varchar(4) NOT NULL DEFAULT '',
  `mes` char(2) NOT NULL DEFAULT '',
  `tpIdProv` char(2) NOT NULL DEFAULT '',
  `idProv` varchar(13) NOT NULL DEFAULT '',
  `tipoComp` char(2) NOT NULL DEFAULT '',
  `aut` varchar(10) NOT NULL DEFAULT '',
  `estab` char(3) NOT NULL DEFAULT '',
  `ptoEmi` char(3) NOT NULL DEFAULT '',
  `sec` varchar(7) NOT NULL DEFAULT '',
  `fechaEmiCom` varchar(10) NOT NULL DEFAULT '0000-00-00',
  `codRetAir` varchar(5) NOT NULL DEFAULT '',
  `porcentaje` int(1) NOT NULL DEFAULT '0',
  `base0` double(9,2) NOT NULL DEFAULT '0.00',
  `baseGrav` double(9,2) NOT NULL DEFAULT '0.00',
  `baseNoGrav` double(9,2) NOT NULL DEFAULT '0.00',
  `valRetAir` double(9,2) NOT NULL DEFAULT '0.00',
  `autRet` varchar(10) NOT NULL DEFAULT '',
  `estabRet` char(3) NOT NULL DEFAULT '',
  `ptoEmiRet` char(3) NOT NULL DEFAULT '',
  `secRet` varchar(7) NOT NULL DEFAULT '',
  `fechaEmiRet` varchar(10) NOT NULL DEFAULT '0000-00-00',
  `autRet1` varchar(10) NOT NULL DEFAULT '',
  `estabRet1` char(3) NOT NULL DEFAULT '',
  `ptoEmiRet1` char(3) NOT NULL DEFAULT '',
  `secRet1` varchar(7) NOT NULL DEFAULT '',
  `fechaEmiRet1` varchar(10) NOT NULL DEFAULT '0000-00-00',
  KEY `anio` (`anio`,`mes`,`idProv`,`estab`,`ptoEmi`,`sec`,`codRetAir`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rotinventario`
--

CREATE TABLE IF NOT EXISTS `rotinventario` (
  `tipotra04` varchar(4) NOT NULL,
  `nocomp04` varchar(20) NOT NULL,
  `ocurren04` varchar(6) NOT NULL,
  `codprod04` varchar(50) NOT NULL,
  `fecmov04` datetime DEFAULT NULL,
  `codmueble04` varchar(4) DEFAULT NULL,
  `status04` varchar(4) DEFAULT NULL,
  `uid` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`tipotra04`,`nocomp04`,`ocurren04`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `solvacemp`
--

CREATE TABLE IF NOT EXISTS `solvacemp` (
  `rp10noemp` varchar(25) NOT NULL,
  `rp10estado` varchar(2) NOT NULL,
  `rp10fecdes` date NOT NULL,
  `rp10fechas` date NOT NULL,
  `rp10hist` text NOT NULL,
  `rp10observacion` varchar(255) NOT NULL,
  `rp10fecreg` datetime NOT NULL,
  `UID` varchar(4) NOT NULL,
  `rp10id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`rp10id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `sopprog`
--

CREATE TABLE IF NOT EXISTS `sopprog` (
  `sop01id` int(11) NOT NULL AUTO_INCREMENT,
  `sop01usr` varchar(20) NOT NULL DEFAULT '0',
  `sop01tarea` text NOT NULL,
  `sop01fechaenv` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `sop01titulo` varchar(100) NOT NULL DEFAULT '',
  `sop01status` enum('a','i') NOT NULL DEFAULT 'a',
  PRIMARY KEY (`sop01id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbCorteCartera`
--

CREATE TABLE IF NOT EXISTS `tbCorteCartera` (
  `codcte43` varchar(20) NOT NULL DEFAULT '',
  `tipodoc43` varchar(4) NOT NULL DEFAULT '',
  `numdoc43` varchar(20) NOT NULL DEFAULT '',
  `ocurren43` varchar(4) NOT NULL DEFAULT '',
  `saldoregmov43` double(18,2) DEFAULT NULL,
  `feccobro43` date DEFAULT NULL,
  `fecdoc43` datetime DEFAULT NULL,
  `totdoc43` double(18,2) DEFAULT NULL,
  `valormov43` double(18,2) DEFAULT NULL,
  `fechaActual` datetime DEFAULT NULL,
  `diasVencidos` int(8) DEFAULT NULL,
  `UID` int(4) DEFAULT NULL,
  `id` int(8) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tmpmovproniif`
--

CREATE TABLE IF NOT EXISTS `tmpmovproniif` (
  `uid` varchar(4) NOT NULL,
  `idbod` varchar(4) NOT NULL,
  `codprod` varchar(50) NOT NULL,
  `desprod` varchar(255) NOT NULL,
  `refer` varchar(255) NOT NULL,
  `catprod` varchar(50) NOT NULL,
  `cantidad` float(13,4) NOT NULL DEFAULT '0.0000',
  `costotot` float(13,4) NOT NULL DEFAULT '0.0000',
  `precioventa` float(13,4) NOT NULL DEFAULT '0.0000',
  `gventa` float(13,4) NOT NULL DEFAULT '0.0000',
  `gpresupuesto` float(13,4) NOT NULL DEFAULT '0.0000',
  `gotros` float(13,4) NOT NULL DEFAULT '0.0000',
  `vnr` float(13,4) NOT NULL,
  `nuevocostotot` float(13,4) NOT NULL,
  `variacion` float(13,4) NOT NULL,
  KEY `uid` (`uid`,`idbod`,`codprod`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Movimientos de NIIF Inventarios para calculo del VNR';

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL DEFAULT '',
  `usuario` varchar(100) DEFAULT '',
  `tipousr` varchar(4) DEFAULT NULL,
  `localidadusr` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='usuarios para enviar correos' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE IF NOT EXISTS `ventas` (
  `tpIdCliente` char(2) NOT NULL DEFAULT '',
  `idCliente` varchar(13) NOT NULL DEFAULT '',
  `tipoComprobante` char(2) NOT NULL DEFAULT '',
  `numeroComprobantes` varchar(12) NOT NULL DEFAULT '',
  `baseNoGraIva` varchar(12) NOT NULL DEFAULT '0.00',
  `baseImponible` varchar(12) NOT NULL DEFAULT '',
  `baseImpGrav` varchar(12) NOT NULL DEFAULT '',
  `montoIva` varchar(12) NOT NULL DEFAULT '',
  `valorRetIva` varchar(12) NOT NULL DEFAULT '',
  `valorRetRenta` varchar(12) NOT NULL DEFAULT '',
  `anio` varchar(4) NOT NULL DEFAULT '',
  `mes` char(2) NOT NULL DEFAULT '',
  PRIMARY KEY (`anio`,`mes`,`idCliente`,`tipoComprobante`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ventperd`
--

CREATE TABLE IF NOT EXISTS `ventperd` (
  `codvenperd` int(10) NOT NULL AUTO_INCREMENT,
  `codprod` varchar(50) NOT NULL DEFAULT '',
  `nomprod` varchar(255) NOT NULL DEFAULT '',
  `codmotiv` varchar(5) NOT NULL DEFAULT '',
  `desmotiv` varchar(50) NOT NULL DEFAULT '',
  `fechavenperd` datetime NOT NULL,
  `codusuar` varchar(50) NOT NULL DEFAULT '',
  `nomusuar` varchar(255) NOT NULL DEFAULT '',
  `codbode` varchar(5) NOT NULL DEFAULT '',
  `nombode` varchar(255) NOT NULL DEFAULT '',
  `codcli` varchar(20) NOT NULL DEFAULT '',
  `nomcli` varchar(255) NOT NULL DEFAULT '',
  `telcli` varchar(11) NOT NULL DEFAULT '',
  `cantprod` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`codvenperd`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `vwCartera`
--
CREATE TABLE IF NOT EXISTS `vwCartera` (
`codcte43` varchar(20)
,`tipodoc43` varchar(4)
,`numdoc43` varchar(20)
,`ocurren43` varchar(4)
,`saldoregmov43` double(18,2)
,`fechaActual` date
,`feccobro43` date
,`diasVencidos` int(7)
,`fecdoc43` datetime
,`totdoc43` double(18,2)
,`valormov43` double(18,2)
);
-- --------------------------------------------------------

--
-- Structure for view `vwCartera`
--
DROP TABLE IF EXISTS `vwCartera`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vwCartera` AS select `movcte`.`codcte43` AS `codcte43`,`movcte`.`tipodoc43` AS `tipodoc43`,`movcte`.`numdoc43` AS `numdoc43`,`movcte`.`ocurren43` AS `ocurren43`,`movcte`.`saldoregmov43` AS `saldoregmov43`,curdate() AS `fechaActual`,`movcte`.`feccobro43` AS `feccobro43`,(to_days(date_format(curdate(),_latin1'%Y-%m-%d')) - to_days(`movcte`.`feccobro43`)) AS `diasVencidos`,`movcte`.`fecdoc43` AS `fecdoc43`,`movcte`.`totdoc43` AS `totdoc43`,`movcte`.`valormov43` AS `valormov43` from `movcte` where ((`movcte`.`tipodoc43` < _latin1'50') and (`movcte`.`saldoregmov43` > 0) and (`movcte`.`feccobro43` < curdate()));
