function [res1,resRef]=SimFun(Img1,Img2,fac,mthresh)
if nargin < 4
    mthresh=0.499;
end
if nargin < 3
    fac=6;
end

Img1=resample(Img1,fac);
Img1=Img1/max(Img1);
gra1=mod(xx(Img1)/fac+Img1/2,1);
if ~isempty(Img2)
    Img2=resample(Img2,fac);
    Img2=Img2/max(Img2);
    gra2=mod(yy(Img2)/fac+Img2/2,1);
end
%gra=mod(xx(Img1)/fac+Img2/2+yy(Img2)/fac+Img2/2,1);
ref=mod(xx(Img1)/fac,1);

% gra=mod(xx(Img1)/fac+Img2+yy(Img2)/fac+Img2,1);
if isempty(Img2)
    gra=gra1>mthresh;
else
    gra= (gra1>mthresh) | (gra2>mthresh);
end

res1=dip_image(floor(255*gra),'uint8');
resRef=dip_image(255*(ref>=0.5),'uint8');

