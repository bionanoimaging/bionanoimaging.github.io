% [res1,resRef]=SimFun2(Img,fac,mthresh), Img has to be a cell array of images
function [res1,resRef]=SIMFun2(Img,fac,mthresh)
if nargin < 3
    mthresh=0.499;
end
if nargin < 2
    fac=6;
end


for k=1:length(Img)
alpha=pi*(k-1)/length(Img);    
Img1=resample(Img{k},fac);
Img1=Img1/max(Img1);
mygra=cos(alpha)*xx(Img1)-sin(alpha)*yy(Img1);
gra1=mod(mygra/fac+Img1/2,1);

    if k==1
        gra= (gra1>mthresh);
    else
        gra= (gra>0) & (gra1>mthresh);
    end
end
ref=mod(xx(Img1)/fac,1);

res1=dip_image(floor(255*gra),'uint8');
resRef=dip_image(255*(ref>=0.5),'uint8');

