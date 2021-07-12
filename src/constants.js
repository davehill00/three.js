export const REVISION = '131dev';
export const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
export const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
export const CullFaceNone = 0;
export const CullFaceBack = 1;
export const CullFaceFront = 2;
export const CullFaceFrontBack = 3;
export const BasicShadowMap = 0;
export const PCFShadowMap = 1;
export const PCFSoftShadowMap = 2;
export const VSMShadowMap = 3;
export const FrontSide = 0;
export const BackSide = 1;
export const DoubleSide = 2;
export const FlatShading = 1;
export const SmoothShading = 2;
export const NoBlending = 0;
export const NormalBlending = 1;
export const AdditiveBlending = 2;
export const SubtractiveBlending = 3;
export const MultiplyBlending = 4;
export const CustomBlending = 5;
export const AddEquation = 100;
export const SubtractEquation = 101;
export const ReverseSubtractEquation = 102;
export const MinEquation = 103;
export const MaxEquation = 104;
export const ZeroFactor = 200;
export const OneFactor = 201;
export const SrcColorFactor = 202;
export const OneMinusSrcColorFactor = 203;
export const SrcAlphaFactor = 204;
export const OneMinusSrcAlphaFactor = 205;
export const DstAlphaFactor = 206;
export const OneMinusDstAlphaFactor = 207;
export const DstColorFactor = 208;
export const OneMinusDstColorFactor = 209;
export const SrcAlphaSaturateFactor = 210;
export const NeverDepth = 0;
export const AlwaysDepth = 1;
export const LessDepth = 2;
export const LessEqualDepth = 3;
export const EqualDepth = 4;
export const GreaterEqualDepth = 5;
export const GreaterDepth = 6;
export const NotEqualDepth = 7;
export const MultiplyOperation = 0;
export const MixOperation = 1;
export const AddOperation = 2;
export const NoToneMapping = 0;
export const LinearToneMapping = 1;
export const ReinhardToneMapping = 2;
export const CineonToneMapping = 3;
export const ACESFilmicToneMapping = 4;
export const CustomToneMapping = 5;

export const UVMapping = 300;
export const CubeReflectionMapping = 301;
export const CubeRefractionMapping = 302;
export const EquirectangularReflectionMapping = 303;
export const EquirectangularRefractionMapping = 304;
export const CubeUVReflectionMapping = 306;
export const CubeUVRefractionMapping = 307;
export const RepeatWrapping = 1000;
export const ClampToEdgeWrapping = 1001;
export const MirroredRepeatWrapping = 1002;
export const NearestFilter = 1003;
export const NearestMipmapNearestFilter = 1004;
export const NearestMipMapNearestFilter = 1004;
export const NearestMipmapLinearFilter = 1005;
export const NearestMipMapLinearFilter = 1005;
export const LinearFilter = 1006;
export const LinearMipmapNearestFilter = 1007;
export const LinearMipMapNearestFilter = 1007;
export const LinearMipmapLinearFilter = 1008;
export const LinearMipMapLinearFilter = 1008;
export const UnsignedByteType = 1009;
export const ByteType = 1010;
export const ShortType = 1011;
export const UnsignedShortType = 1012;
export const IntType = 1013;
export const UnsignedIntType = 1014;
export const FloatType = 1015;
export const HalfFloatType = 1016;
export const UnsignedShort4444Type = 1017;
export const UnsignedShort5551Type = 1018;
export const UnsignedShort565Type = 1019;
export const UnsignedInt248Type = 1020;
export const AlphaFormat = 1021;
export const RGBFormat = 1022;
export const RGBAFormat = 1023;
export const LuminanceFormat = 1024;
export const LuminanceAlphaFormat = 1025;
export const RGBEFormat = RGBAFormat;
export const DepthFormat = 1026;
export const DepthStencilFormat = 1027;
export const RedFormat = 1028;
export const RedIntegerFormat = 1029;
export const RGFormat = 1030;
export const RGIntegerFormat = 1031;
export const RGBIntegerFormat = 1032;
export const RGBAIntegerFormat = 1033;

export const RGB_S3TC_DXT1_Format = 33776;
export const RGBA_S3TC_DXT1_Format = 33777;
export const RGBA_S3TC_DXT3_Format = 33778;
export const RGBA_S3TC_DXT5_Format = 33779;
export const RGB_PVRTC_4BPPV1_Format = 35840;
export const RGB_PVRTC_2BPPV1_Format = 35841;
export const RGBA_PVRTC_4BPPV1_Format = 35842;
export const RGBA_PVRTC_2BPPV1_Format = 35843;
export const RGB_ETC1_Format = 36196;
export const RGB_ETC2_Format = 37492;
export const RGBA_ETC2_EAC_Format = 37496;
export const RGBA_ASTC_4x4_Format = 37808;
export const RGBA_ASTC_5x4_Format = 37809;
export const RGBA_ASTC_5x5_Format = 37810;
export const RGBA_ASTC_6x5_Format = 37811;
export const RGBA_ASTC_6x6_Format = 37812;
export const RGBA_ASTC_8x5_Format = 37813;
export const RGBA_ASTC_8x6_Format = 37814;
export const RGBA_ASTC_8x8_Format = 37815;
export const RGBA_ASTC_10x5_Format = 37816;
export const RGBA_ASTC_10x6_Format = 37817;
export const RGBA_ASTC_10x8_Format = 37818;
export const RGBA_ASTC_10x10_Format = 37819;
export const RGBA_ASTC_12x10_Format = 37820;
export const RGBA_ASTC_12x12_Format = 37821;
export const RGBA_BPTC_Format = 36492;
export const SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
export const SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
export const SRGB8_ALPHA8_ASTC_5x5_Format = 37842;
export const SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
export const SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
export const SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
export const SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
export const SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
export const SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
export const SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
export const SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
export const SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
export const SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
export const SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
export const LoopOnce = 2200;
export const LoopRepeat = 2201;
export const LoopPingPong = 2202;
export const InterpolateDiscrete = 2300;
export const InterpolateLinear = 2301;
export const InterpolateSmooth = 2302;
export const ZeroCurvatureEnding = 2400;
export const ZeroSlopeEnding = 2401;
export const WrapAroundEnding = 2402;
export const NormalAnimationBlendMode = 2500;
export const AdditiveAnimationBlendMode = 2501;
export const TrianglesDrawMode = 0;
export const TriangleStripDrawMode = 1;
export const TriangleFanDrawMode = 2;
export const LinearEncoding = 3000;
export const sRGBEncoding = 3001;
export const GammaEncoding = 3007;
export const RGBEEncoding = 3002;
export const LogLuvEncoding = 3003;
export const RGBM7Encoding = 3004;
export const RGBM16Encoding = 3005;
export const RGBDEncoding = 3006;
export const BasicDepthPacking = 3200;
export const RGBADepthPacking = 3201;
export const TangentSpaceNormalMap = 0;
export const ObjectSpaceNormalMap = 1;

export const ZeroStencilOp = 0;
export const KeepStencilOp = 7680;
export const ReplaceStencilOp = 7681;
export const IncrementStencilOp = 7682;
export const DecrementStencilOp = 7683;
export const IncrementWrapStencilOp = 34055;
export const DecrementWrapStencilOp = 34056;
export const InvertStencilOp = 5386;

export const NeverStencilFunc = 512;
export const LessStencilFunc = 513;
export const EqualStencilFunc = 514;
export const LessEqualStencilFunc = 515;
export const GreaterStencilFunc = 516;
export const NotEqualStencilFunc = 517;
export const GreaterEqualStencilFunc = 518;
export const AlwaysStencilFunc = 519;

export const StaticDrawUsage = 35044;
export const DynamicDrawUsage = 35048;
export const StreamDrawUsage = 35040;
export const StaticReadUsage = 35045;
export const DynamicReadUsage = 35049;
export const StreamReadUsage = 35041;
export const StaticCopyUsage = 35046;
export const DynamicCopyUsage = 35050;
export const StreamCopyUsage = 35042;

export const GLSL1 = '100';
export const GLSL3 = '300 es';
