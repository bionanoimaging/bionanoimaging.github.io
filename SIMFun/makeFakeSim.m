A=readim('./Ernst_Abbe.jpg');
A=A{1};
Z=readim('./carl_zeiss.jpg');
Z=rot90(Z{1});
Z=resample(extract(Z,size(A)/2,[87 147]),2)

[resBin,resRef]=SIMFun(A,Z,6,0.499)

writeim(resBin,'ZeissAbbeSIM.tif');
writeim(resRef,'ZeissAbbeRef.tif');

A=readim('./Microscope_Zeiss_1879.jpg');
A=A{1};
[resBin,resRef]=SIMFun(A,[],6,0.499)
writeim(resBin,'MicroscopeSIM.tif');
writeim(resRef,'MicroscopeRef.tif');



A=readim('./Ernst_Abbe.jpg');
A=A{1};
Z=readim('./AbbeEquation.jpg');
Z=rot90(Z{1});
Z=resample(extract(Z,size(A)*2.5,[927 1052]),0.4)

[resBin,resRef]=SIMFun2({A,Z},6,0.499)
writeim(resBin,'AbbeEquationSIM.tif');
writeim(resRef,'AbbeEquationRef.tif');

B=extract(rotation(A,pi/4,3,'linear'),size(A));

Y=readim('./carl_zeiss.jpg');
Y=rotation(Y{1},pi/4,3,'linear');
Y=resample(extract(Y,size(A)/2,[270 160]),2)

Stk={A,Z,B,Y}
cat(3,Stk)
[resBin,resRef]=SIMFun2(Stk,6,0.499)
writeim(resBin,'AbbeEquation4SIM.tif');

% 

A=readim('./Ernst_Abbe.jpg');
B=readim('./carl_zeiss.jpg');
C=readim('./Friedrich_von_schiller.jpg');
D=readim('./Goethe_(Stieler_1828).jpg');

A=A{1}+A{2}+A{3};
B=B{1}+B{2}+B{3};
C=C{1}+C{2}+C{3};
D=D{1}+D{2}+D{3};


B=extract(resample(B,3),size(A),[442,244])
C=extract(resample(C,0.8),size(A),[200,225])
D=extract(resample(D,0.5),size(A),[484,328])
cat(3,A,B,C,D)
Stk={A,B,C,D}
[resBin,resRef]=SIMFun2(Stk,6,0.15)
writeim(resBin,'FamousMenSparseSIM.tif');

[resBin,resRef]=SIMFun2({resample(A,0.5),resample(C,0.5)},12,0.499)
writeim(resBin,'AbbeSchillerCoarseSIM.tif');
writeim(resRef,'AbbeSchillerCoarseRef.tif');

A=readim('./Microscope_Zeiss_1879.jpg');
A=A{1};
[resBin,resRef]=SIMFun2({resample(A,0.5)},12,0.499)
writeim(resBin,'MicroscopeSIM.tif');
writeim(resRef,'MicroscopeRef.tif');


% -----------------  HF, LF  mixing

b1=readim('RainerFroh.jpg')
b2=readim('RainerSauer.jpg')
ms=[1700,1000];
mp=[892,819];

b1=readim('RainerFroh2.jpg')
b2=readim('RainerSauer2.jpg')
ms=floor([1700,1000]/3);
mp=[1030,758];

b1=readim('RainerFroh3.jpg')
b2=readim('RainerSauer3.jpg')
ms=floor([1700,1000]/3);
mp=[1005,710];

b1=readim('RainerFroh4.jpg')
b2=readim('RainerSauer4.jpg')
ms=floor([1700,1000]/1.5);
mp=[1116,759];

b1=readim('RainerFroh5.jpg')
b2=readim('RainerSauer5.jpg')
ms=floor([1700,1000]/1.5);
mp=[1116,759];
extract(b1{2},ms,mp)

fl=0.025;
mycol=1;
b4=kcorrelator({b1{mycol},b2{mycol}});
b3=extract(b1{mycol},ms,mp); b4=extract(b4,ms,mp);
myres1=rot90(resample(doSpliceFreq(b3,b4,fl),0.5),3);
mycol=3;
b4=kcorrelator({b1{mycol},b2{mycol}});
b3=extract(b1{mycol},ms,mp); b4=extract(b4,ms,mp);
myres3=rot90(resample(doSpliceFreq(b3,b4,fl),0.5),3);

fl=0.025;
mycol=2;
b4=kcorrelator({b1{mycol},b2{mycol}});
b3=extract(b1{mycol},ms,mp); b4=extract(b4,ms,mp);
myres2=rot90(resample(doSpliceFreq(b3,b4,fl),0.5),3)
tiffwrite('RainerAmbivalent5.tif',myres2,'yes');

myres=joinchannels('RGB',myres1,myres2,myres3)
myres=254*myres/max(myres{1})
writeim(myres,'RainerAmbivalent5.jpeg');
