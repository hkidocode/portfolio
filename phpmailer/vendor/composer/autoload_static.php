<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb3590b1883c5db5219a7ba6a88494381
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb3590b1883c5db5219a7ba6a88494381::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb3590b1883c5db5219a7ba6a88494381::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
