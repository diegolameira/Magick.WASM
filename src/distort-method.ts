/* Copyright Dirk Lemstra https://github.com/dlemstra/Magick.WASM */

export enum DistortMethod
{
    Undefined,
    Affine,
    AffineProjection,
    ScaleRotateTranslate,
    Perspective,
    PerspectiveProjection,
    BilinearForward,
    BilinearReverse,
    Polynomial,
    Arc,
    Polar,
    DePolar,
    Cylinder2Plane,
    Plane2Cylinder,
    Barrel,
    BarrelInverse,
    Shepards,
    Resize,
    Sentinel,
    RigidAffine,
}